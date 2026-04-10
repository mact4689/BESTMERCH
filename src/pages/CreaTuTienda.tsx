import { Link } from 'react-router-dom';

export default function CreaTuTienda() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvFedRi-61GBw0A3ga13S6dAml0YZX7WcQ1jPaS9At1v51KU8p6fOqxHTLA9bQyxas_EN66i25i0--1-Oth-63tXNPSBMMSe7hJ8RnwL_kGdK1p_T2sK3K2QFK3nSoYpI9BaePgbSz54myvAHJSHA4kzuRH2oN615WIvspZKEorFZ5GPHRgpzMd5bCuSNFQOW99lzyoIf00yMpMhtgP_C5ICJNeGXf-B2ACnc7HbR31QLW6LMsTeu5DWnAJSgrtdKj3l5YN_m4LEL1" 
            alt="futuristic digital workspace" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center gap-6">
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-secondary-container"></span>
              <span className="font-headline font-bold tracking-[0.3em] text-secondary-container text-sm">DROP ACTUAL: STORE BUILDER</span>
            </div>
            <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
              CREA Y VENDE TU <span className="text-primary-container neon-glow-blue">PROPIA MARCA</span> DE ROPA
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl font-light leading-relaxed">
              Potencia tu creatividad con Print on Demand. Olvídate del inventario, la producción y los envíos. Nosotros nos encargamos de todo mientras tú construyes tu imperio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="px-10 py-5 bg-primary-container text-on-primary-fixed font-headline font-bold text-lg active:scale-95 transition-all hover:shadow-[0_0_20px_rgba(0,251,251,0.2)]">
                EMPEZAR AHORA
              </button>
              <button className="px-10 py-5 border-2 border-secondary-fixed/40 text-secondary-fixed font-headline font-bold text-lg hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all">
                VER DEMO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-outline-variant/20 border border-outline-variant/20">
            <div className="bg-surface p-12 hover:bg-surface-container-low transition-colors group">
              <span className="material-symbols-outlined text-primary-fixed text-4xl mb-6 block group-hover:scale-110 transition-transform">inventory_2</span>
              <h3 className="font-headline text-2xl font-bold text-white mb-4">Sin inventarios</h3>
              <p className="text-on-surface-variant">No necesitas stock físico. Solo subes tus diseños y nosotros producimos bajo demanda.</p>
            </div>
            <div className="bg-surface p-12 hover:bg-surface-container-low transition-colors group">
              <span className="material-symbols-outlined text-primary-fixed text-4xl mb-6 block group-hover:scale-110 transition-transform">payments</span>
              <h3 className="font-headline text-2xl font-bold text-white mb-4">Sin inversión</h3>
              <p className="text-on-surface-variant">Inicia tu negocio con costo inicial cero. El riesgo es cosa del pasado.</p>
            </div>
            <div className="bg-surface p-12 hover:bg-surface-container-low transition-colors group">
              <span className="material-symbols-outlined text-primary-fixed text-4xl mb-6 block group-hover:scale-110 transition-transform">local_shipping</span>
              <h3 className="font-headline text-2xl font-bold text-white mb-4">Envíos a todo el país</h3>
              <p className="text-on-surface-variant">Llegamos a cada rincón de México con logística de alta velocidad.</p>
            </div>
            <div className="bg-surface p-12 hover:bg-surface-container-low transition-colors group">
              <span className="material-symbols-outlined text-primary-fixed text-4xl mb-6 block group-hover:scale-110 transition-transform">sell</span>
              <h3 className="font-headline text-2xl font-bold text-white mb-4">Tú fijas tus precios</h3>
              <p className="text-on-surface-variant">Control total sobre tus márgenes de ganancia. Tú decides cuánto ganar.</p>
            </div>
            <div className="bg-surface p-12 hover:bg-surface-container-low transition-colors group">
              <span className="material-symbols-outlined text-primary-fixed text-4xl mb-6 block group-hover:scale-110 transition-transform">looks_one</span>
              <h3 className="font-headline text-2xl font-bold text-white mb-4">Pedidos desde 1 pieza</h3>
              <p className="text-on-surface-variant">Sin mínimos de compra. Ideal para nichos específicos y lanzamientos limitados.</p>
            </div>
            <div className="bg-surface p-12 hover:bg-surface-container-low transition-colors group">
              <span className="material-symbols-outlined text-primary-fixed text-4xl mb-6 block group-hover:scale-110 transition-transform">palette</span>
              <h3 className="font-headline text-2xl font-bold text-white mb-4">Sin límite de tintas</h3>
              <p className="text-on-surface-variant">Calidad de impresión premium sin restricciones cromáticas en tus diseños.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Memberships Section */}
      <section className="py-24 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/5 blur-[120px]"></div>
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-5xl font-black text-white mb-4 tracking-tighter">PLANES DE MEMBRESÍA</h2>
            <p className="text-primary-fixed font-headline font-bold tracking-widest uppercase">Prueba gratis por 30 días</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-surface-container-low p-10 flex flex-col relative border-t-4 border-white/10">
              <h4 className="font-headline text-xl font-bold text-white/60 mb-2 uppercase">Mensual</h4>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-headline font-black text-white">$500</span>
                <span className="text-on-surface-variant font-bold">MXN / mes</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-on-surface">
                  <span className="material-symbols-outlined text-primary-fixed text-sm">check_circle</span> Plataforma de diseño
                </li>
                <li className="flex items-center gap-3 text-on-surface">
                  <span className="material-symbols-outlined text-primary-fixed text-sm">check_circle</span> Productos ilimitados
                </li>
                <li className="flex items-center gap-3 text-on-surface">
                  <span className="material-symbols-outlined text-primary-fixed text-sm">check_circle</span> Pasarelas de pago
                </li>
                <li className="flex items-center gap-3 text-on-surface">
                  <span className="material-symbols-outlined text-primary-fixed text-sm">check_circle</span> Envíos nacionales
                </li>
              </ul>
              <button className="w-full py-4 border-2 border-white/20 text-white font-headline font-bold hover:bg-white hover:text-background transition-all">
                SELECCIONAR PLAN
              </button>
            </div>
            <div className="bg-surface-container-low p-10 flex flex-col relative border-t-4 border-primary-container overflow-hidden">
              <div className="absolute top-8 right-[-35px] bg-secondary-container text-on-secondary-fixed font-headline font-bold text-[10px] py-1 px-10 rotate-45 tracking-widest shadow-lg">
                1 MES GRATIS
              </div>
              <h4 className="font-headline text-xl font-bold text-primary-fixed mb-2 uppercase">Anual</h4>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-headline font-black text-white">$5,500</span>
                <span className="text-on-surface-variant font-bold">MXN / año</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-on-surface">
                  <span className="material-symbols-outlined text-primary-fixed text-sm">check_circle</span> Todo lo del plan mensual
                </li>
                <li className="flex items-center gap-3 text-on-surface font-bold text-white">
                  <span className="material-symbols-outlined text-primary-fixed text-sm">verified</span> Dominio propio incluido
                </li>
                <li className="flex items-center gap-3 text-on-surface font-bold text-white">
                  <span className="material-symbols-outlined text-primary-fixed text-sm">verified</span> Sales Manager dedicado
                </li>
                <li className="flex items-center gap-3 text-on-surface">
                  <span className="material-symbols-outlined text-primary-fixed text-sm">check_circle</span> Soporte prioritario
                </li>
              </ul>
              <button className="w-full py-4 bg-primary-container text-on-primary-fixed font-headline font-bold hover:shadow-[0_0_20px_rgba(0,251,251,0.2)] transition-all">
                RECLAMAR 1 MES GRATIS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-headline text-5xl font-black text-white mb-6 leading-tight">¿LISTO PARA EL SIGUIENTE NIVEL?</h2>
              <p className="text-on-surface-variant text-lg mb-8">Déjanos tus datos y un especialista se pondrá en contacto contigo para configurar tu tienda hoy mismo.</p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-primary-fixed">
                  <span className="material-symbols-outlined">support_agent</span>
                  <span className="font-headline font-bold">Soporte técnico 24/7</span>
                </div>
                <div className="flex items-center gap-4 text-secondary-fixed">
                  <span className="material-symbols-outlined">rocket_launch</span>
                  <span className="font-headline font-bold">Activación inmediata</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-high p-8">
              <form className="space-y-6">
                <div>
                  <label className="block font-headline text-xs font-bold text-white/50 uppercase mb-2 tracking-widest">Nombre Completo</label>
                  <input type="text" placeholder="Tu nombre" className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary-container text-white py-4 px-4 font-body outline-none" />
                </div>
                <div>
                  <label className="block font-headline text-xs font-bold text-white/50 uppercase mb-2 tracking-widest">WhatsApp</label>
                  <input type="tel" placeholder="+52 ..." className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary-container text-white py-4 px-4 font-body outline-none" />
                </div>
                <div>
                  <label className="block font-headline text-xs font-bold text-white/50 uppercase mb-2 tracking-widest">Email</label>
                  <input type="email" placeholder="correo@ejemplo.com" className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary-container text-white py-4 px-4 font-body outline-none" />
                </div>
                <div>
                  <label className="block font-headline text-xs font-bold text-white/50 uppercase mb-2 tracking-widest">Comentarios</label>
                  <textarea placeholder="Cuéntanos sobre tu proyecto..." className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary-container text-white py-4 px-4 font-body h-32 resize-none outline-none"></textarea>
                </div>
                <button type="button" className="w-full py-5 bg-primary-container text-on-primary-fixed font-headline font-black text-lg hover:shadow-[0_0_20px_rgba(0,251,251,0.2)] active:scale-95 transition-all">
                  ENVIAR
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="container mx-auto px-8 max-w-3xl">
          <h2 className="font-headline text-4xl font-black text-white mb-12 text-center">PREGUNTAS FRECUENTES</h2>
          <div className="space-y-4">
            <details className="group bg-surface-container border border-outline-variant/10 p-6">
              <summary className="list-none flex justify-between items-center cursor-pointer">
                <h4 className="font-headline font-bold text-white">¿Cómo recibo mis ganancias?</h4>
                <span className="material-symbols-outlined text-primary-fixed group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="mt-4 text-on-surface-variant font-light leading-relaxed">
                Tus ganancias se acumulan en tu panel y se transfieren automáticamente a tu cuenta bancaria o PayPal cada 15 días. Tú controlas el precio de venta y nosotros solo cobramos el costo base de producción.
              </div>
            </details>
            <details className="group bg-surface-container border border-outline-variant/10 p-6">
              <summary className="list-none flex justify-between items-center cursor-pointer">
                <h4 className="font-headline font-bold text-white">¿Qué productos puedo vender?</h4>
                <span className="material-symbols-outlined text-primary-fixed group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="mt-4 text-on-surface-variant font-light leading-relaxed">
                Contamos con un amplio catálogo que incluye camisetas, hoodies, tote bags, gorras y más. Todos con calidad de exportación y listos para ser personalizados con tus diseños.
              </div>
            </details>
            <details className="group bg-surface-container border border-outline-variant/10 p-6">
              <summary className="list-none flex justify-between items-center cursor-pointer">
                <h4 className="font-headline font-bold text-white">¿Quién se encarga de las devoluciones?</h4>
                <span className="material-symbols-outlined text-primary-fixed group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="mt-4 text-on-surface-variant font-light relaxed">
                Nosotros gestionamos cualquier tema de garantía por defectos de fabricación o errores en el envío, asegurando que tu cliente final siempre esté satisfecho sin que tú tengas que mover un dedo.
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
