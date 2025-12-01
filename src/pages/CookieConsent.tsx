import React, { useState, useEffect } from "react";




export const CookieConsent = ({ forceOpen = false }: { forceOpen?: boolean }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const cookiePref = localStorage.getItem("cookieConsent");

    if (!cookiePref || forceOpen) {
      setShow(true);
    }
  }, [forceOpen]);

  const acceptAll = () => {
    localStorage.setItem("cookieConsent", "all");
    setShow(false);
  };

  const rejectAll = () => {
    localStorage.setItem("cookieConsent", "necessary");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-slate-900 text-white p-4 z-[9999] shadow-lg border-t border-slate-700">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">

        <p className="text-sm leading-relaxed">
          Usamos cookies propias y de terceros para analizar el tráfico y mejorar tu experiencia.
          Puedes aceptar o rechazar las cookies no necesarias.
        </p>

        <div className="flex gap-2">
          <button
            onClick={rejectAll}
            className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600 text-sm"
          >
            Rechazar
          </button>

          <button
            onClick={acceptAll}
            className="px-4 py-2 bg-brand-500 text-white rounded hover:bg-brand-600 text-sm"
          >
            Aceptar todo
          </button>
        </div>
      </div>
    </div>
  );
};





