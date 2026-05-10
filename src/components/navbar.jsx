import { Menu } from "lucide-react"; // Shadcn usually uses Lucide icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: <FaGithub />, href: "https://github.com/devkotaapil" },
    {
      name: <FaLinkedin />,
      href: "www.linkedin.com/in/apil-devkota-6420782b6",
    },
  ];

  return (
    <nav className="flex items-center  w-full justify-between px-1 mx-2 my-1 ">
      <div className="text-xl ml-0 font-bold">
        <a href="/">Portfolio</a>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 items-center">
  {navLinks.map((link) => (
    <a
      key={link.name}
      href={link.href}
      /* Added 'group' and 'relative' to anchor the circle */
      className="relative group overflow-hidden px-2 py-2 rounded-full transition-all"
    >
     
      <span className="absolute inset-0 bg-gray-200 scale-0 transition-transform duration-300 ease-out group-hover:scale-150 rounded-full origin-center"></span>
      
      
      <span className="relative z-10 text-gray-900 group-hover:text-black transition-colors duration-300">
        {link.name}
      </span>
    </a>
  ))}
</div>


      {/* Mobile Navigation (Shadcn Sheet) */}
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
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium hover:text-blue-500"
                >
                  {link.name}
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
