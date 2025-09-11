import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Trekio",
      description: "Cross-platform app that auto-generates personalized trip plans using Gemini Flash 2.0, with Firebase Auth, Firestore, and Google Places integration.",
      technologies: ["React Native", "Firebase", "Gemini API", "Google APIs", "JavaScript"],
      category: "Mobile App"
    },
    {
      title: "RailServe",
      description: "CLI-based railway ticketing system built in Java showcasing OOP, LLD, file-based database with JSON, and secure authentication.",
      technologies: ["Java", "JSON", "jBCrypt", "OOP", "CLI"],
      category: "Backend System"
    },
    {
      title: "DevTalk",
      description: "Full-stack developer focused Chat-app with real time chats and Discord themed server.",
      technologies: ["React Native","Gemini API", "Google APIs", "JavaScript", "MongoDB", "Firbase"],
      category: "Full Stack"
    },
    {
      title: "Portfolio", 
      description: "My portfolio website with real-time updates, drag-and-drop functionality, and multiple features.",
      technologies: ["TypeScript", "Supabase","Gemini API", "Google APIs", "JavaScript"],
      category: "Web App"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-black">
            My Projects
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-extralight">
            A showcase of my development journey, featuring projects that demonstrate 
            my technical skills and passion for creating innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="border border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="text-xs font-bold bg-gray-100 text-black">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-black text-left">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-700 font-extralight text-left mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-gray-100 text-black hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-gray-300 bg-white hover:bg-gray-50 flex-1 text-black"
                    asChild
                  >
                    <a href="https://github.com/GAURISHTODI" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="border border-gray-200 bg-white p-8 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-black">
              Want to see more of my work?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed font-extralight">
              Check out my GitHub profile for more projects, contributions, and code samples 
              that showcase my development journey and technical expertise.
            </p>
            <Button 
              size="lg"
              className="bg-black text-white hover:bg-gray-800 hover:shadow-lg transition-all duration-300 px-8 py-3 text-lg font-semibold"
              asChild
            >
              <a href="https://github.com/GAURISHTODI" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All Projects
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;