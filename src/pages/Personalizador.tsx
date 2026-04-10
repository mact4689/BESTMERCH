import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Personalizador() {
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeView, setActiveView] = useState('FRENTE');

  const colors = [
    { hex: '#000000', name: 'Negro' },
    { hex: '#ffffff', name: 'Blanco' },
    { hex: '#ff0000', name: 'Rojo' },
    { hex: '#0000ff', name: 'Azul' },
  ];

  const sizes = ['S', 'M', 'L', 'XL'];

  const views = [
    { id: 'FRENTE', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmuOC6dexEWRhVED9JtkSmGjdLDH_NcSpRnR8HnAvrA4rWluzVeYt-o6bJSkzVuPKb9sge-9MMdcEijIaHzKsd0SFTIiI8YWJ6WZ-IQmSsGjv_IKCgR4-zP77bnY3MvUqfY_erdTd12papG2qxUlCd8LneuDGtq93FjwW_eQ4esdiwSlYM2MlWib0-dDrNSwgzD9cqd4IRvNpSW85rmdZDQH5PGQcYslfhvJGX71_RjE4MWLlvIXu2b9bLMEwxlMqMoXQBU0vGkLvY' },
    { id: 'ESPALDA', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdDKD79IadxUiRDusXmuBVJWWP58vsfy3T5wkqTW1fw3AOWSYsnvi7l53PEgoWPVc_JBhYe_ktlovmS32YYozKz4PHXHje2EU4BnZrj8d08MTGD-mJUSqnYghKCCAKKWt8OkEnvJc63GHtSRTzKtvcJFI8QiCt6LM7ISWOLBnyBhO7hNBshtWo68ZOO6bobVEuBgCP8_KRy4RZ4unrQ9pOKuzlhWVQqrtWaDZ5jlbp8l65tmiamckvUn_x5-vNLRw9ly8J5lgb8vVZ', flip: true },
    { id: 'MANGA DER.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKoEfCAtajzavfDN7aty6oSmLvPp6d3e4wc4B1M8AH0MDCaABdWzC9ne1HidxVQgFLMyQM0Ejxl2DOCFMB7GVPwIRCqcCuLw8-C6XUCMATupQjAlOHxUjg9hNuPjsyKRGV8aXcYAR1nIX_jzi0sA1U2JFTdeBaaaJn5hlhL09dkVRnMsCAJ_wxhSIF1xBqWXqlshaAjP4iXcXYE6vbettNcYT97SujPjskLERRap6amgrYKJ7qAf-eVxoqPI-0c21xg6yXZzxKQd2K', rotate: '-rotate-90' },
    { id: 'MANGA IZQ.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI_PgnlDyrouaudLRY6Ml6CodqTteeAC7fiwo9ui7fv5zjhr6JTqDb01g7INTtX54cJfHIgr6Zc97tQKryQDaerYtWTrwqlInooCCYeeXrz-6M0exSFHEXEarP1eyq41Wh_qZZvum4dvpojcP8ZT9MzIy8eqgKNc8be2ze03-HWWNypc2Y95gVXgK02YuKtxzWd0wz8xpRlRMxr_S4PEfSOh_LG-kxnZ70AXHyGj9j_pgbk-gaGKlPiIz2dtQukw8NBhH8AZg3j6xw', rotate: 'rotate-90' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background pt-20">
      <div className="flex flex-col md:flex-row flex-1">
        {/* Left Sidebar: Tool panels */}
        <aside className="w-full md:w-80 bg-surface-container-lowest border-r border-outline-variant/20 z-40 flex flex-col">
          <div className="p-6 space-y-4 overflow-y-auto hide-scrollbar flex-1">
            <h2 className="font-headline text-lg font-bold tracking-tight text-primary-container mb-6">HERRAMIENTAS</h2>
            
            <button className="w-full flex items-center p-4 bg-surface-container-low hover:bg-surface-container-high transition-all group border-l-2 border-primary-container neon-glow-blue">
              <span className="material-symbols-outlined mr-4 text-primary-container">apparel</span>
              <span className="font-headline font-bold text-xs tracking-widest uppercase text-white">PRODUCTO</span>
            </button>
            <button className="w-full flex items-center p-4 bg-surface-container-low hover:bg-surface-container-high transition-all group border-l-2 border-transparent">
              <span className="material-symbols-outlined mr-4 group-hover:text-primary-container transition-colors">text_fields</span>
              <span className="font-headline font-bold text-xs tracking-widest uppercase">AGREGAR TEXTO</span>
            </button>
            <button className="w-full flex items-center p-4 bg-surface-container-low hover:bg-surface-container-high transition-all group border-l-2 border-transparent">
              <span className="material-symbols-outlined mr-4 group-hover:text-primary-container transition-colors">upload_file</span>
              <span className="font-headline font-bold text-xs tracking-widest uppercase">AGREGAR DISEÑO</span>
            </button>
            <button className="w-full flex items-center p-4 bg-surface-container-low hover:bg-surface-container-high transition-all group border-l-2 border-transparent">
              <span className="material-symbols-outlined mr-4 group-hover:text-primary-container transition-colors">list_alt</span>
              <span className="font-headline font-bold text-xs tracking-widest uppercase">LISTA DE NOMBRES</span>
            </button>

            <div className="mt-8 pt-8 border-t border-outline-variant/20">
              <h3 className="font-headline text-[10px] font-black tracking-widest text-on-surface-variant uppercase mb-4">COLOR DEL PRODUCTO</h3>
              <div className="grid grid-cols-4 gap-2">
                {colors.map((color) => (
                  <button
                    key={color.hex}
                    onClick={() => setSelectedColor(color.hex)}
                    className={`aspect-square border transition-all ${
                      selectedColor === color.hex 
                        ? 'border-primary-container ring-1 ring-primary-container ring-offset-2 ring-offset-background' 
                        : 'border-outline-variant/20 hover:border-primary-container/50'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={`Color ${color.name}`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="font-headline text-[10px] font-black tracking-widest text-on-surface-variant uppercase">TALLA</h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-2 border text-xs font-bold transition-all ${
                      selectedSize === size
                        ? 'border-primary-container bg-primary-container/10 text-primary-container'
                        : 'border-outline-variant/20 hover:border-primary-container text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Center Area: Real-time Preview */}
        <section className="flex-1 bg-surface relative flex flex-col items-center justify-center p-8 overflow-hidden min-h-[600px]">
          {/* Background Aura */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-container/5 blur-[160px]"></div>
          </div>

          {/* Canvas Header */}
          <div className="absolute top-8 left-8 right-8 flex justify-between items-start pointer-events-none z-10">
            <div className="pointer-events-auto">
              <span className="font-headline text-[10px] font-black tracking-[0.2em] text-primary-container/60 block mb-1 uppercase">ESTADO DEL LIENZO</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-container animate-pulse"></div>
                <span className="font-headline text-xs font-bold uppercase tracking-tight text-white">VISTA PREVIA ACTIVA</span>
              </div>
            </div>
            <div className="flex space-x-4 pointer-events-auto">
              <button className="p-2 bg-surface-container-low border border-outline-variant/10 hover:bg-surface-container-high transition-all text-white">
                <span className="material-symbols-outlined text-sm">zoom_in</span>
              </button>
              <button className="p-2 bg-surface-container-low border border-outline-variant/10 hover:bg-surface-container-high transition-all text-white">
                <span className="material-symbols-outlined text-sm">undo</span>
              </button>
              <button className="p-2 bg-surface-container-low border border-outline-variant/10 hover:bg-surface-container-high transition-all text-white">
                <span className="material-symbols-outlined text-sm">redo</span>
              </button>
            </div>
          </div>

          {/* Main Product Image with Guides */}
          <div className="relative w-full max-w-lg aspect-[4/5] flex items-center justify-center">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4w1l8j8HRtBEncV3xKtWZj1Om3fmiIxn_q2BDhlX0Not6QLHXtvXxaB2hHGMdVEgPgfk41mf7vigTgtFzj2B-kgxzyI4DzOhwgI120nkRnrQo7ptEzZ2HxSZtZKKXRHcEjpw3wXVUfMzcyf79yDKe5Z0DAMiV3ciq6UDT5v2NmYMjpfS-5VQaHRx-6xNUOc04ua_azf9fjNywo0HjpJbXzySZABKERaKKy6MdGeOs1iZm2Qrfo3Jin3ztLuuyEhQlZ-3g_9kr91Mg" 
              alt="Mockup de playera" 
              className="w-full h-full object-contain mix-blend-lighten"
              referrerPolicy="no-referrer"
            />
            {/* Placement Guide Box (A3 Center) */}
            <div className="absolute top-[18%] left-[22%] right-[22%] bottom-[25%] border-2 border-dotted border-primary-container/60 pointer-events-none group">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-headline text-[9px] font-black text-primary-container tracking-[0.2em] uppercase whitespace-nowrap">ÁREA DE IMPRESIÓN (A3)</span>
              {/* Top Pocket-sized guides */}
              <div className="absolute top-2 left-2 w-16 h-16 border border-dotted border-primary-container/30"></div>
              <div className="absolute top-2 right-2 w-16 h-16 border border-dotted border-primary-container/30"></div>
            </div>
            {/* Lower guide markers */}
            <div className="absolute bottom-[10%] left-[22%] w-16 h-16 border border-dotted border-primary-container/30 pointer-events-none"></div>
            <div className="absolute bottom-[10%] right-[22%] w-16 h-16 border border-dotted border-primary-container/30 pointer-events-none"></div>
          </div>

          {/* Cyber-Strip Decorative */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-container/30 to-transparent"></div>
        </section>

        {/* Right Sidebar: Product Views & Checkout */}
        <aside className="w-full md:w-80 bg-surface-container-lowest border-l border-outline-variant/20 flex flex-col">
          <div className="p-6 flex-1 space-y-8 overflow-y-auto hide-scrollbar">
            <div>
              <h3 className="font-headline text-[10px] font-black tracking-widest text-on-surface-variant uppercase mb-4">VISTAS DEL PRODUCTO</h3>
              <div className="grid grid-cols-2 gap-3">
                {views.map((view) => (
                  <button 
                    key={view.id}
                    onClick={() => setActiveView(view.id)}
                    className={`flex flex-col items-center group ${activeView === view.id ? '' : 'opacity-60 hover:opacity-100'}`}
                  >
                    <div className={`aspect-square w-full bg-surface-container-low p-2 overflow-hidden transition-all ${
                      activeView === view.id ? 'border-2 border-primary-container' : 'border border-outline-variant/20'
                    }`}>
                      <img 
                        src={view.img} 
                        alt={view.id} 
                        className={`w-full h-full object-contain grayscale group-hover:grayscale-0 ${view.flip ? 'scale-x-[-1]' : ''} ${view.rotate || ''}`}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className={`mt-1 text-[8px] font-bold ${activeView === view.id ? 'text-primary-container' : 'text-white'}`}>{view.id}</span>
                  </button>
                ))}
                <button className="flex flex-col items-center group opacity-60 hover:opacity-100">
                  <div className="aspect-square w-full bg-surface-container-low border border-outline-variant/20 p-2 overflow-hidden transition-all flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl opacity-40 text-white">label</span>
                  </div>
                  <span className="mt-1 text-[8px] font-bold text-white">ETIQUETA</span>
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-headline text-[10px] font-black tracking-widest text-on-surface-variant uppercase">RESUMEN DE PRECIOS</h3>
              <div className="bg-surface-container p-4 border border-outline-variant/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-on-surface-variant uppercase tracking-tighter">PLAYERA ALGODÓN</span>
                  <span className="text-xs font-bold text-white">$265.00 MXN</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs text-on-surface-variant uppercase tracking-tighter">PERSONALIZACIÓN</span>
                  <span className="text-xs font-bold text-primary-container">+$0.00 MXN</span>
                </div>
                <div className="pt-4 border-t border-outline-variant/20 flex justify-between items-end">
                  <span className="font-headline text-xs font-bold uppercase tracking-widest text-white">TOTAL</span>
                  <span className="font-headline text-2xl font-black text-white">$265.00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-surface-container-low border-t border-outline-variant/20">
            <button className="w-full py-4 bg-secondary-container text-[#131313] font-headline font-black text-sm tracking-[0.2em] uppercase neon-glow-yellow transition-all active:scale-[0.98] hover:brightness-110 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-xl">shopping_cart</span>
              COMPRAR AHORA
            </button>
          </div>
        </aside>
      </div>

      {/* Bottom Bar: Notes & Specs */}
      <div className="bg-surface-container-lowest border-t border-outline-variant/20 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 lg:col-span-2">
              <h4 className="font-headline text-sm font-black text-secondary-container tracking-widest uppercase mb-4">NOTAS PARA NUESTROS CLIENTES</h4>
              <div className="space-y-4 font-body text-xs text-on-surface-variant leading-relaxed">
                <p className="flex items-start">
                  <span className="material-symbols-outlined text-[16px] mr-3 text-primary-container">verified</span>
                  <span><strong>ESPECIFICACIONES PARA SUBIR TU DISEÑO:</strong> Formato PNG con fondo transparente - Resolución: Mínimo 300 DPI para una impresión nítida.</span>
                </p>
                <p className="flex items-start">
                  <span className="material-symbols-outlined text-[16px] mr-3 text-primary-container">tips_and_updates</span>
                  <span><strong>TIP:</strong> Revisa que el diseño esté limpio y sin bordes innecesarios. ¡Así garantizas un resultado perfecto!</span>
                </p>
                <p className="flex items-start">
                  <span className="material-symbols-outlined text-[16px] mr-3 text-primary-container">warning</span>
                  <span>El tono de los colores puede variar ligeramente debido a la calibración de pantalla y el proceso físico de impresión digital.</span>
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-headline text-sm font-black text-white tracking-widest uppercase mb-4">ESPECIFICACIONES</h4>
              <ul className="text-[10px] space-y-3 text-on-surface-variant font-headline uppercase font-bold">
                <li className="flex justify-between border-b border-outline-variant/10 pb-1">
                  <span>TIPO:</span>
                  <span className="text-white">DTF PREMIUM ALTA GAMA</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/10 pb-1">
                  <span>MATERIAL:</span>
                  <span className="text-white">ALGODÓN 100% ESTÁNDAR</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/10 pb-1">
                  <span>TIEMPO:</span>
                  <span className="text-white">3-5 DÍAS HÁBILES</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-end">
              <div className="text-[10px] font-headline font-black text-primary-container mb-2 tracking-widest uppercase">BESTMERCHMX DIGITAL. HIGH-VOLTAGE GEAR.</div>
              <div className="text-[9px] text-on-surface-variant uppercase tracking-tighter opacity-50">© 2024 BESTMERCHMX ALL RIGHTS RESERVED</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
