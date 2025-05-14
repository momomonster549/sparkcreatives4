import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };
  
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };
  
  const navLinks = [
    { name: 'Home', href: '#' },
    { 
      name: 'About', 
      href: '#about',
      dropdown: [
        { name: 'Our Mission', href: '#about' },
        { name: 'Our Team', href: '#team' },
        { name: 'Our Partners', href: '#partners' }
      ]
    },
    { name: 'Impact', href: '#impact' },
    { name: 'Donate', href: '#donate' },
    { 
      name: 'Get Involved', 
      href: '#get-involved',
      dropdown: [
        { name: 'Volunteer', href: '#volunteer' },
        { name: 'Corporate Partners', href: '#corporate' },
        { name: 'Fundraise', href: '#fundraise' }
      ]
    },
    { name: 'Contact', href: '#contact' }
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className={`font-bold text-2xl ${isScrolled ? 'text-brand-blue' : 'text-white'}`}>
                SparkCreatives
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <>
                    <button 
                      className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                        isScrolled ? 'text-gray-700 hover:text-brand-blue' : 'text-white/90 hover:text-white'
                      }`}
                      onClick={() => toggleDropdown(link.name)}
                    >
                      {link.name}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                    
                    {activeDropdown === link.name && (
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                        <div className="py-1" role="menu" aria-orientation="vertical">
                          {link.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      isScrolled ? 'text-gray-700 hover:text-brand-blue' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
            
            <Button 
              variant="primary" 
              size="sm"
              className={`ml-4 ${
                isScrolled ? 'bg-brand-orange' : 'bg-white text-brand-blue hover:bg-white/90'
              }`}
            >
              Donate Now
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? 'text-gray-700 hover:text-brand-blue' : 'text-white hover:text-white/80'
              }`}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobile-menu"
      >
        <div className="pt-20 pb-4 px-4 sm:px-6 lg:px-8 h-full overflow-y-auto">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <div className="border-b border-gray-200 pb-2">
                    <button 
                      className="w-full flex justify-between items-center py-2 text-base font-medium text-gray-700"
                      onClick={() => toggleDropdown(link.name)}
                    >
                      {link.name}
                      <ChevronDown 
                        className={`w-5 h-5 transition-transform ${
                          activeDropdown === link.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {activeDropdown === link.name && (
                      <div className="mt-2 pl-4 space-y-2">
                        {link.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block py-2 text-sm text-gray-600"
                            onClick={toggleMenu}
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="block py-2 text-base font-medium text-gray-700 border-b border-gray-200"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
            
            <div className="pt-4">
              <Button 
                variant="primary" 
                className="w-full bg-brand-orange"
                onClick={toggleMenu}
              >
                Donate Now
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
