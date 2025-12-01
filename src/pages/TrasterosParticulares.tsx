// src/pages/TrasterosParticulares.tsx
import React from 'react';
import { Phone } from 'lucide-react';

export const TrasterosParticulares: React.FC = () => {
  return (
    <div className="bg-white">

      {/* HERO */}
     
<section 
  className="relative w-full h-[340px] md:h-[420px] bg-center bg-cover bg-no-repeat flex items-center justify-center"
  style={{ backgroundImage: `url('/clientes.webp')` }}
>
  {/* Capa oscura para contraste */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
      Trasteros para Particulares
    </h1>
    <p className="text-lg md:text-xl text-slate-200 mb-6 drop-shadow-lg">
      Guarda tus pertenencias personales con seguridad, privacidad y acceso 24 horas.
    </p>
    <a
      href="tel:+34690288707"
      className="inline-flex items-center gap-2 text-lg font-semibold bg-sky-500 hover:bg-sky-600 px-8 py-3 rounded-full shadow-md"
    >
      <Phone size={20}/> Llamar 690 288 707
    </a>
  </div>
</section>


      {/* IDEAL PARA… CON IMÁGENES */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            Ideal para guardar…
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {[
              { img: "/muebles.jpg", text: "Muebles y enseres" },
              { img: "/electrodomesticos.jpg", text: "Electrodomésticos" },
              { img: "/navidad.jpg", text: "Decoración del hogar y temporada" },
              { img: "/recuerdos.png", text: "Recuerdos personales y álbumes" },
              { img: "/mudanzas.avif", text: "Contenido temporal de mudanzas" },
              { img: "/libros.png", text: "Libros, material de estudio y documentos" },

            ].map((item, idx) => (
              <div key={idx} className="bg-white border rounded-xl shadow-sm overflow-hidden">
                
                <img
                  src={item.img}
                  alt={item.text}
                  className="w-full h-44 object-cover"
                />

                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.text}
                  </h3>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>
    
    </div>
  );
};
