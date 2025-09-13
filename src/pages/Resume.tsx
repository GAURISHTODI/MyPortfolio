import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ExternalLink } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen font-oswald">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-right">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
                My Resume
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-extralight">
                Download my complete resume or view it online
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-bold"
                onClick={() => window.open('https://drive.google.com/file/d/1e987krv3NWS9m3yPWp2CWDgHrqjxUN3r/view?usp=sharing', '_blank')}
              >
                View Resume
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-border bg-card hover:bg-accent px-8 py-3 text-lg font-bold"
                onClick={() => window.open('https://drive.google.com/file/d/1e987krv3NWS9m3yPWp2CWDgHrqjxUN3r/view?usp=sharing', '_blank')}
              >
                Download PDF
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-foreground">
                  Quick Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-left">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Education</h3>
                  <p className="text-muted-foreground font-extralight">
                    Computer Science Engineering • VIT Vellore • 3rd Year
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Core Skills</h3>
                  <p className="text-muted-foreground font-extralight">
                    Full-Stack Development • Machine Learning • Data Structures & Algorithms
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Technologies</h3>
                  <p className="text-muted-foreground font-extralight">
                    React • Node.js • Python • Java • MongoDB • PostgreSQL • AWS
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;