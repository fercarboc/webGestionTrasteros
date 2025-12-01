import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './src/components/Layout';
import { Home } from './src/pages/Home';
import { Booking } from './src/pages/Booking';

import { TrasterosParticulares } from './src/pages/TrasterosParticulares';
import { EmpresasAutonomos } from './src/pages/EmpresasAutonomos';
// Podrías crear también: TamanosPage, DondeEstamosPage, ContactoPage, etc.
import { AvisoLegal } from './src/pages/AvisoLegal';
import PoliticaPrivacidad  from './src/pages/PoliticaPrivacidad';
import PoliticaCookies  from './src/pages/PoliticaCookies';
 import { TamanosPage } from './src/pages/TamanosPage';
import { DondeEstamosPage } from './src/pages/DondeEstamosPage.tsx';
import { ContactoPage } from './src/pages/ContactoPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trasteros-particulares" element={<TrasterosParticulares />} />
          <Route path="/empresas-autonomos" element={<EmpresasAutonomos />} />
         <Route path="/tamanos" element={<TamanosPage />} />
         <Route path="/donde-estamos" element={<DondeEstamosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/politica-cookies" element={<PoliticaCookies />} />

          <Route path="/reservar" element={<Booking />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
