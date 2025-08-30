import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gaurish.todi@example.com",
      href: "mailto:gaurish.todi@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Vellore, Tamil Nadu, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "GAURISHTODI",
      href: "https://github.com/GAURISHTODI",
      color: "hover:text-gray-300"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "Gaurish Todi",
      href: "https://www.linkedin.com/in/gaurish-todi-89745229b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BX6iMGj%2FkSDaFFuC0ggdCtQ%3D%3D",
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      label: "Email",
      username: "gaurishtodi@gmail.com",
      href: "mailto:gaurishtodi@gmail.com",
      color: "hover:text-red-400"
    }
  ];

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-black">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-extralight">
            I'm always open to discussing new opportunities, collaborations, or just having 
            a conversation about technology and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border border-gray-200 bg-white shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-black">Send a Message</CardTitle>
              <p className="text-gray-600 font-extralight">
                Drop me a line and I'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent className="pt-0 pb-4">
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-black">Name</label>
                    <Input 
                      placeholder="Your name"
                      className="bg-white border-gray-300 focus:border-black transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-black">Email</label>
                    <Input 
                      type="email"
                      placeholder="your@email.com"
                      className="bg-white border-gray-300 focus:border-black transition-colors"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-black">Subject</label>
                  <Input 
                    placeholder="What's this about?"
                    className="bg-white border-gray-300 focus:border-black transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-black">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or idea..."
                    rows={4}
                    className="bg-white border-gray-300 focus:border-black transition-colors resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-black text-white hover:bg-gray-800 hover:shadow-sm transition-all duration-200 text-base font-medium"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="glass-card border-glass-border">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 border border-gray-300 rounded-full flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="font-medium text-foreground hover:text-gray-600 smooth-transition"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-card border-glass-border">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Connect with Me</CardTitle>
                <p className="text-muted-foreground">
                  Follow my journey and connect on social platforms.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 glass-card hover:shadow-accent smooth-transition hover:scale-105 group"
                  >
                    <div className="w-10 h-10 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center">
                      <social.icon className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-gray-600 smooth-transition">
                        {social.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {social.username}
                      </p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Availability */}
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-gray-100 border border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-full animate-pulse"></div>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">Available for Opportunities</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Currently seeking internships and full-time opportunities in software development. 
                Open to remote and on-site positions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;