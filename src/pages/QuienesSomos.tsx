import { Link } from 'react-router-dom';

export default function QuienesSomos() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[819px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3UnD6Kf8vIUrthtIG07J89aCnzFI_JEbZPss7Ky2-gxzQJlOhEFF0MAHZS8y5wjDBLFFomlHa-xxJdFdSDo3nLvwoPoXwmoLkm3c5X6q68ICWd_dtJapMDPip46_rPQEJ-ZPRSjrAd16vu_Wcuqrpnbhzxwt3eiBPjL1wKGrA74XHeuPT1L0iTKCW1k5onECBaS5r0cl64YklIjmdeFuYJO8UbBbLodRk2O3aWSYmBIUBHMP3Biftta3Ub9Qg45HE2xCEDcKltWxM" 
            alt="Manufacturing process" 
            className="w-full h-full object-cover filter brightness-[0.3] contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#131313_100%)] opacity-70"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl border-l-4 border-primary-container pl-8 py-4">
            <h1 className="font-headline text-7xl md:text-9xl font-black italic tracking-tighter text-white uppercase leading-none mb-4">
              QUIÉNES <br/> <span className="text-primary-container neon-glow-blue">SOMOS</span>
            </h1>
            <p className="font-label text-xl md:text-2xl text-secondary-container tracking-widest uppercase italic">
              La fuerza creativa detrás de tu marca.
            </p>
          </div>
        </div>
        <div className="absolute bottom-10 right-10 flex gap-1">
          <div className="w-32 h-1 bg-primary-container"></div>
          <div className="w-4 h-1 bg-secondary-container"></div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute -right-40 top-0 w-96 h-96 bg-primary-container/5 rounded-full blur-[100px]"></div>
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1 bg-primary-container text-on-primary-fixed font-label font-bold text-sm tracking-tighter uppercase">
                Nuestra Identidad
              </div>
              <h2 className="font-headline text-5xl font-extrabold text-white leading-tight">
                ORGULLOSAMENTE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">POBLANOS.</span>
              </h2>
              <div className="h-1 w-20 bg-secondary-container"></div>
              <p className="font-body text-lg text-zinc-400 leading-relaxed max-w-xl">
                BestmerchMX no es solo una plataforma de impresión; es un ecosistema tecnológico 100% Mexicano con base en la ciudad de <span className="text-white font-bold">Puebla</span>. Nacimos con la visión de democratizar la producción de alta gama.
              </p>
              <p className="font-body text-lg text-zinc-400 leading-relaxed max-w-xl">
                Nuestra misión es empoderar a emprendedores y marcas creativas, transformando conceptos digitales en productos físicos de calidad mundial mediante procesos de <span className="text-primary-container">Print on Demand</span> y <span className="text-primary-container">Dropshipping</span> optimizados con inteligencia operativa.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-container to-secondary-container opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-surface p-2">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIsQt0ngaG-FjnPWju_9ODioph0kU185ypojTaniDBWL-5ddNEOlM3sCgtumzc5Tbi56ZY_RZygesxFjFjUFyit9GV2m1oK22h2ikCHvHfGSKqLpp7_iyL03NyVSu8FToinM20anYCc1z0Mq8uHsIolmBsNiEewW5bQAdVLXfXFPW9RpvLdtIqtgIu00tpSriK0Ij1i8b_pOkfFX-tY81zMASj9NfToalyZgRuKZP1cPDqJxGZ7qAF5J_LaKBb5A0y1ArLq-cRTCKI" 
                  alt="Production team" 
                  className="grayscale hover:grayscale-0 transition-all duration-700 aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-zinc-950/90 border-l-4 border-secondary-container">
                  <p className="text-xs font-label uppercase tracking-widest text-zinc-500">Ubicación Estratégica</p>
                  <p className="text-sm font-label font-bold text-white tracking-tighter">PUEBLA, MÉXICO | HQ MONOLITH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Pillars Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="font-headline text-4xl font-black text-white uppercase tracking-tighter mb-4">PILARES ESTRATÉGICOS</h2>
            <div className="w-24 h-1 bg-primary-container mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-zinc-800 border-2 border-zinc-800 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div className="bg-surface p-10 hover:bg-surface-container-low transition-colors group">
              <div className="mb-8 flex justify-between items-start">
                <span className="material-symbols-outlined text-4xl text-primary-container group-hover:scale-110 transition-transform duration-300">memory</span>
                <span className="text-zinc-800 font-black text-4xl">01</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-white mb-4 uppercase tracking-tight">Innovación Tecnológica</h3>
              <p className="font-body text-sm text-zinc-400">Implementamos algoritmos de optimización y maquinaria de última generación para garantizar precisión milimétrica en cada gota de tinta.</p>
            </div>
            <div className="bg-surface p-10 hover:bg-surface-container-low transition-colors group">
              <div className="mb-8 flex justify-between items-start">
                <span className="material-symbols-outlined text-4xl text-secondary-container group-hover:scale-110 transition-transform duration-300">verified_user</span>
                <span className="text-zinc-800 font-black text-4xl">02</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-white mb-4 uppercase tracking-tight">Calidad de Exportación</h3>
              <p className="font-body text-sm text-zinc-400">Nuestros estándares no conocen fronteras. Cada producto es sometido a un riguroso control de calidad antes del despliegue logístico.</p>
            </div>
            <div className="bg-surface p-10 hover:bg-surface-container-low transition-colors group">
              <div className="mb-8 flex justify-between items-start">
                <span className="material-symbols-outlined text-4xl text-primary-container group-hover:scale-110 transition-transform duration-300">location_on</span>
                <span className="text-zinc-800 font-black text-4xl">03</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-white mb-4 uppercase tracking-tight">Orgullo Poblano</h3>
              <p className="font-body text-sm text-zinc-400">Potenciamos la economía local desde Puebla, proyectando el talento y la capacidad operativa de nuestra región hacia el mundo.</p>
            </div>
            <div className="bg-surface p-10 hover:bg-surface-container-low transition-colors group">
              <div className="mb-8 flex justify-between items-start">
                <span className="material-symbols-outlined text-4xl text-secondary-container group-hover:scale-110 transition-transform duration-300">group_work</span>
                <span className="text-zinc-800 font-black text-4xl">04</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-white mb-4 uppercase tracking-tight">Compromiso Social</h3>
              <p className="font-body text-sm text-zinc-400">Creamos oportunidades reales para creativos y emprendedores, facilitando el acceso a infraestructura de producción masiva.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-primary-container overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_rgba(0,0,0,0.1)_25%,_transparent_25%,_transparent_50%,_rgba(0,0,0,0.1)_50%,_rgba(0,0,0,0.1)_75%,_transparent_75%,_transparent)] bg-[length:40px_40px]"></div>
        <div className="container mx-auto px-8 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-on-primary-fixed">
            <h2 className="font-headline text-4xl font-black uppercase italic tracking-tighter leading-none mb-2">¿Listo para escalar?</h2>
            <p className="font-label font-medium uppercase tracking-widest text-sm opacity-80">Únete a la revolución de BestmerchMX hoy mismo.</p>
          </div>
          <Link to="/crea-tu-tienda" className="bg-on-primary-fixed text-primary-container px-12 py-5 font-headline font-black uppercase italic text-lg shadow-[10px_10px_0px_#000000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
            COMENZAR PROYECTO
          </Link>
        </div>
      </section>
    </div>
  );
}
