import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Code, Brain, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Pursuing B.Tech in Computer Science Engineering at VIT Vellore, focusing on cutting-edge technologies and software development."
    },
    {
      icon: Code,
      title: "Development",
      description: "Experienced in full-stack development with modern frameworks, always eager to learn new technologies and best practices."
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Strong analytical thinking and problem-solving skills, with a passion for optimizing algorithms and creating efficient solutions."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Team player with excellent communication skills, experienced in agile development and collaborative coding environments."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate computer science student with a drive to create innovative solutions 
            and push the boundaries of what's possible with technology.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
            <div className="text-lg text-foreground/80 space-y-4 leading-relaxed">
              <p>
                Currently in my 3rd year of Computer Science Engineering at VIT Vellore, 
                I've been fascinated by the power of code to solve real-world problems and 
                create meaningful digital experiences.
              </p>
              <p>
                My academic journey has equipped me with strong fundamentals in data structures, 
                algorithms, and software engineering principles, while my personal projects have 
                given me hands-on experience with modern development tools and frameworks.
              </p>
              <p>
                I'm always eager to take on new challenges, collaborate with like-minded individuals, 
                and contribute to projects that make a positive impact.
              </p>
            </div>
          </div>

          {/* Stats/Info Card */}
          <div className="glass-card p-8 float">
            <h3 className="text-xl font-bold mb-6 text-center">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">University</span>
                <span className="font-semibold">VIT Vellore</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Degree</span>
                <span className="font-semibold">B.Tech CSE</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Year</span>
                <span className="font-semibold">3rd Year</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Location</span>
                <span className="font-semibold">Vellore, India</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Interests</span>
                <span className="font-semibold">Web Dev, AI, ML</span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="glass-card border-glass-border hover:shadow-accent smooth-transition hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed text-center">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;