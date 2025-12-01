import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const ContactoPage: React.FC = () => {
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
      <section className="bg-slate-900 text-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Contacta con CantabriaStorage
          </h1>
          <p className="text-lg text-slate-200 max-w-3xl mx-auto">
            Cuéntanos qué necesitas guardar y te ayudamos a elegir el trastero
            perfecto, tanto si eres particular como empresa.
          </p>
        </div>
      </section>

      {/* CONTACTO + FORMULARIO */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Datos de contacto */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Datos de contacto
            </h2>
            <p className="text-slate-700 mb-4">
              Estamos a tu disposición para resolver dudas sobre tamaños,
              precios, acceso, facturación y cualquier otro detalle de nuestro
              servicio de trasteros.
            </p>

            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <Phone className="text-brand-600 mt-1" size={18} />
                <div>
                  <div className="font-semibold">Teléfono</div>
                  <a
                    href="tel:+34690288707"
                    className="text-slate-700 hover:text-brand-600"
                  >
                    690 288 707
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-brand-600 mt-1" size={18} />
                <div>
                  <div className="font-semibold">Email</div>
                  <a
                    href="mailto:info@webcantabriastorage.com"
                    className="text-slate-700 hover:text-brand-600"
                  >
                    info@webcantabriastorage.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-600 mt-1" size={18} />
                <div>
                  <div className="font-semibold">Dirección</div>
                  <p>
                    Polígono Industrial Tanos-Viérnoles, Nave 4
                    <br />
                    39300 Torrelavega, Cantabria
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-brand-600 mt-1" size={18} />
                <div>
                  <div className="font-semibold">Horario atención telefónica</div>
                  <p>
                    Lunes a viernes de 9:00 a 14:00 y de 16:00 a 19:00.
                    <br />
                    Acceso a trasteros: 24 horas / 365 días.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Formulario */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Envíanos tu consulta
            </h2>
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
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-lg text-sm"
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
