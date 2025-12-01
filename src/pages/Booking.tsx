import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { UNIT_SIZES } from '../constants';
import { UnitSize } from '../types';
import { Check, ChevronRight, ChevronLeft, CreditCard, Calendar, User, Truck, ShieldCheck } from 'lucide-react';

const STEPS = [
  { id: 1, title: 'Tamaño' },
  { id: 2, title: 'Fechas' },
  { id: 3, title: 'Datos' },
  { id: 4, title: 'Pago' },
  { id: 5, title: 'Confirmación' },
];

export const Booking: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [selectedUnit, setSelectedUnit] = useState<UnitSize | null>(null);
  
  // Form State
  const [startDate, setStartDate] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dni: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'transfer'>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  // Initialize from URL param
  useEffect(() => {
    const unitParam = searchParams.get('unit');
    if (unitParam && step === 1) {
      const unit = UNIT_SIZES.find(u => u.id === unitParam);
      if (unit) setSelectedUnit(unit);
    }
  }, [searchParams, step]);

  const nextStep = () => setStep(s => Math.min(s + 1, 5));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleUnitSelect = (unit: UnitSize) => {
    setSelectedUnit(unit);
    nextStep();
  };

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      nextStep();
    }, 2000);
  };

  const renderStepContent = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Selecciona tu trastero</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {UNIT_SIZES.map(unit => (
                <button
                  key={unit.id}
                  onClick={() => handleUnitSelect(unit)}
                  className={`relative p-6 border-2 rounded-xl text-left transition-all group ${
                    selectedUnit?.id === unit.id 
                      ? 'border-brand-600 bg-brand-50' 
                      : 'border-gray-200 hover:border-brand-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-lg font-bold text-slate-900">{unit.dimensions} ({unit.area}m²)</span>
                    <span className="text-brand-600 font-bold">{unit.price}€<span className="text-xs text-gray-500 font-normal">/mes</span></span>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">{unit.description}</p>
                  {selectedUnit?.id === unit.id && (
                    <div className="absolute top-4 right-4 text-brand-600">
                      <Check size={20} />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">¿Cuándo quieres empezar?</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <label className="block text-sm font-medium text-slate-700 mb-2">Fecha de inicio</label>
                <input 
                    type="date" 
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-brand-500 focus:border-brand-500 p-3 border"
                    min={new Date().toISOString().split('T')[0]}
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <p className="mt-4 text-sm text-slate-500 flex items-start gap-2">
                    <Truck size={16} className="mt-0.5" />
                    El acceso se activará a las 08:00 AM del día seleccionado. Te enviaremos el código de acceso por email y SMS.
                </p>
            </div>
            <div className="flex justify-end mt-6">
                <button 
                    disabled={!startDate}
                    onClick={nextStep}
                    className="bg-brand-600 text-white px-8 py-3 rounded-lg font-semibold disabled:opacity-50 hover:bg-brand-700"
                >
                    Continuar
                </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Datos Personales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
                    <input 
                        type="text" 
                        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-brand-500 focus:border-brand-500"
                        value={formData.firstName}
                        onChange={e => setFormData({...formData, firstName: e.target.value})}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Apellidos</label>
                    <input 
                        type="text" 
                        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-brand-500 focus:border-brand-500"
                        value={formData.lastName}
                        onChange={e => setFormData({...formData, lastName: e.target.value})}
                    />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">DNI / NIF</label>
                    <input 
                        type="text" 
                        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-brand-500 focus:border-brand-500"
                        value={formData.dni}
                        onChange={e => setFormData({...formData, dni: e.target.value})}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input 
                        type="email" 
                        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-brand-500 focus:border-brand-500"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                    <input 
                        type="tel" 
                        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-brand-500 focus:border-brand-500"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                </div>
            </div>
             <div className="flex justify-end mt-6">
                <button 
                    disabled={!formData.email || !formData.firstName || !formData.dni}
                    onClick={nextStep}
                    className="bg-brand-600 text-white px-8 py-3 rounded-lg font-semibold disabled:opacity-50 hover:bg-brand-700"
                >
                    Continuar
                </button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Resumen y Pago</h2>
            
            <div className="bg-slate-50 p-6 rounded-xl space-y-3">
                <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-slate-600">Trastero {selectedUnit?.dimensions}</span>
                    <span className="font-semibold">{selectedUnit?.price}€</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-slate-600">IVA (21%)</span>
                    <span className="font-semibold">{(selectedUnit?.price! * 0.21).toFixed(2)}€</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-brand-700 pt-2">
                    <span>Total Mensual</span>
                    <span>{(selectedUnit?.price! * 1.21).toFixed(2)}€</span>
                </div>
            </div>

            <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input 
                        type="radio" 
                        name="payment" 
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                        className="text-brand-600 focus:ring-brand-500" 
                    />
                    <CreditCard className="text-slate-500" />
                    <span className="font-medium text-slate-700">Tarjeta de Crédito / Débito</span>
                </label>
                <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input 
                        type="radio" 
                        name="payment" 
                        checked={paymentMethod === 'transfer'}
                        onChange={() => setPaymentMethod('transfer')}
                        className="text-brand-600 focus:ring-brand-500" 
                    />
                    <div className="flex items-center gap-2">
                         <span className="font-medium text-slate-700">Transferencia Bancaria</span>
                         <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Verificación 24h</span>
                    </div>
                </label>
            </div>

            <button 
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full bg-brand-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-brand-700 flex items-center justify-center gap-2"
            >
                {isProcessing ? 'Procesando...' : 'Confirmar y Pagar'}
            </button>
            <p className="text-center text-xs text-slate-500">
                Al confirmar aceptas las condiciones de contratación y la política de privacidad.
            </p>
          </div>
        );

      case 5:
        return (
          <div className="text-center py-10">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="text-green-600" size={48} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">¡Reserva Confirmada!</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto">
                Gracias, {formData.firstName}. Hemos enviado el contrato y las instrucciones de acceso a <strong>{formData.email}</strong>.
            </p>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 max-w-md mx-auto mb-8 text-left">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <ShieldCheck className="text-brand-600"/> Próximos pasos
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-slate-700">
                    <li>Revisa tu correo electrónico.</li>
                    <li>Firma digitalmente el contrato adjunto.</li>
                    <li>Recibe tu código PIN de acceso personal.</li>
                    <li>Accede a tu trastero el {startDate}.</li>
                </ol>
            </div>

            <Link 
                to="/"
                className="inline-block bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800"
            >
                Volver al Inicio
            </Link>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {STEPS.map((s, idx) => (
                <span 
                    key={s.id} 
                    className={`text-xs md:text-sm font-semibold ${step >= s.id ? 'text-brand-600' : 'text-gray-400'}`}
                >
                    {s.title}
                </span>
            ))}
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
                className="h-full bg-brand-600 transition-all duration-500 ease-out"
                style={{ width: `${(step / 5) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Wizard Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
             {/* Header */}
             <div className="bg-slate-900 px-6 py-4 flex justify-between items-center text-white">
                <div className="flex items-center gap-2">
                     <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold">{step}</span>
                     <span className="font-semibold hidden sm:inline">{STEPS[step-1].title}</span>
                </div>
                {step > 1 && step < 5 && (
                    <button onClick={prevStep} className="text-sm text-slate-300 hover:text-white flex items-center gap-1">
                        <ChevronLeft size={16} /> Atrás
                    </button>
                )}
             </div>

             {/* Content */}
             <div className="p-6 md:p-10">
                {renderStepContent()}
             </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-slate-500">
            <p>¿Necesitas ayuda? Llámanos al <span className="font-bold text-slate-700">942 00 00 00</span></p>
        </div>
      </div>
    </div>
  );
};