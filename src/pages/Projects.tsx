import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen font-oswald">
      <Navigation />
      <main className="pt-16">
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;