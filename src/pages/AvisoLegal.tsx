// src/pages/AvisoLegal.tsx
import React from 'react';
import { FileText, CheckCircle2, Shield } from 'lucide-react';

export const AvisoLegal: React.FC = () => {
  return (
    <div className="bg-white">

      {/* HERO LEGAL */}
      <section className="bg-slate-900 text-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Aviso Legal
          </h1>

          <p className="text-lg md:text-xl text-slate-200 mb-6">
            Información jurídica y datos de la titularidad del sitio web.
          </p>

          {/* CARD RESUMEN LEGAL */}
          <div className="mt-6 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-700 p-4 rounded-2xl max-w-2xl mx-auto shadow-lg">
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-slate-200">

              <div className="flex items-center gap-2">
                <FileText className="text-brand-400" size={18}/>
                Transparencia informativa
              </div>

              <div className="flex items-center gap-2">
                <Shield className="text-brand-400" size={18}/>
                Cumplimiento LSSI-CE
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-400" size={18}/>
                Protección de datos
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* CONTENIDO LEGAL */}
      <section className="max-w-4xl mx-auto px-4 py-10 text-slate-800">

        <p className="mb-4">
          En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002,
          de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico
          (LSSI-CE), se facilitan a continuación los datos identificativos del titular del sitio web:
        </p>

        <ul className="list-disc ml-6 mb-5">
          <li><strong>Titular:</strong> Cantabria Storage S.L.</li>
          <li><strong>Nombre comercial:</strong> CantabriaStorage</li>
          <li><strong>Domicilio social:</strong> Polígono Industrial Tanos-Viérnoles, Nave 4, 39300 Torrelavega, Cantabria</li>
          <li><strong>CIF:</strong> B-89784132</li>
          <li><strong>Teléfono:</strong> 690 288 707</li>
          <li><strong>Email:</strong> info@webcantabriastorage.com</li>
          <li><strong>Dominio web:</strong> www.webcantabriastorage.com / www.cantabriastorage.com</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Objeto</h2>
        <p className="mb-4">
          El presente Aviso Legal regula el acceso, navegación y uso del sitio web, así como las
          responsabilidades derivadas de la utilización de sus contenidos.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Condiciones de uso</h2>
        <p className="mb-4">
          El Usuario se compromete a hacer un uso adecuado y lícito del sitio web y sus contenidos,
          respetando la legislación vigente, la moral, el orden público y el presente Aviso Legal.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Servicios de alquiler</h2>
        <p className="mb-4">
          La información proporcionada a través de este sitio web sobre precios, disponibilidad y
          características de los trasteros tiene carácter informativo y puede estar sujeta a
          modificaciones. Las condiciones específicas del alquiler serán las recogidas en el contrato
          formalizado con el cliente.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Propiedad intelectual</h2>
        <p className="mb-4">
          Todos los contenidos del sitio web son propiedad de Cantabria Storage S.L. o de terceros
          autorizados, y queda prohibida su reproducción sin autorización expresa.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Protección de datos</h2>
        <p className="mb-4">
          El tratamiento de datos personales se regirá por lo dispuesto en la Política de Privacidad,
          conforme al RGPD y la normativa vigente.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Legislación aplicable</h2>
        <p className="mb-4">
          El presente Aviso Legal se rige por la legislación española. Para cuantas cuestiones se
          susciten sobre la interpretación, aplicación y cumplimiento del mismo, las partes se someten
          a los Juzgados y Tribunales de Torrelavega (Cantabria), salvo lo dispuesto por la normativa
          de consumidores.
        </p>
      </section>
    </div>
  );
};

export default AvisoLegal;
