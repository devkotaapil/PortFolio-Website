import { useState, useEffect } from "react"; // 1. Import hooks
import { Menu } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

function Navbar() {
  // 2. Track scroll state
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", target: "introduction" },
    { name: "Projects", target: "projects" },
    {name:'Education', target:"education"},
    { name: "Contact", target: "contact" },
    
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/devkotaapil" },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/apil-devkota-6420782b6",
    },
  ];

  return (
    // 3. Updated nav classes: fixed, top-0, z-50, and dynamic background
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-3 transition-all duration-300 z-50 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-xl font-bold cursor-pointer">
        <Link to="introduction" spy={true} smooth={true} duration={400}>
          Portfolio
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.target}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="relative group overflow-hidden px-2 py-2 rounded-full transition-all cursor-pointer"
          >
            <span className="absolute inset-0 bg-gray-200 scale-0 transition-transform duration-300 ease-out group-hover:scale-150 rounded-full origin-center"></span>
            <span className="relative z-10 text-gray-900 group-hover:text-black transition-colors duration-300">
              {link.name}
            </span>
          </Link>
        ))}

        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="text-xl hover:text-blue-600 transition-colors"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[200px] sm:w-[300px]">
            <SheetHeader>
              <SheetTitle className="text-center">Navigation</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.target}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-lg font-medium hover:text-blue-500 cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl hover:text-blue-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navbar;
