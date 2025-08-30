import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-oswald">
      <Navigation />
      <main>
        <Hero />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
