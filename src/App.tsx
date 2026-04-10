/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Personaliza from './pages/Personaliza';
import Mayoreo from './pages/Mayoreo';
import CreaTuTienda from './pages/CreaTuTienda';
import QuienesSomos from './pages/QuienesSomos';
import Catalogo from './pages/Catalogo';
import Login from './pages/Login';
import Personalizador from './pages/Personalizador';
import Dropshipping from './pages/Dropshipping';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="personaliza" element={<Personaliza />} />
          <Route path="mayoreo" element={<Mayoreo />} />
          <Route path="dropshipping" element={<Dropshipping />} />
          <Route path="crea-tu-tienda" element={<CreaTuTienda />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="catalogo" element={<Catalogo />} />
          <Route path="login" element={<Login />} />
          <Route path="personalizador" element={<Personalizador />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
