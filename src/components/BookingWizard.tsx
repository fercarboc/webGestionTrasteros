import React, { useState, useEffect } from 'react';
import { X, CheckCircle, CreditCard, ShieldCheck } from 'lucide-react';
import { Button } from './Button';
import { supabase } from '../supabaseClient';
import { BookingStep, UnitSize } from '../types';

interface TrasStorageUnit {
  id: string;
  unitNumber: string;
  size: string;
  price: number;
  status: string;
}

interface BookingWizardProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedUnitId?: string | null;
}

export const BookingWizard: React.FC<BookingWizardProps> = ({ isOpen, onClose, preSelectedUnitId }) => {

  /*******************************
   * ESTADO
   *******************************/
  const [step, setStep] = useState<BookingStep>(BookingStep.SELECT_UNIT);

  const [units, setUnits] = useState<TrasStorageUnit[]>([]);
  const [loadingUnits, setLoadingUnits] = useState(true);

  const [data, setData] = useState({
    unitId: preSelectedUnitId || null,
    startDate: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    paymentMethod: 'card',
  });

  const [isProcessing, setIsProcessing] = useState(false);


  /*******************************
   * Cargar unidades desde SUPABASE
   *******************************/
  useEffect(() => {
    if (isOpen) fetchUnits();
  }, [isOpen]);

  const fetchUnits = async () => {
    setLoadingUnits(true);
    console.log("📡 Fetching units from Supabase…");

    const { data, error } = await supabase
      .from("TrasStorageUnits")
      .select("*");

    if (error) console.error("❗ERROR:", error);
    else {
      console.log("📦 Units:", data);
      setUnits(data);
    }
    setLoadingUnits(false);
  };


  /*******************************
   * Cambios en inputs
   *******************************/
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);


  /*******************************
   * Simular pago
   *******************************/
  const simulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      handleNext();
    }, 1200);
  };


  /*******************************
   * Render de cada PASO
   *******************************/
  const renderStep = () => {
    switch (step) {

      case BookingStep.SELECT_UNIT:
        return (
          <div className="p-3">
            {loadingUnits && <p>🔄 Cargando disponibilidad…</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto">
              {units.map(unit => (
                <div
                  key={unit.id}
                  onClick={() => {
                    if (unit.status === "AVAILABLE") {
                      setData({ ...data, unitId: unit.id });
                      handleNext();
                    }
                  }}
                  className={`cursor-pointer border-2 rounded-xl p-4 transition-all 
                    ${unit.status === "AVAILABLE" ? "hover:border-green-500" : "opacity-40 cursor-not-allowed"}`}
                >

                  <div className="flex justify-between">
                    <span className="font-bold text-lg">{unit.size}</span>

                    <span className={`
                      text-xs px-2 py-1 rounded 
                      ${unit.status === "AVAILABLE" && "bg-green-100 text-green-700"}
                      ${unit.status === "OCCUPIED" && "bg-red-100 text-red-700"}
                      ${unit.status === "MAINTENANCE" && "bg-yellow-100 text-yellow-700"}
                    `}>
                      {unit.status}
                    </span>
                  </div>

                  <div className="text-2xl font-bold text-accent-600 mt-2">
                    {unit.price}€<span className="text-sm text-gray-500">/mes</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case BookingStep.SELECT_DATES:
        return (
          <div className="space-y-6 py-4">
            <label className="block text-sm mb-2">¿Fecha de inicio?</label>
            <input
              type="date"
              name="startDate"
              value={data.startDate}
              min={new Date().toISOString().split('T')[0]}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            />
          </div>
        );

      case BookingStep.PERSONAL_INFO:
        return (
          <div className="space-y-4 py-2">
            <label className="block text-sm mb-1">Nombre</label>
            <input name="firstName" value={data.firstName} onChange={handleInputChange} className="w-full border p-2 rounded" />
            <label className="block text-sm mb-1">Apellidos</label>
            <input name="lastName" value={data.lastName} onChange={handleInputChange} className="w-full border p-2 rounded" />
            <label className="block text-sm mb-1">Email</label>
            <input name="email" type="email" value={data.email} onChange={handleInputChange} className="w-full border p-2 rounded" />
            <label className="block text-sm mb-1">Teléfono</label>
            <input name="phone" value={data.phone} onChange={handleInputChange} className="w-full border p-2 rounded" />
          </div>
        );

      case BookingStep.PAYMENT:
        const unitSel = units.find(u => u.id === data.unitId);
        return (
          <div className="space-y-6 py-4">
            <div className="bg-gray-50 p-4 rounded-lg border">
              <div className="flex justify-between text-sm mb-1">
                <span>Trastero {unitSel?.size}</span>
                <span>{unitSel?.price}€</span>
              </div>
              <div className="border-t my-2 pt-2 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>{unitSel ? (unitSel.price * 1.21).toFixed(2) : "0"}€</span>
              </div>
            </div>

            <Button onClick={simulatePayment} fullWidth>
              Pagar ahora
            </Button>
          </div>
        );

      case BookingStep.CONFIRMATION:
        return (
          <div className="text-center py-8">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto" />
            <h3 className="text-2xl font-bold mb-4">¡Reserva confirmada!</h3>
            <p>En breve recibirás el email con instrucciones y acceso.</p>

            <Button onClick={onClose} fullWidth className="mt-8">
              Volver al inicio
            </Button>
          </div>
        );
    }
  };

  if (!isOpen) return null;


  /*******************************
   * UI FINAL
   *******************************/
  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative mx-auto mt-10 bg-white rounded-xl shadow-md w-full max-w-xl">
        
        <div className="bg-brand-900 px-4 py-3 flex justify-between items-center">
          <h3 className="text-white">
            {step === BookingStep.CONFIRMATION ? "Finalizado" : "Reserva online"}
          </h3>
          <button onClick={onClose}>
            <X className="text-white" />
          </button>
        </div>

        <div className="p-5">{renderStep()}</div>

        {step !== BookingStep.CONFIRMATION && (
          <div className="bg-gray-50 px-4 py-3 flex justify-between">
            {step > BookingStep.SELECT_UNIT && (
              <Button onClick={handleBack} variant="outline">
                Atrás
              </Button>
            )}
            <Button onClick={handleNext}>
              Continuar
            </Button>
          </div>
        )}

      </div>
    </div>
  );
};
