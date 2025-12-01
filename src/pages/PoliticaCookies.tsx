import React from "react";

const PoliticaCookies: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 text-slate-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">Política de Cookies</h1>

      <p className="mb-4">
        La presente Política de Cookies explica qué son las cookies, qué tipos utiliza este
        sitio web y cómo puede gestionarlas el usuario.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">1. ¿Qué son las cookies?</h2>
      <p className="mb-4">
        Las cookies son pequeños archivos de datos que se descargan en el dispositivo del
        usuario (ordenador, smartphone, tablet, etc.) al acceder a determinadas páginas
        web. Permiten, entre otras cosas, almacenar y recuperar información sobre los
        hábitos de navegación, reconocer al usuario y mejorar el servicio ofrecido.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. Tipos de cookies utilizadas</h2>
      <p className="mb-2">Este sitio web puede utilizar las siguientes categorías de cookies:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Cookies técnicas o necesarias:</strong> son imprescindibles para el
          correcto funcionamiento de la web y para permitir la navegación y el uso de sus
          diferentes opciones o servicios (ej. iniciar sesión, reservar un trastero, etc.).
        </li>
        <li>
          <strong>Cookies de personalización:</strong> permiten recordar preferencias del
          usuario (por ejemplo, idioma, zona horaria o tipo de navegador) con el fin de
          mejorar la experiencia.
        </li>
        <li>
          <strong>Cookies de análisis o medición:</strong> permiten cuantificar el número
          de usuarios y realizar medición y análisis estadístico del uso del sitio (por
          ejemplo, mediante herramientas como Google Analytics).
        </li>
        <li>
          <strong>Cookies de terceros:</strong> son aquellas gestionadas por servicios
          externos (por ejemplo, mapas incrustados de Google Maps, reproductores de vídeo,
          etc.), que pueden instalar sus propias cookies con fines técnicos, analíticos o
          de personalización.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        3. Cookies propias y de terceros
      </h2>
      <p className="mb-4">
        Las cookies pueden ser propias (instaladas y gestionadas por Cantabria Storage S.L.)
        o de terceros (instaladas por proveedores externos). El uso de cookies de terceros
        implica que dichos proveedores pueden tratar datos conforme a sus propias políticas
        de privacidad y cookies.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        4. Base legal y consentimiento
      </h2>
      <p className="mb-4">
        Las cookies técnicas resultan necesarias para el funcionamiento de la web y se
        instalan en base al interés legítimo del responsable. El resto de cookies (analíticas,
        personalización, etc.) sólo se instalarán si el usuario otorga su consentimiento a
        través del banner o del panel de configuración de cookies.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        5. Cómo aceptar o rechazar las cookies
      </h2>
      <p className="mb-2">
        El usuario puede gestionar sus preferencias de cookies desde el propio navegador,
        pudiendo:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Aceptar todas las cookies.</li>
        <li>Rechazar todas las cookies salvo las técnicas necesarias.</li>
        <li>Configurar la instalación de cookies de forma selectiva.</li>
      </ul>
      <p className="mb-4">
        Los procedimientos de configuración y eliminación de cookies dependen del navegador.
        A modo orientativo:
      </p>
      <ul className="list-disc pl-6 mb-4 text-sm">
        <li>Chrome: Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos.</li>
        <li>Firefox: Opciones &gt; Privacidad y seguridad &gt; Cookies y datos del sitio.</li>
        <li>Safari: Preferencias &gt; Privacidad.</li>
        <li>Edge: Configuración &gt; Cookies y permisos del sitio.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">6. Cookies utilizadas actualmente</h2>
      <p className="mb-4">
        El sitio puede utilizar cookies internas para la gestión de sesión y preferencias,
        y cookies de terceros asociadas a servicios como:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Google Maps (para mostrar la localización de las instalaciones).</li>
        <li>Herramientas de analítica (en caso de activarse) para uso estadístico.</li>
      </ul>
      <p className="mb-4">
        En caso de incorporación de nuevas cookies o herramientas, esta política será
        actualizada oportunamente.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        7. Modificación de la Política de Cookies
      </h2>
      <p className="mb-4">
        Cantabria Storage S.L. puede modificar la presente Política de Cookies cuando sea
        necesario por cambios legislativos o técnicos. Cualquier modificación se hará
        efectiva tras su publicación en este sitio web.
      </p>

      <p className="mt-8 text-sm text-slate-500">
        Última actualización: Enero 2026
      </p>
    </div>
  );
};

export default PoliticaCookies;
