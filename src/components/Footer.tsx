import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Apple, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hero text-hero-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Left - Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">OPEN MCQ<br></br> Study Smart, Score Higher</h3>
            <p className="text-gray-400">
              Practice smarter. Learn faster. Get ahead.
              <br></br>
              Try Demo Quiz Now |
              Join the App Waitlist
            </p>
          </div>

          {/* Right - Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Get the App</h4>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="gap-2">
                <Apple className="w-5 h-5" />
                APP STORE
              </Button>
              <Button variant="heroOutline" size="lg" className="gap-2">
                <Apple className="w-5 h-5" />
                DIRECT LINK
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Links */}
          <nav className="flex flex-wrap gap-6 text-sm">
            <a href="/about" className="text-gray-400 hover:text-white transition-colors">
              About Us
            </a>
            <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact Us
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Demo
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Pricing
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            {[Twitter, Facebook, Instagram, Linkedin, Youtube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500">
            © 2025 Micheal Salehnan, All rights reserved. Designed by ThemeWagon
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
