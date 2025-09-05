import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      // Go back to home first, then scroll after load
      navigate("//", { state: { scrollTo: sectionId } });
      setIsMenuOpen(false);
      return;
    }

    // Already on home → smooth scroll
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate("//")}
          >
            <div className="h-10 sm:h-12 md:h-14 flex items-center justify-center">
              <img 
                src="./Media/Logo.png"
                alt="SlugsOnTwoWheels Logo" 
                className="w-full h-full object-contain scale-125"
              />
            </div>
            <span className="text-white font-bold text-xl">SlugsOnTwoWheels</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-white hover:text-amber-400 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-white hover:text-amber-400 transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection("gallery")} className="text-white hover:text-amber-400 transition-colors font-medium">
              Gallery
            </button>
            <button onClick={() => scrollToSection("join")} className="text-white hover:text-amber-400 transition-colors font-medium">
              Join
            </button>
            <button onClick={() => scrollToSection("events")} className="text-white hover:text-amber-400 transition-colors font-medium">
              Events
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <button onClick={() => scrollToSection("home")} className="text-white hover:text-amber-400 transition-colors font-medium text-left py-2">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="text-white hover:text-amber-400 transition-colors font-medium text-left py-2">
                About
              </button>
              <button onClick={() => scrollToSection("gallery")} className="text-white hover:text-amber-400 transition-colors font-medium text-left py-2">
                Gallery
              </button>
              <button onClick={() => scrollToSection("join")} className="text-white hover:text-amber-400 transition-colors font-medium text-left py-2">
                Join
              </button>
              <button onClick={() => scrollToSection("events")} className="text-white hover:text-amber-400 transition-colors font-medium text-left py-2">
                Events
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
