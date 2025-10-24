import { Button } from "@/components/ui/button";
import { Menu, Search, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 text-hero-foreground bg-black/85 backdrop-blur-m">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            OPEN MCQ
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors">
              Contact Us
            </Link>
            <a href="#features" className="hover:text-primary transition-colors">
              Features
            </a>
            <a href="#Ailearns" className="hover:text-primary transition-colors">
             AI Learns
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
           
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4  ">
            <Link to="/" className="block py-2 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="block py-2 hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="block py-2 hover:text-primary transition-colors">
              Contact Us
            </Link>
            <a href="#features" className="block py-2 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#Ailearns" className="block py-2 hover:text-primary transition-colors">
              AI Learns
              </a>
                 </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
