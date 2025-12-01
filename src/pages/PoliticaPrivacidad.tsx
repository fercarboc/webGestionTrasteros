import React from "react";

const PoliticaPrivacidad: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 text-slate-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>

      <p className="mb-4">
        En cumplimiento de lo dispuesto en el Reglamento (UE) 2016/679, General de
        Protección de Datos (RGPD), y en la Ley Orgánica 3/2018, de Protección de
        Datos Personales y garantía de los derechos digitales (LOPDGDD),
        <strong> Cantabria Storage S.L.</strong> informa a los usuarios del sitio web
        sobre el tratamiento de sus datos personales.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">1. Responsable del tratamiento</h2>
      <p className="mb-2">
        <strong>Razón social:</strong> Cantabria Storage S.L.
      </p>
      <p className="mb-2">
        <strong>CIF:</strong> B-89784132
      </p>
      <p className="mb-2">
        <strong>Domicilio:</strong> Polígono Industrial Tanos-Viérnoles, Nave 4,
        39300 Torrelavega (Cantabria)
      </p>
      <p className="mb-2">
        <strong>Teléfono:</strong> 690 288 707
      </p>
      <p className="mb-4">
        <strong>Email de contacto:</strong>{" "}
        <a
          href="mailto:info@webcantabriastorage.com"
          className="text-brand-600 underline"
        >
          info@webcantabriastorage.com
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. Datos personales tratados</h2>
      <p className="mb-2">Podemos tratar las siguientes categorías de datos:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Datos identificativos: nombre, apellidos, DNI/NIE, dirección postal.</li>
        <li>Datos de contacto: teléfono, correo electrónico.</li>
        <li>
          Datos contractuales: información de alquileres, histórico de contratos,
          trastero asignado, fechas de entrada y salida.
        </li>
        <li>
          Datos de facturación y cobro: método de pago, IBAN u otros datos necesarios
          para la gestión de recibos.
        </li>
        <li>
          Datos de acceso a la instalación: código PIN, token de acceso por QR.
        </li>
        <li>
          Datos de navegación: dirección IP, dispositivo, navegador, páginas visitadas
          (a través de cookies o tecnologías similares, según se indica en la Política
          de Cookies).
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">3. Finalidades del tratamiento</h2>
      <p className="mb-2">Los datos personales se tratarán con las siguientes finalidades:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Gestionar las solicitudes de información realizadas a través del sitio web.</li>
        <li>
          Gestionar la contratación del servicio de alquiler de trasteros, tanto presencial
          como online.
        </li>
        <li>
          Gestionar la facturación, cobros, devoluciones de fianzas y demás obligaciones
          de carácter económico y fiscal.
        </li>
        <li>
          Gestionar los accesos a las instalaciones mediante PIN y códigos QR, garantizando
          la seguridad de las personas y bienes.
        </li>
        <li>
          Enviar comunicaciones relativas al servicio contratado (avisos de cobro, avisos
          de mantenimiento, cambios de horario, incidencias, etc.).
        </li>
        <li>
          Enviar comunicaciones comerciales sobre servicios relacionados con el
          almacenamiento y trasteros, siempre que el usuario haya prestado su
          consentimiento expreso.
        </li>
        <li>Mejorar la experiencia de navegación y la seguridad del sitio web.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Legitimación del tratamiento</h2>
      <p className="mb-2">Las bases legales para el tratamiento de sus datos son:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Ejecución de un contrato</strong>: para gestionar el alquiler de
          trasteros y los servicios asociados.
        </li>
        <li>
          <strong>Cumplimiento de obligaciones legales</strong>: obligaciones fiscales,
          contables, de prevención de fraude y de seguridad.
        </li>
        <li>
          <strong>Consentimiento del interesado</strong>: para el envío de
          comunicaciones comerciales o respuesta a solicitudes de información.
        </li>
        <li>
          <strong>Interés legítimo</strong>: para la seguridad de las instalaciones, la
          mejora del servicio y la atención al cliente.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">5. Cesión de datos y encargados</h2>
      <p className="mb-4">
        Con carácter general no se comunicarán datos personales a terceros, salvo obligación
        legal o cuando sea necesario para la prestación del servicio. Podrán tener acceso a
        los datos:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Entidades financieras, para la gestión de cobros y domiciliaciones.</li>
        <li>
          Proveedores tecnológicos (hosting, servicios en la nube, correo electrónico,
          sistemas de gestión), en calidad de encargados del tratamiento.
        </li>
        <li>Empresas de seguridad y videovigilancia, cuando sea necesario.</li>
        <li>Administración Tributaria y otros organismos públicos, por obligación legal.</li>
      </ul>
      <p className="mb-4">
        Todos los encargados de tratamiento ofrecen garantías adecuadas de cumplimiento del
        RGPD y firman los correspondientes contratos de confidencialidad.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        6. Plazos de conservación de los datos
      </h2>
      <p className="mb-4">
        Los datos personales se conservarán mientras se mantenga la relación contractual o
        mientras sean necesarios para la finalidad para la que se recogieron. Una vez
        finalizada la relación, se conservarán debidamente bloqueados durante los plazos
        exigidos por la normativa fiscal, contable y administrativa (con carácter general,
        <strong> hasta 5 años</strong>), tras lo cual serán eliminados de forma segura.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">7. Derechos de los usuarios</h2>
      <p className="mb-2">
        El usuario puede ejercer en cualquier momento los siguientes derechos:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Derecho de acceso a sus datos personales.</li>
        <li>Derecho de rectificación de los datos inexactos o incompletos.</li>
        <li>Derecho de supresión (derecho al olvido), en los casos previstos en la ley.</li>
        <li>Derecho de oposición al tratamiento de sus datos.</li>
        <li>Derecho a la limitación del tratamiento en determinadas circunstancias.</li>
        <li>Derecho a la portabilidad de los datos a otro responsable.</li>
        <li>
          Derecho a retirar el consentimiento prestado, en cualquier momento, sin carácter
          retroactivo.
        </li>
      </ul>
      <p className="mb-4">
        Para ejercer estos derechos, puede enviar una solicitud por escrito, acompañada de
        una copia de su documento de identidad, a:
        <br />
        <strong>Email:</strong>{" "}
        <a
          href="mailto:info@webcantabriastorage.com"
          className="text-brand-600 underline"
        >
          info@webcantabriastorage.com
        </a>
      </p>
      <p className="mb-4">
        Asimismo, tiene derecho a presentar una reclamación ante la{" "}
        <strong>Agencia Española de Protección de Datos (AEPD)</strong> si considera que se
        han vulnerado sus derechos.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">8. Seguridad de los datos</h2>
      <p className="mb-4">
        Cantabria Storage S.L. aplica medidas técnicas y organizativas apropiadas para
        garantizar un nivel de seguridad adecuado al riesgo, incluyendo controles de acceso,
        cifrado, copias de seguridad y sistemas de monitorización, con el fin de evitar la
        pérdida, alteración, acceso no autorizado o divulgación de los datos personales.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">9. Videovigilancia</h2>
      <p className="mb-4">
        Las instalaciones físicas pueden contar con sistemas de videovigilancia para
        garantizar la seguridad de las personas y bienes. Las imágenes se conservan durante
        un plazo máximo de <strong>30 días</strong>, salvo que deban conservarse por requerimiento
        judicial o policial.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        10. Modificaciones de la Política de Privacidad
      </h2>
      <p className="mb-4">
        Cantabria Storage S.L. se reserva el derecho a modificar la presente Política de
        Privacidad para adaptarla a novedades legislativas o cambios en la prestación del
        servicio. En tal caso, se anunciará en el sitio web.
      </p>

      <p className="mt-8 text-sm text-slate-500">
        Última actualización: Enero 2026
      </p>
    </div>
  );
};

export default PoliticaPrivacidad;
