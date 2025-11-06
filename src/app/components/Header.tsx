'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

// SEO UPDATE: Added FAQ to nav links
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'How We Work', href: '#how-we-work' },
  { name: 'Products', href: '#products' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'FAQ', href: '#faq' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state to true if user scrolls down more than 10px
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.substring(1))?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    // Re-using scrollTo for the contact button for consistency
    scrollTo('#quote-form');
  };

  // CHANGE 1: Modified header classes for better visibility at all times.
  // It now has a semi-transparent dark background initially, and transitions to white on scroll.
  // The `backdrop-blur-lg` is now applied in both states for a consistent, modern look.
  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg ${
    isScrolled
      ? 'bg-white/95 shadow-lg' // Scrolled state: almost-solid white with a shadow
      : 'bg-brand-brown/80'   // Initial state: semi-transparent brand brown background
  }`;

  // CHANGE 2: Text color classes now change based on scroll state for maximum contrast.
  // Light text on the dark initial background, dark text on the white scrolled background.
  const textColorClasses = isScrolled ? 'text-brand-brown' : 'text-white';
  const logoColorClasses = isScrolled ? 'text-brand-brown' : 'text-white';


  return (
    <>
      <header className={headerClasses}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }} className="text-3xl font-extrabold tracking-tight cursor-pointer">
              <span className={logoColorClasses}>Magical</span>
              <span className="text-brand-gold"> Space</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                // CHANGE 3: Nav link text color and font weight updated for clarity.
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }} 
                  className={`${textColorClasses} font-semibold hover:text-brand-gold transition-colors duration-300`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <button onClick={handleContactClick} className="hidden md:block bg-brand-gold text-white font-semibold px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-gold">
              GET A QUOTE
            </button>

            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu">
                {/* CHANGE 4: Mobile menu icon color now also changes with scroll */}
                <Menu className={`h-8 w-8 ${textColorClasses}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu (No changes needed here, it's already on a solid background) */}
      <div className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className={`absolute top-0 right-0 h-full w-2/3 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-xl font-bold text-brand-gold">Menu</h2>
              <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                <X className="h-8 w-8 text-brand-brown" />
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href); }} className="text-2xl font-semibold text-brand-brown hover:text-brand-gold transition-colors duration-300">
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="mt-auto">
              <button onClick={handleContactClick} className="w-full bg-brand-gold text-white font-bold py-3 rounded-lg text-lg hover:bg-opacity-90 transition-colors duration-300">
                GET A QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}