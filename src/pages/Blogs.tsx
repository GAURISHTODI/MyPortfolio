import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Blogs = () => {
  const blogPosts = [
    {
      title: "Getting Started with React and TypeScript",
      excerpt: "A comprehensive guide to building modern web applications with React and TypeScript.",
      date: "Coming Soon",
      category: "Web Development",
      readTime: "5 min read"
    },
    {
      title: "Machine Learning Fundamentals",
      excerpt: "Understanding the basics of machine learning and its practical applications.",
      date: "Coming Soon", 
      category: "AI/ML",
      readTime: "8 min read"
    },
    {
      title: "Building Scalable APIs with Node.js",
      excerpt: "Best practices for creating robust and scalable backend services.",
      date: "Coming Soon",
      category: "Backend",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen font-oswald">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-right">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
                My Blogs
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-extralight">
                Thoughts, tutorials, and insights on technology and development
              </p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="text-xs font-bold">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground font-extralight">
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground text-left">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-extralight text-left mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground font-extralight">
                        {post.date}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <Card className="border-border bg-card p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold mb-4 text-foreground">More Content Coming Soon</h3>
                <p className="text-muted-foreground font-extralight">
                  I'm currently working on creating quality content about web development, 
                  machine learning, and software engineering. Stay tuned for updates!
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;