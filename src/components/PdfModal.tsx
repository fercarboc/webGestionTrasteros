import React from 'react';
import { X } from 'lucide-react';

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfFile: string;
}

export const PdfModal: React.FC<PdfModalProps> = ({ isOpen, onClose, pdfFile }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white w-[90vw] h-[90vh] rounded-lg overflow-hidden shadow-2xl relative">
        
        {/* Top Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 hover:text-black"
        >
          <X size={28} />
        </button>

        {/* PDF Viewer */}
        <iframe
          src={pdfFile}
          title="Condiciones Generales"
          className="w-full h-full border-none"
        ></iframe>
      </div>
    </div>
  );
};
