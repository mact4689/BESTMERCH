import { Link } from 'react-router-dom';

export default function Mayoreo() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[614px] flex items-center px-8 py-20 overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-transparent to-transparent"></div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSsWGVhEtrqlSTVbpLq0xbce3sAU4rgENHNeqSGUKfbXBabr0U5SRoynAvSgcsO36arUInqFhXVzjo4mbRYI6_OpHop-6qvocpnPPlPlfqt_VUfCcRuZ9lPDmOyY2c5Ly8G_SwVpfhcPIL2bQauFjLJ0USQuAETvPEZuvrJU8alKFIWbh8VATezRTJSGnkhWOnJctECkKG2t0eH8ZGZCJfZQ83ysvwfLoUyxoEnfnFwAwV0bj41zzEZU-YhdQTV4tKhe5IZKXj9jPq" 
            alt="industrial textile printing facility" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl">
          <div className="w-16 h-1 bg-primary-container mb-6"></div>
          <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
            COTIZADOR <br/><span className="text-primary-container">MAYOREO</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl font-light mb-10 leading-relaxed">
            Producción premium de alta fidelidad. Asesoría experta para marcas, eventos y empresas. El estándar del nuevo monolito digital.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary-container text-on-primary-fixed px-8 py-4 font-label font-bold text-lg tracking-widest uppercase flicker-effect hover:shadow-[0_0_15px_#00fbfb] transition-all">
              INICIAR COTIZACIÓN
            </button>
            <Link to="/catalogo" className="border border-secondary-fixed/40 text-secondary-fixed px-8 py-4 font-label font-bold text-lg tracking-widest uppercase hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all">
              VER CATÁLOGO
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-surface-container px-8 py-24 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            <div className="bg-surface-container-low p-8 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 text-primary-container/20 font-headline text-6xl font-black group-hover:text-primary-container transition-colors">01</div>
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">verified_user</span>
              <h3 className="font-headline text-xl font-bold mb-3 tracking-tight">Calidad garantizada</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Inspección de calidad punto a punto. Si no es perfecto, no se entrega.</p>
            </div>
            <div className="bg-surface-container-low p-8 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 text-primary-container/20 font-headline text-6xl font-black group-hover:text-primary-container transition-colors">02</div>
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">bolt</span>
              <h3 className="font-headline text-xl font-bold mb-3 tracking-tight">Envío express</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Logística optimizada para entregas en tiempo récord a todo México.</p>
            </div>
            <div className="bg-surface-container-low p-8 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 text-primary-container/20 font-headline text-6xl font-black group-hover:text-primary-container transition-colors">03</div>
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">palette</span>
              <h3 className="font-headline text-xl font-bold mb-3 tracking-tight">Sin límite de colores</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Impresión DTG y DTF de alta resolución sin restricciones cromáticas.</p>
            </div>
            <div className="bg-surface-container-low p-8 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 text-primary-container/20 font-headline text-6xl font-black group-hover:text-primary-container transition-colors">04</div>
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">auto_awesome</span>
              <h3 className="font-headline text-xl font-bold mb-3 tracking-tight">Pedidos personalizados</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Desarrollamos moldes y acabados especiales según tus necesidades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-surface px-8 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter mb-4">¿CÓMO HACER TU <span className="text-secondary-container">PEDIDO?</span></h2>
              <div className="h-1 w-32 bg-secondary-container"></div>
            </div>
            <div className="text-right hidden md:block">
              <span className="font-label text-on-surface-variant tracking-[0.3em] uppercase text-sm">Protocolo de Operación</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="relative">
              <div className="bg-surface-container-low p-10 border-l-4 border-primary-container h-full">
                <div className="font-headline text-5xl font-black text-on-surface/10 mb-4">1</div>
                <h4 className="font-headline font-bold text-xl mb-4 text-primary-container">CONTÁCTANOS</h4>
                <p className="text-on-surface-variant font-light">Llena el formulario o envíanos un mensaje directo con tu idea inicial.</p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-surface-container-low p-10 border-l-4 border-secondary-container h-full">
                <div className="font-headline text-5xl font-black text-on-surface/10 mb-4">2</div>
                <h4 className="font-headline font-bold text-xl mb-4 text-secondary-container">ELIGE PRODUCTOS</h4>
                <p className="text-on-surface-variant font-light">Selecciona entre nuestras prendas premium y técnicas de impresión.</p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-surface-container-low p-10 border-l-4 border-primary-container h-full">
                <div className="font-headline text-5xl font-black text-on-surface/10 mb-4">3</div>
                <h4 className="font-headline font-bold text-xl mb-4 text-primary-container">PRODUCIMOS</h4>
                <p className="text-on-surface-variant font-light">Iniciamos la manufactura con los más altos estándares tecnológicos.</p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-surface-container-low p-10 border-l-4 border-secondary-container h-full">
                <div className="font-headline text-5xl font-black text-on-surface/10 mb-4">4</div>
                <h4 className="font-headline font-bold text-xl mb-4 text-secondary-container">ENVIAMOS</h4>
                <p className="text-on-surface-variant font-light">Recibe tu mercancía en la puerta de tu negocio o almacén.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quotation Form */}
      <section className="bg-surface-container-lowest px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="bg-surface p-1 md:p-12 shadow-[0_0_60px_-15px_rgba(0,251,251,0.15)]">
            <div className="mb-12">
              <h2 className="font-headline text-3xl font-black mb-2 uppercase">Configuración de Proyecto</h2>
              <p className="text-on-surface-variant">Completa los detalles técnicos para recibir una cotización formal en menos de 24 horas.</p>
            </div>
            <form className="space-y-12">
              {/* Step 1: Producto */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-primary-container text-on-primary-fixed w-8 h-8 flex items-center justify-center font-bold">01</span>
                  <h3 className="font-headline font-bold uppercase tracking-widest text-primary-container">Producto & Técnica</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant">Tipo de Prenda</label>
                    <select className="w-full bg-surface-container-highest border-0 focus:ring-2 focus:ring-primary-container text-on-surface py-4 px-4 font-label outline-none">
                      <option>Playera Oversize (Premium)</option>
                      <option>Hoodie Heavyweight</option>
                      <option>Tote Bag Canvas</option>
                      <option>Gorra Trucker</option>
                      <option>Custom Spec (Especificar)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant">Técnica de Impresión</label>
                    <select className="w-full bg-surface-container-highest border-0 focus:ring-2 focus:ring-primary-container text-on-surface py-4 px-4 font-label outline-none">
                      <option>Serigrafía Textil</option>
                      <option>DTF Alta Definición</option>
                      <option>Bordado Computarizado</option>
                      <option>Sublimación Full Print</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 2: Volumen */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-secondary-container text-on-secondary-fixed w-8 h-8 flex items-center justify-center font-bold">02</span>
                  <h3 className="font-headline font-bold uppercase tracking-widest text-secondary-container">Volumen & Diseño</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant">Cantidad Total</label>
                    <input type="number" placeholder="Ej: 50" className="w-full bg-surface-container-highest border-0 focus:ring-2 focus:ring-primary-container text-on-surface py-4 px-4 font-label outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant">Número de Colores</label>
                    <input type="number" placeholder="1-12" className="w-full bg-surface-container-highest border-0 focus:ring-2 focus:ring-primary-container text-on-surface py-4 px-4 font-label outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant">Fecha Requerida</label>
                    <input type="date" className="w-full bg-surface-container-highest border-0 focus:ring-2 focus:ring-primary-container text-on-surface py-4 px-4 font-label outline-none" />
                  </div>
                </div>
              </div>

              {/* Step 3: Contacto */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-primary-container text-on-primary-fixed w-8 h-8 flex items-center justify-center font-bold">03</span>
                  <h3 className="font-headline font-bold uppercase tracking-widest text-primary-container">Información de Contacto</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant">Nombre Completo / Empresa</label>
                    <input type="text" className="w-full bg-surface-container-highest border-0 focus:ring-2 focus:ring-primary-container text-on-surface py-4 px-4 font-label outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant">WhatsApp / Teléfono</label>
                    <input type="tel" className="w-full bg-surface-container-highest border-0 focus:ring-2 focus:ring-primary-container text-on-surface py-4 px-4 font-label outline-none" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant">Email Corporativo</label>
                    <input type="email" className="w-full bg-surface-container-highest border-0 focus:ring-2 focus:ring-primary-container text-on-surface py-4 px-4 font-label outline-none" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant">Notas Adicionales</label>
                    <textarea rows={4} className="w-full bg-surface-container-highest border-0 focus:ring-2 focus:ring-primary-container text-on-surface py-4 px-4 font-label outline-none"></textarea>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button type="button" className="w-full bg-primary-container text-on-primary-fixed font-headline font-black text-2xl py-6 tracking-tighter hover:bg-[#00e5e5] transition-colors uppercase flicker-effect">
                  Enviar Solicitud de Mayoreo
                </button>
                <p className="text-center text-[10px] text-on-surface-variant mt-4 font-label tracking-widest uppercase">
                  Al enviar aceptas nuestra política de privacidad y términos de producción mayorista.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 bg-secondary-container">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-on-secondary-fixed">
            <h2 className="font-headline text-5xl font-black leading-none mb-4 uppercase">¿Necesitas ayuda inmediata?</h2>
            <p className="text-xl font-medium">Habla directamente con un asesor de producción vía WhatsApp.</p>
          </div>
          <button className="bg-black text-white px-12 py-6 font-headline font-black text-xl hover:scale-105 transition-transform flex items-center gap-3">
            <span className="material-symbols-outlined">chat_bubble</span>
            CHATEAR AHORA
          </button>
        </div>
      </section>
    </div>
  );
}
