import React, { useState } from 'react';
import { Menu, X, Package } from 'lucide-react';
import { Button } from './Button';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <Package className="h-8 w-8 text-accent-500 mr-2" />
            <span className="font-bold text-xl tracking-tight text-brand-900">
              Cantabria<span className="text-accent-500">Storage</span>360
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#features" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Servicios</a>
            <a href="#pricing" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Tamaños y Precios</a>
            <a href="#testimonials" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Opiniones</a>
            <Button onClick={onBookClick} variant="primary" size="sm">
              ➤ Reservar Online
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-brand-900 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in-down">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
            <a href="#features" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50">Servicios</a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50">Tamaños</a>
            <a href="#testimonials" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50">Opiniones</a>
            <div className="pt-2">
              <Button onClick={() => { setIsOpen(false); onBookClick(); }} fullWidth>
                Reservar Ahora
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
