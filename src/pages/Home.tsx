// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Clock,
  Camera,
  Key,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Truck,
  Boxes,
  Building2,
} from 'lucide-react';
import { UNIT_SIZES, TESTIMONIALS, USE_CASES } from '../constants';
import * as Icons from 'lucide-react';

export const Home: React.FC = () => {
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const phone = formData.get('phone') || '';
    const message = formData.get('message') || '';

    const subject = encodeURIComponent('Solicitud de información CantabriaStorage');
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\n\nMensaje:\n${message}`
    );

    window.location.href = `mailto:info@webcantabriastorage.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        
        <div className="pointer-events-none absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#38bdf8_0,_transparent_55%)]" />
          {/* Si quieres foto: */}
          {/* <img src="/img/hero-storage.jpg" className="w-full h-full object-cover mix-blend-soft-light" /> */}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Lado texto */}
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 mb-4">
                Trasteros en Torrelavega · Cantabria
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                Tu espacio extra en
                <span className="block text-sky-400">Torrelavega</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-200 max-w-2xl mb-6">
                Alquiler de trasteros y minialmacenes para particulares y empresas.
                Acceso 24h con PIN o código QR, videovigilancia y seguro incluido.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link
                  to="/reservar"
                  className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-3 rounded-full shadow-lg shadow-sky-900/40 text-base md:text-lg transition-all hover:-translate-y-0.5"
                >
                  Reservar trastero online
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="#tamanos"
                  className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-white bg-white/5 hover:bg-white/10 text-sm md:text-base font-semibold px-8 py-3 rounded-full transition-all"
                >
                  Ver tamaños y precios
                </a>
              </div>

              {/* Beneficios rápidos */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs md:text-sm text-slate-100">
                <div className="flex items-center gap-2">
                  <Clock className="text-sky-400" size={20} />
                  <span>Acceso 24 horas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Camera className="text-sky-400" size={20} />
                  <span>Videovigilancia CCTV</span>
                </div>
                <div className="flex items-center gap-2">
                  <Key className="text-sky-400" size={20} />
                  <span>PIN + código QR</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="text-sky-400" size={20} />
                  <span>Seguro incluido</span>
                </div>
              </div>
            </div>

            {/* Lado tarjeta  */}
            <div className="lg:justify-self-end w-full max-w-md mx-auto">
              <div className="bg-white/95 text-slate-900 rounded-2xl shadow-2xl p-6 md:p-7 border border-slate-200 backdrop-blur">
                <p className="text-xs font-semibold text-sky-600 uppercase tracking-[0.2em] mb-2">
                  Trasteros desde
                </p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl md:text-5xl font-extrabold text-slate-900">
                    27€
                  </span>
                  <span className="text-sm text-slate-500">/mes + IVA</span>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Sin fianza y sin permanencia. Contrato 100% online en menos de 5 minutos
                  y acceso inmediato a tu trastero en el Polígono Tanos-Viérnoles (Torrelavega).
                </p>

                <ul className="space-y-2 text-sm mb-5">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-emerald-500" size={18} />
                    <span>Para mudanzas, stock, archivos o temporadas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-emerald-500" size={18} />
                    <span>Acceso con vehículo junto a la puerta</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-emerald-500" size={18} />
                    <span>Plataforma de gestión profesional CantabriaStorage</span>
                  </li>
                </ul>

                <Link
                  to="/reservar"
                  className="block w-full text-center bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-lg mb-3 transition-colors"
                >
                  Calcular precio y reservar
                </Link>

                <p className="text-[11px] text-slate-500 text-center">
                  Si prefieres venir en persona, también puedes contratar el trastero en
                  nuestras instalaciones de Torrelavega.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTICULARES / EMPRESAS  */}
      <section className="py-16 bg-gray-50" id="beneficios">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Trasteros para particulares y empresas en Torrelavega
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Guarda muebles, cajas, herramientas, archivos o mercancía de tu negocio
              con máxima seguridad y acceso 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-7">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mb-4">
                <Boxes className="text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Particulares</h3>
              <p className="text-sm text-slate-600 mb-3">
                Ideal para mudanzas, reformas, herencias, cambios de temporada o cuando
                tu casa se queda pequeña.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>✔ Guarda muebles y electrodomésticos</li>
                <li>✔ Bicicletas, esquís, material deportivo</li>
                <li>✔ Trastero extra sin cambiar de vivienda</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-7">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                <Building2 className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Empresas y autónomos</h3>
              <p className="text-sm text-slate-600 mb-3">
                Minialmacenes para stock, herramientas, uniformes, documentación y
                logística diaria.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>✔ Stock y material de trabajo</li>
                <li>✔ Archivo muerto y documentación</li>
                <li>✔ Acceso para varios empleados</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-7">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                <Truck className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Acceso cómodo</h3>
              <p className="text-sm text-slate-600 mb-3">
                Polígono Industrial Tanos-Viérnoles, con aparcamiento y zona de carga y
                descarga junto a la nave.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>✔ Acceso con furgoneta o turismo</li>
                <li>✔ Carros y medios de transporte interno</li>
                <li>✔ Bien comunicado con la A-67</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN “¿Qué necesitas guardar?” usando USE_CASES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Qué necesitas guardar?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Nuestros espacios se adaptan a todo tipo de usos: hogar, negocio, hobby,
              mudanzas y mucho más.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {USE_CASES.map((uc, idx) => {
              const IconComponent = (Icons as any)[uc.iconName] || Icons.Box;
              return (
                <div
                  key={idx}
                  className="bg-gray-50 p-7 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mb-5">
                    <IconComponent className="text-sky-600" size={26} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{uc.title}</h3>
                  <p className="text-sm text-slate-600">{uc.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TAMAÑOS & PRECIOS */}
      <section className="py-20 bg-slate-50" id="tamanos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Tamaños y precios</h2>
            <p className="text-lg text-slate-600">
              Elige el espacio que mejor encaje con tus cosas. Siempre con precio cerrado
              al mes y sin sorpresas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {UNIT_SIZES.map((unit) => (
              <div
                key={unit.id}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-sky-500 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{unit.dimensions}</h3>
                      <span className="inline-block bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded mt-1 font-medium">
                        {unit.area} m² útiles aprox.
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-bold text-sky-600">{unit.price}€</span>
                      <span className="text-slate-500 text-sm block">/mes + IVA</span>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-5 min-h-[3rem]">{unit.description}</p>

                  <div className="space-y-2 mb-7">
                    <p className="text-xs font-semibold text-slate-900 uppercase tracking-wide">
                      Recomendado para:
                    </p>
                    {unit.recommendedFor.map((rec, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                        <span>{rec}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/reservar?unit=${unit.id}`}
                    className="block w-full py-3 px-4 bg-slate-900 text-white text-center font-semibold rounded-lg group-hover:bg-sky-600 transition-colors"
                  >
                    Me interesa este trastero
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Opiniones de clientes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-50 p-8 rounded-xl shadow-sm italic">
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
                <p className="text-slate-700 mb-6">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                    <span className="text-slate-500 text-xs">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="ubicacion" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="text-sky-600" />
                ¿Dónde estamos?
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                Estamos en el <strong>Polígono Industrial Tanos-Viérnoles</strong>, en Torrelavega,
                con acceso directo desde la A-67 y aparcamiento junto a la nave.
              </p>
              <p className="text-slate-600 mb-2">
                <strong>Dirección:</strong> Polígono Industrial Tanos-Viérnoles, Nave 4, 39300
                Torrelavega, Cantabria
              </p>
              <p className="text-slate-600">
                <strong>Acceso:</strong> Entrada mediante PIN personal o código QR generado por
                nuestro software CantabriaStorage.
              </p>
            </div>

            <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg border border-slate-200">
              <iframe
                title="Mapa CantabriaStorage"
                src="https://www.google.com/maps?q=Pol%C3%ADgono+Industrial+Tanos-Vi%C3%A9rnoles,+Torrelavega,+Cantabria&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO (justo encima del footer) */}
      <section id="contacto" className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Hablamos?</h2>
            <p className="text-slate-600 mb-4">
              Cuéntanos qué necesitas y te enviaremos una propuesta a medida para tu caso
              (mudanza, empresa, temporada, stock…).
            </p>
            <p className="text-slate-600">
              También puedes llamarnos al <strong>690 288 707</strong> o escribirnos a{' '}
              <a
                href="mailto:info@webcantabriastorage.com"
                className="text-sky-700 font-semibold"
              >
                info@webcantabriastorage.com
              </a>
              .
            </p>
          </div>

          <div>
            <form
              onSubmit={handleContactSubmit}
              className="bg-white rounded-2xl shadow-md p-6 space-y-4 border border-slate-200"
            >
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Nombre
                </label>
                <input
                  name="name"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    name="phone"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-lg text-sm"
              >
                Enviar consulta
              </button>
              <p className="text-[11px] text-slate-500 mt-1">
                Al enviar aceptas nuestra Política de Privacidad.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
