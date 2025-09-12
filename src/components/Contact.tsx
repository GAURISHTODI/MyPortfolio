import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  // State to hold the data from the form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  

  // State to manage the submission status (e.g., sending, success, error)
  const [status, setStatus] = useState('');

  // Updates the state whenever a user types in an input field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handles the form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Prevents the default browser behavior of reloading the page
    e.preventDefault(); 
    
    setStatus('sending');
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        // Clear the form fields after a successful submission
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };
  
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gaurishtodi@gmail.com",
      href: "mailto:gaurishtodi@gmail.com"
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
      href: "https://www.linkedin.com/in/gaurish-todi-89745229b",
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
          <Card className="border border-gray-200 bg-white shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-black">Send a Message</CardTitle>
              <p className="text-gray-600 font-extralight">
                Drop me a line and I'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent className="pt-0 pb-4">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-black">Name</label>
                    <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className="bg-white border-gray-300 focus:border-black transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-black">Email</label>
                    <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required className="bg-white border-gray-300 focus:border-black transition-colors" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-black">Subject</label>
                  <Input name="subject" value={formData.subject} onChange={handleChange} placeholder="What's this about?" required className="bg-white border-gray-300 focus:border-black transition-colors" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-black">Message</label>
                  <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project or idea..." rows={4} required className="bg-white border-gray-300 focus:border-black transition-colors resize-none" />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-black text-white hover:bg-gray-800 hover:shadow-sm transition-all duration-200 text-base font-medium" disabled={status === 'sending'}>
                  <Send className="w-4 h-4 mr-2" />
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </Button>
                
                {status === 'success' && <p className="text-green-600 text-center mt-2">Message sent successfully!</p>}
                {status === 'error' && <p className="text-red-600 text-center mt-2">Failed to send message. Please try again.</p>}
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
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
                        <a href={item.href} className="font-medium text-foreground hover:text-gray-600 smooth-transition">
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

            <Card className="glass-card border-glass-border">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Connect with Me</CardTitle>
                <p className="text-muted-foreground">
                  Follow my journey and connect on social platforms.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 glass-card hover:shadow-accent smooth-transition hover:scale-105 group">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;