import { Link, Outlet, useLocation } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';

export default function Layout() {
  const location = useLocation();

  const navLinks = [
    { name: 'INICIO', path: '/' },
    { name: 'PERSONALIZA', path: '/personaliza' },
    { name: 'MAYOREO', path: '/mayoreo' },
    { name: 'DROPSHIPPING', path: '/dropshipping' },
    { name: 'CREA TU TIENDA', path: '/crea-tu-tienda' },
    { name: 'QUIÉNES SOMOS', path: '/quienes-somos' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl shadow-[0_0_20px_rgba(0,251,251,0.1)] flex justify-between items-center px-8 py-4 border-none">
        <Link to="/" className="text-2xl font-black italic tracking-tighter text-white font-headline">
          BESTMERCHMX
        </Link>
        <nav className="hidden md:flex gap-8 items-center font-label tracking-tight uppercase font-bold text-sm">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-all duration-300 ${
                  isActive
                    ? 'text-primary-container border-b-2 border-primary-container pb-1'
                    : 'text-white/70 hover:text-primary-container'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-6">
          <Link to="/login" className="text-white hover:text-primary-container transition-all active:scale-95 duration-100">
            <User className="w-6 h-6" />
          </Link>
          <button className="text-white hover:text-primary-container transition-all active:scale-95 duration-100 relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-secondary-container text-on-secondary-fixed text-[10px] font-bold px-1.5 py-0.5 min-w-[18px] text-center">
              0
            </span>
          </button>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#0e0e0e] w-full py-12 px-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-8 mt-auto">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-lg font-bold text-white mb-2 uppercase tracking-widest font-headline">BESTMERCHMX</div>
          <p className="font-label text-xs tracking-widest uppercase text-white/40">© 2024 BESTMERCHMX - THE NEON MONOLITH</p>
        </div>
        <nav className="flex gap-8">
          <a href="#" className="font-label text-xs tracking-widest uppercase text-white/40 hover:text-primary-container transition-colors">Privacidad</a>
          <a href="#" className="font-label text-xs tracking-widest uppercase text-white/40 hover:text-primary-container transition-colors">Términos</a>
          <a href="#" className="font-label text-xs tracking-widest uppercase text-white/40 hover:text-primary-container transition-colors">Contacto</a>
        </nav>
        <div className="flex gap-4">
          <div className="w-8 h-8 flex items-center justify-center border border-white/10 text-white/40 hover:text-secondary-container hover:border-secondary-container transition-all cursor-pointer">
            <span className="font-bold text-sm">X</span>
          </div>
          <div className="w-8 h-8 flex items-center justify-center border border-white/10 text-white/40 hover:text-primary-container hover:border-primary-container transition-all cursor-pointer">
            <span className="font-bold text-sm">IG</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
