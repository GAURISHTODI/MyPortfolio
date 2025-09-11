// src/components/Navigation.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // <-- Import Link
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Resume", href: "/resume" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "/blogs" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-oswald ${
      isScrolled ? "bg-background/95 backdrop-blur-xl border-b border-border" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-foreground hover:scale-105 transition-transform duration-200">
            GT
          </Link>

          <div className="hidden md:flex justify-end flex-1">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                // Use Link component instead of button for navigation
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-foreground hover:text-muted-foreground px-3 py-2 text-sm font-bold transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:bg-accent"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card mt-2 rounded-lg border border-border">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                  className="text-foreground hover:text-muted-foreground block px-3 py-2 text-base font-bold w-full text-left transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;