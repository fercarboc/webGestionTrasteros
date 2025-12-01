import React from 'react';
import { UNIT_SIZES } from '../constants';
import { CheckCircle2, Ruler, Boxes, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TamanosPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* HERO */}
      
      <section className="bg-slate-900 text-white py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Tamaños de trasteros en{' '}
              <span className="text-brand-400">CantabriaStorage</span>
            </h1>
            <p className="text-lg text-slate-200 mb-6">
              Elige el espacio que mejor se adapta a lo que quieres guardar.
              Siempre con precios claros, sin sorpresas y sin permanencia.
            </p>
            <ul className="space-y-2 text-sm text-slate-200 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-400" size={18} />
                Desde trasteros pequeños para cajas hasta minialmacenes para una vivienda completa.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-400" size={18} />
                Acceso 24/7 con PIN personal y código QR.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-400" size={18} />
                Seguro multirriesgo incluido y videovigilancia.
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/reservar"
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-brand-900/40 transition-all"
              >
                Reservar online
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-6 shadow-2xl border border-slate-700">
            <div className="flex items-center gap-2 text-sm text-slate-200 mb-4">
              <Ruler className="text-brand-400" />
              <span>Guía rápida de tamaños</span>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center text-white font-bold text-sm mt-1">
                  S
                </div>
                <div>
                  <h3 className="font-semibold text-white">Pequeños (1–3 m²)</h3>
                  <p className="text-slate-200">
                    Ideal para cajas, ropa de temporada, equipaje, pequeños electrodomésticos o archivos personales.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center text-white font-bold text-sm mt-1">
                  M
                </div>
                <div>
                  <h3 className="font-semibold text-white">Medianos (3–6 m²)</h3>
                  <p className="text-slate-200">
                    Perfectos para una habitación completa, bicicletas, muebles desmontados, etc.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center text-white font-bold text-sm mt-1">
                  L
                </div>
                <div>
                  <h3 className="font-semibold text-white">Grandes (&gt; 6 m²)</h3>
                  <p className="text-slate-200">
                    Para mudanzas completas, stock de empresa, material de obra o equipamiento voluminoso.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* TARJETAS DE TAMAÑOS */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2 text-brand-600 text-sm font-semibold">
            <Boxes size={18} />
            <span>Todos nuestros tamaños</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            Elige el trastero perfecto para ti
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {UNIT_SIZES.map((unit) => (
              <div
                key={unit.id}
                className="relative group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-brand-500 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {unit.dimensions}
                      </h3>
                      <span className="inline-block bg-gray-100 text-slate-600 text-xs px-2 py-1 rounded mt-1 font-medium">
                        {unit.area} m² aprox.
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-brand-600">
                        {unit.price}€
                      </span>
                      <span className="text-gray-500 text-xs block">/mes + IVA</span>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-4 text-sm">{unit.description}</p>

                  <p className="text-xs font-semibold text-slate-500 uppercase mb-2">
                    Recomendado para:
                  </p>
                  <ul className="space-y-1 mb-5">
                    {unit.recommendedFor.map((rec, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-xs text-slate-600"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-green-500 flex-shrink-0"
                        />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/reservar?unit=${unit.id}`}
                    className="block w-full py-2.5 px-4 bg-slate-900 text-white text-center text-sm font-semibold rounded-lg group-hover:bg-brand-600 transition-colors"
                  >
                    Reservar este tamaño
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 bg-brand-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            ¿Tienes dudas sobre el tamaño?
          </h2>
          <p className="text-lg text-brand-100 mb-8">
            Llámanos y te ayudamos a elegir el trastero adecuado según lo que
            quieras guardar.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+34690288707"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 hover:bg-brand-50 font-bold text-lg py-3 px-8 rounded-lg shadow-lg transition"
            >
              Llamar ahora: 690 288 707
            </a>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-2 border border-white text-white hover:bg-white/10 font-semibold text-sm py-3 px-6 rounded-lg transition"
            >
              Enviar una consulta
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
