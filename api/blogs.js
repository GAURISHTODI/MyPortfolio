// api/blogs.js
const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const matter = require('gray-matter');
const { marked } = require('marked');

const app = express();
app.use(express.json());

const postsDirectory = path.join(process.cwd(), '_posts');

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

app.get('/api/blogs', async (req, res) => {
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
        res.status(500).json({ error: 'Failed to load blog posts.' });
    }
});

module.exports = app;