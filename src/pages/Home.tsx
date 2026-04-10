import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[819px] flex items-center justify-center overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 opacity-70 flex items-center justify-center">
          <img 
            src="/hero-tshirt.jpg" 
            alt="Bestmerchmx T-shirt" 
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback in case the user hasn't uploaded the image yet
              e.currentTarget.src = "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1920&q=80";
              e.currentTarget.classList.add("grayscale", "brightness-50");
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1 mb-6 bg-primary-container text-on-primary-fixed font-headline text-xs font-bold tracking-[0.3em]">
            SISTEMA DE DESPLIEGUE ACTIVO
          </div>
          <h1 className="font-headline text-6xl md:text-8xl font-black text-white italic tracking-tighter leading-none mb-8">
            EXPLORA EL <span className="text-primary-container neon-glow-blue">CATÁLOGO</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface/80 max-w-2xl mx-auto mb-12 uppercase tracking-wide">
            Prendas de alta tecnología diseñadas para la cultura digital. Personalización sin límites para creadores y marcas.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/personaliza" className="bg-secondary-container text-on-secondary-fixed px-12 py-4 font-headline font-bold text-lg hover:shadow-[0_0_20px_#eaea00] transition-all active:scale-95">
              EMPIEZA A DISEÑAR
            </Link>
            <Link to="/catalogo" className="border-2 border-primary-container/40 text-primary-container px-12 py-4 font-headline font-bold text-lg hover:bg-primary-container hover:text-on-primary-fixed transition-all">
              VER RECIENTES
            </Link>
          </div>
        </div>
        {/* Decorative Cyber-Strip */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-24 bg-secondary-container"></div>
      </section>

      {/* Category Grid (Bento Style) */}
      <section className="py-24 px-8 max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="font-headline text-4xl font-bold text-white tracking-tight uppercase">Categorías Principales</h2>
            <div className="h-1 w-24 bg-primary-container mt-4"></div>
          </div>
          <p className="text-on-surface/50 font-label text-sm uppercase tracking-widest hidden md:block">01 // NAVEGACIÓN</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[800px]">
          {/* Playeras */}
          <Link to="/catalogo?category=playeras" className="md:col-span-2 md:row-span-2 group relative overflow-hidden bg-surface-container-low cursor-pointer">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACu_BlFwObkQl9AR407iL5Mp0hKiaZVNqm3YzijEBSCl96N0JR3RMYmf24Oc5rRXfIZgO69F3RFD6qFOtgj0u4G7TjikBLrmkXQrDsDx1t0HjecN3lFo_tyHraA-WVZQTBjVHGNxmk75Tv-GQSXutFwMo5vUzuXpj1j6lHXm2wh376pLwr4aHBAQsBZmr8teDQQPzJJMTqsjc4q2tMBowx8Okc50xU1Ad6hhcN0OrB37iVGWDbbBljcCZ0hzouzggFwE3Gov9ath7f" 
              alt="Playeras category" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-80"></div>
            <div className="absolute bottom-8 left-8">
              <span className="text-secondary-container font-headline text-sm font-bold tracking-widest block mb-2 underline decoration-2 underline-offset-4">TOP VENTAS</span>
              <h3 className="text-4xl font-headline font-black text-white italic">PLAYERAS</h3>
            </div>
          </Link>
          {/* Sudaderas */}
          <Link to="/catalogo?category=sudaderas" className="md:col-span-2 group relative overflow-hidden bg-surface-container-low cursor-pointer">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuABeQi7LjFUOi_Vk808WFnih-m_IOPx-Fxbt17Fj0Lk4pJ0dcPWp2GEmGhYlrP6_DNW4R0tHsOuWG99GoK-3cO9m99Nrn04Je-6fomjvsJfp8dZYPWQAPivfeUBspTKRi-9M-BYO3ryJ5V_4ucEx-uHPqMRDRTWhBdev1Tf3KY73zDcbZgxBN7WTSQg75swgX99-WLKevDugs7RQKi29yFbaBNelLshqXvSd0PVH2pyvZge_d8tGU4PTkX_oZCrDBTXespSsKIT00ru" 
              alt="Sudaderas category" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-80"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-3xl font-headline font-black text-white italic uppercase">SUDADERAS</h3>
            </div>
          </Link>
          {/* Accesorios */}
          <Link to="/catalogo?category=accesorios" className="group relative overflow-hidden bg-surface-container-low cursor-pointer">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYNM1Pt2j2YhWsliU8f1FYAAg4hGNuCY0HA3gXTpPw-AzfqcHgE-kBy2i-riN5Fsc6k8yKl1KjUA9l8xqBQwhG6deUvl7GiR913GL5Xh31tewmMIQjrVHmK3JdJngXvTzvWwqq-6EAtaajn6YJQzkn0rk4aqMLeMTWWt8bWsz5hkCpmb6ggwTQnRme_SWEugcUAzLohO72iQd9TppSvBvkAkD5Il4cwb3bDi_4SKM1avLQjF19xyZeDmrVY0zdgyrLtIt1ID36fsq8" 
              alt="Accesorios category" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-80"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-headline font-black text-white italic uppercase">ACCESORIOS</h3>
            </div>
          </Link>
          {/* Promociones */}
          <Link to="/mayoreo" className="group relative overflow-hidden border-2 border-primary-container/20 cursor-pointer">
            <div className="absolute inset-0 bg-primary-container/5 mix-blend-overlay"></div>
            <div className="h-full flex flex-col justify-between p-8">
              <div className="text-primary-container">
                <span className="text-5xl">⚡</span>
              </div>
              <div>
                <span className="text-white/50 font-label text-xs tracking-widest block mb-1">OFFER_042</span>
                <h3 className="text-3xl font-headline font-black text-primary-container italic uppercase leading-none">PROMOCIONES</h3>
                <p className="text-on-surface/70 mt-2 text-sm">DESCUENTOS EN MAYOREO</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Section (Horizontal Layout) */}
      <section className="relative h-[600px] flex items-center overflow-hidden border-y border-primary-container/20 group">
        <div className="absolute inset-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEp-v0wDTizbBf8GFh0o7cOjYopZJEPq82CHWCk5bMHWBTQjFSpCEK9brV20LKdVAtp9f37mQyaeCz6POcvGidgJIyAq-Dv6qPGCOLSVDs-RfCiMKZS1IiYvVN-atqJoFlOZntoKeFtqQQaeEVg2OwzatoZVWTFNhfi4HRq09v5f6MWxSTi6gBGNwmtwDhA0pKWDVrcKHcSra61gCUgsa5SFcImiZQURX33kB5u08qo5ZxTQy7JVIfeHTYaoUbxO1Xen7rgwyG2cPg" 
            alt="Envío Express Cyberpunk Banner" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-[2px] w-8 bg-secondary-container"></span>
              <span className="bg-black/80 text-secondary-container border border-secondary-container px-3 py-1 font-headline font-bold text-xs tracking-[0.2em] uppercase">Logística de Élite</span>
            </div>
            <h2 className="font-headline text-6xl md:text-8xl font-black italic tracking-tighter mb-6 leading-none">
              <span className="text-white">ENVÍO</span> <br/>
              <span className="text-primary-container neon-glow-blue">EXPRESS_</span>
            </h2>
            <p className="font-body text-xl text-white/80 mb-10 max-w-lg leading-relaxed border-l-2 border-primary-container pl-6">
              Tu visión no puede esperar. Implementamos logística de alta velocidad para que tus diseños lleguen a su destino en tiempo récord.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-32 overflow-hidden bg-primary-container">
        <div className="absolute inset-0 bg-noise pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <h2 className="font-headline text-5xl md:text-7xl font-black italic tracking-tighter text-on-primary-fixed mb-8">¿LISTO PARA EL SIGUIENTE DROP?</h2>
          <Link to="/personaliza" className="inline-block bg-black text-white px-16 py-6 font-headline font-bold text-2xl hover:bg-surface-container-highest transition-colors active:scale-95 shadow-xl">
            EMPIEZA A DISEÑAR AHORA
          </Link>
        </div>
      </section>
    </div>
  );
}
