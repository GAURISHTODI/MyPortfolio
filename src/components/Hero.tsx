import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-hero font-oswald pt-32"
      style={{ background: 'var(--gradient-hero)' }}
    >
      <div className="text-center max-w-4xl mx-auto">
        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-black">
          Gaurish Todi
        </h1>
        
        {/* Subtitle */}
        <div className="text-lg sm:text-xl lg:text-2xl text-black mb-3 font-bold">
          Computer Science Engineer
        </div>
        
        {/* Education info */}
        <div className="text-base sm:text-lg text-gray-600 mb-6 font-extralight">
          3rd Year CSE Student at <span className="text-black font-bold">VIT Vellore</span>
        </div>
        
        {/* Description - merged from About section */}
        <div className="space-y-4 mb-8 max-w-3xl mx-auto text-center">
          <p className="text-base sm:text-lg text-black font-extralight leading-relaxed">
            Passionate Full-Stack Developer with expertise in modern technologies and scalable backend systems. Currently focused on building cross-platform mobile applications, while exploring microservices architecture and broadening knowledge across diverse related technologies.
          </p>
          
          <p className="text-sm sm:text-base text-gray-700 font-extralight leading-relaxed">
            3rd year Computer Science Engineering student at VIT Vellore with hands-on experience in React Native, Spring Boot, 
            and cloud technologies. Solved 300+ DSA problems to enhance problem solving abilities. Learning and experiencing using tools including Kong API Gateway, 
            RabbitMQ, Redis, and containerization technologies like Docker and Kubernetes.
          </p>
          
          <p className="text-sm sm:text-base text-gray-700 font-extralight leading-relaxed">
            Strong foundation in enterprise development patterns, microservices architecture, mobile app development.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg" 
            className="bg-black text-white hover:shadow-lg hover:scale-105 transition-all duration-300 px-8 py-3 text-base font-bold"
            onClick={() => window.location.href = '/projects'}
          >
            View My Work
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-gray-400 bg-white text-black hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 px-8 py-3 text-base font-bold"
            onClick={() => window.location.href = 'mailto:gaurishtodi@gmail.com'}
          >
            Contact Me
            <Mail className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="https://github.com/GAURISHTODI" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-100 border border-gray-300 p-3 hover:bg-gray-200 hover:shadow-md transition-all duration-200 hover:scale-110 rounded-lg"
          >
            <Github className="h-5 w-5 text-black" />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/gaurish-todi-89745229b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BX6iMGj%2FkSDaFFuC0ggdCtQ%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-100 border border-gray-300 p-3 hover:bg-gray-200 hover:shadow-md transition-all duration-200 hover:scale-110 rounded-lg"
          >
            <Linkedin className="h-5 w-5 text-black" />
          </a>
          
          <a 
            href="mailto:gaurishtodi@gmail.com" 
            className="bg-gray-100 border border-gray-300 p-3 hover:bg-gray-200 hover:shadow-md transition-all duration-200 hover:scale-110 rounded-lg"
          >
            <Mail className="h-5 w-5 text-black" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;