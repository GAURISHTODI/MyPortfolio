import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const SkillsPage = () => {
  return (
    <div className="min-h-screen font-oswald">
      <Navigation />
      <main className="pt-16">
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default SkillsPage;