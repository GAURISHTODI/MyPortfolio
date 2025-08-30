import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "TypeScript", "Python", "C++", "SQL", "Groovy"]
    },
    {
      title: "Web Development", 
      skills: ["React.js", "React Native", "Node.js", "Express.js", "Next.js", "HTML/CSS", "Tailwind CSS", "Redux", "Spring Boot"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git/GitHub", "MongoDB", "PostgreSQL", "MySQL", "Docker", "Kubernetes", "AWS", "Firebase", "Kong API Gateway", "RabbitMQ", "Redis", "Kafka", "Resilience4j", "VS Code", "Postman", "Figma"]
    }
  ];

  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "Java", "JavaScript",
    "MongoDB", "PostgreSQL", "Express.js", "Git", "Docker", "AWS",
    "Tailwind CSS", "HTML5", "CSS3", "REST APIs", "GraphQL", "Redux",
    "Next.js", "Firebase", "Linux", "VS Code", "Postman", "Figma"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 font-oswald">
      <div className="max-w-6xl mx-auto text-right">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-black">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-extralight">
            A comprehensive toolkit built through academic learning, personal projects, 
            and continuous exploration of new technologies.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center text-black">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <span className="font-extralight text-black text-base leading-relaxed">
                    {category.skills.join(", ")}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Section */}
        <div className="text-center">
          <Card className="border border-gray-200 bg-white p-8 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-black">Currently Learning</h3>
            <p className="text-gray-700 mb-6 font-extralight">
              Always staying ahead of the curve by exploring new technologies and frameworks.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Cloud Computing", "DevOps", "Microservices", "Cybersecurity"].map((topic, index) => (
                <Badge 
                  key={index}
                  className="bg-black text-white px-3 py-1 font-extralight"
                >
                  {topic}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;