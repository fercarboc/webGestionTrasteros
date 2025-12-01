// src/Layout.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  X,
  Box,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-sky-600 p-2 rounded-lg text-white group-hover:bg-sky-700 transition-colors">
                <Box size={28} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 leading-none">
                  Cantabria
                </span>
                <span className="text-sm font-semibold text-sky-600 tracking-wide uppercase">
                  Storage
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">

              {/* ✅ MENÚ SIEMPRE VISIBLE, TAMBIÉN EN /reservar */}
              <Link
                to="/trasteros-particulares"
                className="text-slate-600 hover:text-sky-600 transition"
              >
                Trasteros Particulares
              </Link>
              <Link
                to="/empresas-autonomos"
                className="text-slate-600 hover:text-sky-600 transition"
              >
                Empresas y Autónomos
              </Link>
              <Link
                to="/tamanos"
                className="text-slate-600 hover:text-sky-600 transition"
              >
                Tamaños
              </Link>
              <Link
                to="/donde-estamos"
                className="text-slate-600 hover:text-sky-600 transition"
              >
                Dónde estamos
              </Link>
              <Link
                to="/contacto"
                className="text-slate-600 hover:text-sky-600 transition"
              >
                Contacto
              </Link>
              <Link
                to="/aviso-legal"
                className="text-slate-600 hover:text-sky-600 transition"
              >
                Legal
              </Link>

              <div className="flex items-center gap-3">
                {/* Teléfono en el header */}
                <a
                  href="tel:+34690288707"
                  className="hidden md:flex items-center gap-2 bg-sky-50 text-sky-700 border border-sky-300 px-5 py-2 rounded-full font-semibold shadow-sm hover:bg-sky-100 hover:border-sky-400 transition"
                >
                  <Phone size={18} />
                  690 288 707
                </a>

                {/* Reservar Online */}
                <Link
                  to="/reservar"
                  className="bg-sky-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:bg-sky-700 transition transform hover:-translate-y-0.5"
                >
                  Reservar Online
                </Link>
              </div>

            </nav>

            {/* Mobile button */}
            <button
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
            <div className="px-4 py-4 space-y-4 flex flex-col text-base">

              {/* ✅ MENÚ MÓVIL TAMBIÉN SIEMPRE VISIBLE */}
              <Link
                to="/trasteros-particulares"
                onClick={handleNavClick}
                className="block font-medium text-slate-700"
              >
                Trasteros Particulares
              </Link>
              <Link
                to="/empresas-autonomos"
                onClick={handleNavClick}
                className="block font-medium text-slate-700"
              >
                Empresas y Autónomos
              </Link>
              <Link
                to="/tamanos"
                onClick={handleNavClick}
                className="block font-medium text-slate-700"
              >
                Tamaños
              </Link>
              <Link
                to="/donde-estamos"
                onClick={handleNavClick}
                className="block font-medium text-slate-700"
              >
                Dónde estamos
              </Link>
              <Link
                to="/contacto"
                onClick={handleNavClick}
                className="block font-medium text-slate-700"
              >
                Contacto
              </Link>
              <Link
                to="/aviso-legal"
                onClick={handleNavClick}
                className="block font-medium text-slate-700"
              >
                Legal
              </Link>

              {/* Teléfono en menú móvil */}
              <a
                href="tel:+34690288707"
                className="block font-semibold text-sky-700"
              >
                <Phone className="inline-block mr-2" size={16} />
                690 288 707
              </a>

              <Link
                to="/reservar"
                onClick={handleNavClick}
                className="block text-center w-full bg-sky-600 text-white px-6 py-3 rounded-lg font-bold"
              >
                Reservar Ahora
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer
        id="legal"
        className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-white">
                <Box size={24} />
                <span className="text-xl font-bold">CantabriaStorage</span>
              </div>
              <p className="text-sm leading-relaxed mb-6 text-slate-400">
                Trasteros y minialmacenes en Torrelavega. Soluciones flexibles
                con seguridad 24h y acceso mediante PIN o código QR.
              </p>
              <div className="flex items-center gap-2 text-sky-400 font-semibold">
                <ShieldCheck size={20} />
                <span>Seguro incluido</span>
              </div>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contacto</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="text-sky-500 mt-1" size={18} />
                  <span>
                    Polígono Industrial Tanos-Viérnoles, Nave 4,
                    <br />
                    39300 Torrelavega, Cantabria
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-sky-500" size={18} />
                  <a
                    href="tel:+34690288707"
                    className="hover:text-white transition"
                  >
                    690 288 707
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-sky-500" size={18} />
                  <a
                    href="mailto:info@webcantabriastorage.com"
                    className="hover:text-white transition"
                  >
                    info@webcantabriastorage.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/aviso-legal" className="hover:text-sky-400 transition">Aviso Legal</Link></li>
                <li><Link to="/politica-privacidad" className="hover:text-sky-400 transition">Política de Privacidad</Link></li>
                <li><Link to="/politica-cookies" className="hover:text-sky-400 transition">Política de Cookies</Link></li>
                <li>
                  <a
                    href="/Condiciones_Generales_CantabriaStorage.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-400 transition"
                  >
                    Condiciones Generales (PDF)
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} CantabriaStorage — Todos los derechos reservados.
          </div>

        </div>
      </footer>
    </div>
  );
};
