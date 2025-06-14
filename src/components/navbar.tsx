"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/#home", label: "Home" },
  { href: "/#gists", label: "Gists" },
  { href: "/#about-us", label: "About Us" },
  { href: "/#contact-us", label: "Contact Us" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/70 backdrop-blur-md border-b border-border/50 shadow-sm" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center">
            <Link href="/" className="group relative block">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105 shadow-lg">
                <Image
                  src="/logo/logo.png"
                  alt="The Periodical Logo"
                  fill
                  sizes="(max-width: 640px) 48px, 56px"
                  className="object-cover"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/90 hover:text-primary relative py-2 text-base font-medium transition-colors duration-200 
                  before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full
                  after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary/20 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
            <button className="px-5 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-full 
              hover:bg-primary/90 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg 
              active:scale-[0.98] active:shadow-sm">
              Subscribe
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/10 
                transition-all duration-200 active:scale-95"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? "max-h-[400px] opacity-100 shadow-lg" 
            : "max-h-0 opacity-0 pointer-events-none"
        }`}>
          <div className="px-4 py-3 space-y-2 bg-background/90 backdrop-blur-lg border-t border-border/50">
            {navItems.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2.5 text-foreground/90 hover:text-primary hover:bg-primary/5 
                  rounded-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 py-3">
              <button className="w-full px-5 py-2.5 text-sm font-medium text-primary-foreground bg-primary 
                rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:scale-[1.02] 
                hover:shadow-lg active:scale-[0.98] active:shadow-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
