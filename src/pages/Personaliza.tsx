import { Link } from 'react-router-dom';

export default function Personaliza() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzIrP3m-cGa76pTHF5WG5tqYVlu8mzv-LTSIdFFYsx_hlcJ15e62sakOXZK6dFZtrZRRzExG1dIo05IPIARGIgXRNlfgPZBhupuwUhaMUwUpbYrfnXwkf1ugem3BcRq3yMAw4TKM4e8-s3AUODFJ_s7N-LevHCINS78vEa2NQ0gOb1a1RiRnzc-FJILYndUDH8ZH9qzemEyiLRYdf56Y5Ngi5uH9F2lwGQ7SJaMNWACfDGqgnJPQsbfq9I3vK5Z25N4SymFuKTMhG8" 
            alt="Custom Apparel Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e]/40 to-[#0e0e0e]/90"></div>
          <div className="absolute inset-0 bg-primary-container/10 mix-blend-overlay"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter uppercase text-white neon-glow-blue font-headline">
            ELIGE TU <span className="text-primary-container">LIENZO</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide mb-10 font-body">
            Selecciona el producto que quieres transformar en una obra maestra.
          </p>
          <a href="#categories" className="inline-block bg-primary-container text-on-primary-fixed px-10 py-4 font-bold text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 font-headline">
            Explorar Catálogo
          </a>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section id="categories" className="py-24 bg-surface-container-lowest">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Category Card: Playeras */}
            <Link to="/catalogo?category=playeras" className="group relative bg-[#1a1a1a] p-8 border border-gray-800 hover:border-primary-container hover:shadow-[0_0_10px_#00fbfb,0_0_20px_#00fbfb] transition-all duration-300 cursor-pointer flex flex-col items-center text-center">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-primary-container text-6xl">apparel</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight font-headline">Playeras</h3>
              <p className="text-gray-400 text-sm mb-6 font-body">Algodón premium para tus mejores diseños.</p>
              <span className="text-primary-container text-xs font-bold tracking-widest group-hover:underline font-label">VER CATÁLOGO →</span>
            </Link>
            {/* Category Card: Sudaderas */}
            <Link to="/catalogo?category=sudaderas" className="group relative bg-[#1a1a1a] p-8 border border-gray-800 hover:border-primary-container hover:shadow-[0_0_10px_#00fbfb,0_0_20px_#00fbfb] transition-all duration-300 cursor-pointer flex flex-col items-center text-center">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-primary-container text-6xl">dry_cleaning</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight font-headline">Sudaderas</h3>
              <p className="text-gray-400 text-sm mb-6 font-body">Comodidad y estilo en cada puntada.</p>
              <span className="text-primary-container text-xs font-bold tracking-widest group-hover:underline font-label">VER CATÁLOGO →</span>
            </Link>
            {/* Category Card: Gorras */}
            <Link to="/catalogo?category=gorras" className="group relative bg-[#1a1a1a] p-8 border border-gray-800 hover:border-primary-container hover:shadow-[0_0_10px_#00fbfb,0_0_20px_#00fbfb] transition-all duration-300 cursor-pointer flex flex-col items-center text-center">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-primary-container text-6xl">sports_baseball</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight font-headline">Gorras</h3>
              <p className="text-gray-400 text-sm mb-6 font-body">El accesorio final para tu marca personal.</p>
              <span className="text-primary-container text-xs font-bold tracking-widest group-hover:underline font-label">VER CATÁLOGO →</span>
            </Link>
            {/* Category Card: Tazas */}
            <Link to="/catalogo?category=tazas" className="group relative bg-[#1a1a1a] p-8 border border-gray-800 hover:border-primary-container hover:shadow-[0_0_10px_#00fbfb,0_0_20px_#00fbfb] transition-all duration-300 cursor-pointer flex flex-col items-center text-center">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-primary-container text-6xl">local_cafe</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight font-headline">Tazas</h3>
              <p className="text-gray-400 text-sm mb-6 font-body">Tus mañanas, ahora con más estilo.</p>
              <span className="text-primary-container text-xs font-bold tracking-widest group-hover:underline font-label">VER CATÁLOGO →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Wholesale Banner */}
      <section className="py-24 bg-surface-container-lowest border-t border-primary-container/10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 uppercase tracking-tighter text-white font-headline">
            ¿Por qué elegir <span className="text-primary-container neon-glow-blue">BestmerchMX</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
            <div className="flex flex-col items-center text-center p-6 bg-[#1a1a1a]/50 border border-gray-800 hover:border-primary-container/50 transition-colors group">
              <div className="mb-6 text-primary-container drop-shadow-[0_0_8px_rgba(0,251,251,0.6)] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-5xl">grid_view</span>
              </div>
              <h3 className="text-lg font-bold mb-3 uppercase tracking-tight text-white font-headline">Personaliza sin límites</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-body">Imprime fotos, frases o diseños originales.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-[#1a1a1a]/50 border border-gray-800 hover:border-primary-container/50 transition-colors group">
              <div className="mb-6 text-primary-container drop-shadow-[0_0_8px_rgba(0,251,251,0.6)] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-5xl">counter_1</span>
              </div>
              <h3 className="text-lg font-bold mb-3 uppercase tracking-tight text-white font-headline">Desde 1 pieza</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-body">Sin mínimo de compra.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-[#1a1a1a]/50 border border-gray-800 hover:border-primary-container/50 transition-colors group">
              <div className="mb-6 text-primary-container drop-shadow-[0_0_8px_rgba(0,251,251,0.6)] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-5xl">print</span>
              </div>
              <h3 className="text-lg font-bold mb-3 uppercase tracking-tight text-white font-headline">Variedad de impresión</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-body">Con la mejor calidad.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-[#1a1a1a]/50 border border-gray-800 hover:border-primary-container/50 transition-colors group">
              <div className="mb-6 text-primary-container drop-shadow-[0_0_8px_rgba(0,251,251,0.6)] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-5xl">palette</span>
              </div>
              <h3 className="text-lg font-bold mb-3 uppercase tracking-tight text-white font-headline">Colores ilimitados</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-body">Sin restricciones de diseño.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-[#1a1a1a]/50 border border-gray-800 hover:border-primary-container/50 transition-colors group">
              <div className="mb-6 text-primary-container drop-shadow-[0_0_8px_rgba(0,251,251,0.6)] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-5xl">local_shipping</span>
              </div>
              <h3 className="text-lg font-bold mb-3 uppercase tracking-tight text-white font-headline">Entrega en todo México</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-body">Estándar o Express.</p>
            </div>
          </div>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gray-300 mb-8 font-light font-body">
              Si buscas ropa personalizada, <span className="text-white font-medium">BestmerchMX</span> ofrece la mejor calidad en impresión sin mínimo de compra.
            </p>
            <Link to="/catalogo" className="inline-block bg-secondary-container text-on-secondary-fixed px-10 py-4 font-black uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 font-headline">
              ¡Personaliza Aquí!
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary-container py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-on-secondary-fixed mb-6 md:mb-0">
            <h2 className="text-3xl font-black uppercase tracking-tighter leading-none mb-2 font-headline">¿Requieres un pedido a mayoreo?</h2>
            <p className="text-on-secondary-fixed/70 font-medium font-body">Precios especiales a partir de 24 piezas. ¡Solicita tu cotización!</p>
          </div>
          <Link to="/mayoreo" className="bg-surface-container-lowest text-secondary-container px-8 py-4 font-bold uppercase tracking-widest hover:bg-surface-container-low transition-colors font-headline">
            Ver Más Info
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#1a1a1a] border-t border-primary-container/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 uppercase tracking-tighter font-headline">
            Preguntas <span className="text-primary-container">Frecuentes</span> (FAQ)
          </h2>
          <div className="space-y-10">
            <div className="border-l-4 border-primary-container pl-6 py-2">
              <h4 className="text-xl font-bold mb-3 uppercase tracking-tight font-headline">1. ¿Qué puedo personalizar en BestmerchMX?</h4>
              <p className="text-gray-400 leading-relaxed font-body">
                Puedes personalizar una amplia gama de productos: playeras, sudaderas, gorras, tazas y más. Solo necesitas subir tu diseño, elegir el producto y la talla. Ideal para regalos, eventos o proyectos personales. No hay mínimo de compra.
              </p>
            </div>
            <div className="border-l-4 border-primary-container pl-6 py-2">
              <h4 className="text-xl font-bold mb-3 uppercase tracking-tight font-headline">2. ¿Cómo funciona el proceso de personalización?</h4>
              <p className="text-gray-400 leading-relaxed font-body">
                Entra a nuestro personalizador online, elige tu lienzo, sube tu logo o foto, ajusta tamaños y colores, y añádelo al carrito. Utilizamos tecnología DTF y DTG para asegurar la máxima calidad y durabilidad en cada impresión.
              </p>
            </div>
            <div className="border-l-4 border-primary-container pl-6 py-2">
              <h4 className="text-xl font-bold mb-3 uppercase tracking-tight font-headline">3. ¿Hacen envíos a todo México?</h4>
              <p className="text-gray-400 leading-relaxed font-body">
                Sí, enviamos a cualquier parte de la República Mexicana. Contamos con opciones de envío estándar y express para que recibas tus productos justo cuando los necesitas.
              </p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <Link to="/catalogo" className="inline-block border-2 border-primary-container text-primary-container px-8 py-3 font-bold uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-fixed transition-all font-headline">
              Imprime productos personalizados
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
