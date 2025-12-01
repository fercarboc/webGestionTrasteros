// src/pages/EmpresasAutonomos.tsx
import React from 'react';
import { Phone } from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';

export const EmpresasAutonomos: React.FC = () => {
  return (
    <div >
      {/* Hero */}
 {/* HERO */}
<section
  className="relative w-full h-[340px] md:h-[420px] bg-center bg-cover bg-no-repeat flex items-center justify-center"
  style={{ backgroundImage: `url('/empresas.webp')` }}
>
  {/* capa oscura */}
  <div className="absolute inset-0 bg-black/55"></div>

  <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
      Trasteros para Empresas y Autónomos
    </h1>

    <p className="text-lg md:text-xl text-gray-200 mb-6 drop-shadow-md">
      Almacena herramientas, maquinaria, materiales, repuestos, uniformes,
      inventario y archivos profesionales.
    </p>

    <a
      href="tel:+34690288707"
      className="inline-flex items-center gap-2 text-lg font-semibold bg-amber-500 hover:bg-amber-600 px-8 py-3 rounded-full shadow-xl transition-transform hover:-translate-y-0.5"
    >
      <Phone size={20} /> Llamar 690 288 707
    </a>
  </div>
</section>

      {/* Ideal para — ahora con imágenes */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            Ideal para…
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Stock y mercancía */}
            <div className="bg-white border rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition">
              <img
                src="/stock.jpg"
                alt="Stock y mercancía"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-slate-900 text-lg">
                  Stock y mercancía
                </h3>
              </div>
            </div>

            {/* Inventario y logística */}
            <div className="bg-white border rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition">
              <img
                src="/inventario.webp"
                alt="Inventario y logística"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-slate-900 text-lg">
                  Inventario y logística
                </h3>
              </div>
            </div>

            {/* Herramientas y material de obra */}
            <div className="bg-white border rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition">
              <img
                src="/materialobras.webp"
                alt="Material de obra"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-slate-900 text-lg">
                  Material de obra y herramientas
                </h3>
              </div>
            </div>

            {/* Archivo documentación */}
            <div className="bg-white border rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition">
              <img
                src="/archivodocumentacion.jpg"
                alt="Archivo documentación"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-slate-900 text-lg">
                  Archivo y documentación
                </h3>
              </div>
            </div>

            {/* Almacén auxiliar */}
            <div className="bg-white border rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition">
              <img
                src="/almacenauxiliar.avif"
                alt="Almacén auxiliar"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-slate-900 text-lg">
                  Almacén auxiliar empresarial
                </h3>
              </div>
            </div>

            {/* Reparto y logística local */}
            <div className="bg-white border rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition">
              <img
                src="/suministro.png"
                alt="Reparto local"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-slate-900 text-lg">
                  Suministro y reparto local
                </h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Ventajas para empresas — dejamos igual */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl text-center font-bold text-slate-900 mb-10">
            Ventajas para uso profesional
          </h2>

          <ul className="space-y-4 text-lg text-slate-700">
            {[
              "Acceso para varios empleados (multiusuario)",
              "Posibilidad de alquilar más de un trastero",
              "Área de carga y descarga junto a la nave",
              "Fácil acceso con furgón o camión ligero",
              "Facturación para empresas y autónomos",
              "Opción de contrato anual con descuento",
            ].map((txt, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-emerald-500" size={22}/>
                {txt}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
