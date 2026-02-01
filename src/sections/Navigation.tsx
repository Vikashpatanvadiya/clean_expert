import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#work-visuals' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Reviews', href: '#testimonials' },
  ];

  const phoneNumber = '+919898857306';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-200 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-2xl py-2' 
            : 'bg-white/90 backdrop-blur-md py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <img 
                src="/final-logo.png" 
                alt="Clean Expert Logo" 
                className="h-20 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-[#0ea5e9] ${
                    isScrolled ? 'text-[#475569]' : 'text-[#475569]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a href={`tel:${phoneNumber}`}>
                <Button 
                  className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white rounded-xl"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
              <a 
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hi! I want to book a cleaning service. Please share more details.')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  className="bg-[#25d366] hover:bg-[#128c7e] text-white rounded-xl"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-[#1e293b]' : 'text-[#1e293b]'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-0 right-0 w-80 max-w-full h-full bg-white shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-20">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 px-4 text-lg font-medium text-[#1e293b] hover:bg-[#f1f5f9] rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-[#e2e8f0] space-y-3">
              <a href={`tel:${phoneNumber}`} onClick={() => setIsMobileMenuOpen(false)}>
                <Button 
                  className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white py-6 rounded-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
              <a 
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hi! I want to book a cleaning service. Please share more details.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button 
                  className="w-full bg-[#25d366] hover:bg-[#128c7e] text-white py-6 rounded-xl"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
