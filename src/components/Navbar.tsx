import React from "react";
import { Scale, Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-slate-900 dark:bg-gray-950 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/">
              <Scale className="h-9 w-9 text-amber-500" />
            </a>
            <a href="/">
              <span className="ml-2 text-xl font-semibold">J4A</span>
            </a>
          </div>

          <div className="hidden md:flex md:items-center">
            <div className="flex items-baseline space-x-4">
              <a href="#home" className="px-3 py-2 hover:text-amber-500">
                Home
              </a>
              <a
                href="#practice-areas"
                className="px-3 py-2 hover:text-amber-500"
              >
                Practice Areas
              </a>
              <a href="#attorneys" className="px-3 py-2 hover:text-amber-500">
                Our Team
              </a>
              <a href="#contact" className="px-3 py-2 hover:text-amber-500">
                Contact
              </a>
              <ThemeToggle />
            </div>
          </div>

          <div className="md:hidden flex items-center mt-2 space-x-2">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 hover:text-amber-500">
              Home
            </a>
            <a
              href="#practice-areas"
              className="block px-3 py-2 hover:text-amber-500"
            >
              Practice Areas
            </a>
            <a
              href="#attorneys"
              className="block px-3 py-2 hover:text-amber-500"
            >
              Our Team
            </a>
            <a href="#contact" className="block px-3 py-2 hover:text-amber-500">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
