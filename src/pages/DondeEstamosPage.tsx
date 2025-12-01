import React from 'react';
import { MapPin, Car, Bus, Info } from 'lucide-react';

export const DondeEstamosPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="bg-slate-900 text-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            ¿Dónde está CantabriaStorage?
          </h1>
          <p className="text-lg text-slate-200 max-w-3xl mx-auto">
            Estamos en el <strong>Polígono Industrial Tanos-Viérnoles</strong>,
            en Torrelavega (Cantabria), con acceso rápido desde la autovía A-67.
          </p>
        </div>
      </section>

      {/* MAPA + INFO */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          {/* MAPA */}
          <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
            <iframe
              title="Mapa CantabriaStorage"
              src="https://www.google.com/maps?q=Pol%C3%ADgono+Industrial+Tanos-Vi%C3%A9rnoles,+Torrelavega,+Cantabria&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* TEXTO */}
          <div>
            <div className="flex items-center gap-2 text-brand-600 text-sm font-semibold mb-2">
              <MapPin size={18} />
              <span>Ubicación exacta</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Polígono Industrial Tanos-Viérnoles, Nave 4
            </h2>
            <p className="text-slate-700 mb-4">
              Nuestra nave se encuentra en una zona industrial consolidada de{' '}
              <strong>Torrelavega</strong>, con amplias calles para maniobrar y
              aparcamiento gratuito en la puerta.
            </p>
            <p className="text-slate-700 mb-4">
              El acceso a los trasteros se realiza mediante{' '}
              <strong>código PIN personal</strong> (basado en tu DNI/NIE sin
              letra) o <strong>código QR</strong> generado por nuestro software
              de gestión. Así, puedes entrar las 24 horas del día con total
              seguridad.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              <div className="bg-white rounded-2xl shadow-sm p-4 border border-slate-200">
                <div className="flex items-center gap-2 mb-2 text-brand-600">
                  <Car size={18} />
                  <span className="font-semibold text-sm">En coche</span>
                </div>
                <p className="text-sm text-slate-600">
                  Acceso directo desde la <strong>A-67</strong>, salida
                  Torrelavega. A menos de 5 minutos del centro y con acceso
                  cómodo para furgonetas y vehículos de carga.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-4 border border-slate-200">
                <div className="flex items-center gap-2 mb-2 text-brand-600">
                  <Bus size={18} />
                  <span className="font-semibold text-sm">Transporte público</span>
                </div>
                <p className="text-sm text-slate-600">
                  Varias líneas de autobús comunican Torrelavega con la zona
                  industrial. Consúltanos para indicarte la parada más cercana.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-white rounded-2xl shadow-sm p-4 border border-slate-200 flex gap-3">
              <Info className="text-brand-600 mt-1" />
              <p className="text-sm text-slate-600">
                Contamos con <strong>zona de carga y descarga</strong>, carros
                de transporte y pasillos amplios para mover fácilmente tus
                pertenencias desde el vehículo hasta el trastero.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
