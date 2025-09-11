// api/blogs.js (Corrected Version)

const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const matter = require('gray-matter');
const { marked } = require('marked');

const router = express.Router(); // 1. Use Router instead of app

// 2. Fix the path to look for '_posts' inside the 'api' folder
const postsDirectory = path.join(__dirname, '_posts');

async function getAllPosts() {
    const fileNames = await fs.readdir(postsDirectory);
    const allPostsData = await Promise.all(fileNames.map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = await fs.readFile(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        return { slug, ...matterResult.data };
    }));
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

async function getPostBySlug(slug) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const htmlContent = marked(content);
    return { slug, content: htmlContent, ...data };
}

// 3. The route is now just '/blogs' because '/api' is handled in server.js
router.get('/blogs', async (req, res) => {
    try {
        const { slug } = req.query;
        if (slug) {
            const post = await getPostBySlug(slug);
            res.status(200).json(post);
        } else {
            const posts = await getAllPosts();
            res.status(200).json(posts);
        }
    } catch (error) {
        console.error('Error in /api/blogs:', error); // Added for better debugging
        res.status(500).json({ error: 'Failed to load blog posts.' });
    }
});

module.exports = router; // 4. Export the router