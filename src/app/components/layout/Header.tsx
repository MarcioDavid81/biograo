'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Sobre', href: '/about' },
    { label: 'Serviços', href: '/services' },
    { label: 'Produtos', href: '/products' },
    { label: 'Contato', href: '/contact' },
    { label: 'Notícias', href: '/notices' },
  ];
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b border-gray-200 transition-all duration-300 ease-in-out
    ${scrolled ? "bg-lime-500 shadow-md border-none md:rounded-br-[50px]" : ""}`}>
      <div className="container w-[90%] mx-auto flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.png" 
            alt="BioGrão Comércio Agrícola" 
            width={180} 
            height={40} 
            className="h-12 w-auto rounded-lg"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className={`font-medium transition-colors ${
                isActive(item.href) 
                  ? 'text-secondary border-b-2 border-secondary' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} navItems={navItems} />
    </header>
  );
};

export default Header;