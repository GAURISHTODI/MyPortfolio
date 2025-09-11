import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface Post {
    title: string;
    date: string;
    content: string; // This will be HTML content
}

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;

        const fetchPost = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/blogs?slug=${slug}`);
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error('Failed to fetch post:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Loading post...</p>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Post not found. <Link to="/blogs" className="underline">Back to blogs</Link></p>
            </div>
        );
    }

    return (
        <div className="min-h-screen font-oswald">
            <Navigation />
            <main className="pt-24 pb-16">
                <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <header className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
                            {post.title}
                        </h1>
                        <p className="text-center text-muted-foreground">
                            Published on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </header>
                    <div
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>
            </main>
            <Footer />
        </div>
    );
};

export default BlogPost;