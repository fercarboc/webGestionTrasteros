import React, { useEffect, useState } from 'react';

import { supabase } from '@/src/supabaseClient';



interface SizeAvailability {
  typeId: string;
  name: string;
  size: string;
  area: number | null;
  price: number | null;
  prefix: string | null;
  freeUnits: number;
  totalUnits: number;
}

interface ReservationForm {
  typeId: string;
  name: string;
  dni: string;
  phone: string;
  email: string;
  months: number;
}

const initialForm: ReservationForm = {
  typeId: '',
  name: '',
  dni: '',
  phone: '',
  email: '',
  months: 1,
};

export const OnlineBooking: React.FC = () => {
  const [sizes, setSizes] = useState<SizeAvailability[]>([]);
  const [loadingSizes, setLoadingSizes] = useState(true);
  const [errorSizes, setErrorSizes] = useState<string | null>(null);

  const [form, setForm] = useState<ReservationForm>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // 1) Cargar tamaños desde la vista TrasUnitTypeAvailability
  useEffect(() => {
    const loadSizes = async () => {
      setLoadingSizes(true);
      setErrorSizes(null);
      const { data, error } = await supabase
        .from('TrasUnitTypeAvailability')
        .select('*')
        .order('price', { ascending: true });

      if (error) {
        console.error(error);
        setErrorSizes('No se pudieron cargar los tamaños de trastero.');
      } else {
        //** @ts-expect-error Supabase types -> lo adaptamos manualmente  */
        setSizes(data as SizeAvailability[]);
      }
      setLoadingSizes(false);
    };

    loadSizes();
  }, []);

  const handleSelectSize = (typeId: string) => {
    setForm((prev) => ({
      ...prev,
      typeId,
      months: prev.months || 1,
    }));
    setSuccessMessage(null);
    setErrorMessage(null);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'months' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!form.typeId) {
      setErrorMessage('Debes seleccionar un tamaño de trastero.');
      return;
    }
    if (!form.name || !form.dni || !form.email) {
      setErrorMessage('Nombre, DNI/NIE y email son obligatorios.');
      return;
    }

    try {
      setSubmitting(true);
      const { error } = await supabase.from('TrasOnlineReservations').insert({
        typeId: form.typeId,
        name: form.name,
        dni: form.dni,
        phone: form.phone,
        email: form.email,
        months: form.months || 1,
      });

      if (error) {
        console.error(error);
        setErrorMessage('Ha ocurrido un error al registrar la solicitud.');
      } else {
        setSuccessMessage(
          'Hemos recibido tu solicitud. Nos pondremos en contacto contigo para asignarte un trastero y enviarte tu PIN y código QR.'
        );
        setForm(initialForm);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">
          Reserva online tu trastero
        </h1>
        <p className="text-slate-300 mb-8 max-w-2xl">
          Elige el tamaño que mejor se adapta a lo que necesitas. Si en este
          momento no hay unidades disponibles para un tamaño, podrás apuntarte y
          te avisaremos en cuanto quede libre.
        </p>

        {/* LISTADO DE TAMAÑOS */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Tamaños y disponibilidad</h2>

          {loadingSizes && <p>Cargando tamaños…</p>}
          {errorSizes && <p className="text-red-400">{errorSizes}</p>}

          {!loadingSizes && !errorSizes && (
            <div className="grid gap-4 md:grid-cols-3">
              {sizes.map((size) => {
                const isAvailable = size.freeUnits > 0;
                const isSelected = form.typeId === size.typeId;

                return (
                  <article
                    key={size.typeId}
                    className={`rounded-2xl border p-4 bg-slate-900/70 ${
                      isSelected ? 'border-emerald-400' : 'border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">
                        {size.name}{' '}
                        <span className="text-slate-400">({size.size})</span>
                      </h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          isAvailable
                            ? 'bg-emerald-500/20 text-emerald-300'
                            : 'bg-red-500/20 text-red-300'
                        }`}
                      >
                        {isAvailable
                          ? `${size.freeUnits} disponible(s)`
                          : 'Agotado en este momento'}
                      </span>
                    </div>
                    <p className="text-sm text-slate-300 mb-1">
                      {size.area ?? '—'} m²
                    </p>
                    <p className="text-sm text-slate-200 mb-4">
                      Desde{' '}
                      <span className="text-lg font-bold">
                        {size.price ?? 0}€
                      </span>{' '}
                      / mes
                    </p>

                    <button
                      disabled={!isAvailable}
                      onClick={() => isAvailable && handleSelectSize(size.typeId)}
                      className={`w-full rounded-full py-2 text-sm font-semibold transition ${
                        isAvailable
                          ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                          : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      {isAvailable
                        ? isSelected
                          ? 'Seleccionado'
                          : 'Elegir este tamaño'
                        : 'Sin unidades disponibles'}
                    </button>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {/* FORMULARIO DE RESERVA */}
        <section className="max-w-xl">
          <h2 className="text-xl font-semibold mb-4">
            Solicitar reserva online
          </h2>
          <p className="text-sm text-slate-300 mb-4">
            Rellena tus datos y te contactaremos para confirmar la reserva,
            asignar el trastero concreto y enviarte tu PIN y código QR de
            acceso. El primer día recogerás la llave en recepción.
          </p>

          {errorMessage && (
            <div className="mb-4 rounded-xl bg-red-500/15 border border-red-500/40 px-4 py-2 text-sm text-red-200">
              {errorMessage}
            </div>
          )}
          {successMessage && (
            <div className="mb-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 px-4 py-2 text-sm text-emerald-200">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Nombre y apellidos</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">DNI / NIE</label>
              <input
                type="text"
                name="dni"
                value={form.dni}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Teléfono</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">
                  Meses de alquiler (aprox.)
                </label>
                <select
                  name="months"
                  value={form.months}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm"
                >
                  <option value={1}>1 mes</option>
                  <option value={3}>3 meses</option>
                  <option value={6}>6 meses</option>
                  <option value={12}>12 meses</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 rounded-full px-6 py-2 text-sm font-semibold bg-sky-600 hover:bg-sky-700 disabled:bg-slate-700 disabled:text-slate-400"
            >
              {submitting ? 'Enviando solicitud…' : 'Enviar solicitud de reserva'}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};
