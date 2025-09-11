// src/pages/Blogs.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogPost {
  slug: string; title: string; excerpt: string; date: string; category: string; readTime: string;
}

const Blogs = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blogs').then(res => res.json()).then(data => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen font-oswald">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">My Blogs</h1>
            </div>
            {loading ? <p className="text-center">Loading posts...</p> : (
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link to={`/blog/${post.slug}`} key={post.slug} className="block">
                    <Card className="hover:shadow-lg transition-shadow h-full">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="secondary">{post.category}</Badge>
                          <span className="text-xs text-muted-foreground">{post.readTime}</span>
                        </div>
                        <CardTitle className="text-xl font-bold text-left">{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-left mb-4">{post.excerpt}</p>
                        <span className="text-sm text-muted-foreground">
                          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;