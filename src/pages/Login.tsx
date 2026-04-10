import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="w-full min-h-screen pt-32 pb-20 px-6 flex items-center justify-center relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-container opacity-10 blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary-container opacity-5 blur-[120px]"></div>
      
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-surface-container-low shadow-[0_0_60px_rgba(0,0,0,0.5)] relative z-10">
        {/* Left Side: Visual/Editorial */}
        <div className="relative hidden md:block overflow-hidden min-h-[600px]">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmz2qfnCtQz1rAO-116GfmWEM5L0AN0KUZbW5U9gR4Nhgj5ZlJK_H2hSR_RahyEljN18_wznbQCbRN5A_okiaMppds6JGWM9JuXv-Vfvhde0lVi8Ba5NLDp8n17lWpGYtO87KZD5lFcBcndHigIDBZxTIklU0NfmQkZlzrfhGAiWgmrlOLhi1VzhI3uZ4xeRiiZfNckLezDqhDCHjQYCiS6eEFIIFUPvrxb6paWgP42OCYlVFeoN1Zf4APVtAgOmO2Lj564iPC0g1F" 
            alt="Neon digital workspace" 
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
          <div className="absolute bottom-12 left-12 right-12">
            <div className="h-[2px] w-12 bg-secondary-container mb-6"></div>
            <h2 className="font-headline text-4xl font-black tracking-tighter text-white mb-4 leading-none">ÚNETE A LA RED</h2>
            <p className="font-body text-on-surface-variant text-sm max-w-xs leading-relaxed">
              Configura tu identidad digital y empieza a crear. Acceso exclusivo a herramientas de dropshipping y personalización masiva.
            </p>
            <div className="mt-8 flex items-center gap-2">
              <span className="font-headline text-[10px] tracking-[0.2em] text-secondary-container font-bold uppercase">Marca 100% Poblana</span>
              <div className="h-[1px] flex-grow bg-outline-variant opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Right Side: Registration Form */}
        <div className="p-8 md:p-16 bg-surface flex flex-col justify-center">
          <header className="mb-10">
            <h1 className="font-headline text-3xl font-extrabold tracking-tighter text-white mb-2 uppercase">CREAR CUENTA</h1>
            <p className="font-body text-on-surface-variant text-sm">Ingresa tus credenciales para el despliegue.</p>
          </header>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="font-headline text-[10px] tracking-widest text-primary-container font-bold uppercase block">Nombre Completo</label>
              <input type="text" placeholder="JUAN PÉREZ" className="w-full bg-surface-container-highest border-none text-white font-body py-4 px-5 focus:ring-0 focus:border-b-2 focus:border-primary-container transition-all placeholder:text-outline/40 outline-none" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-headline text-[10px] tracking-widest text-primary-container font-bold uppercase block">Email</label>
                <input type="email" placeholder="USUARIO@RED.MX" className="w-full bg-surface-container-highest border-none text-white font-body py-4 px-5 focus:ring-0 focus:border-b-2 focus:border-primary-container transition-all placeholder:text-outline/40 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="font-headline text-[10px] tracking-widest text-primary-container font-bold uppercase block">WhatsApp / Teléfono</label>
                <input type="tel" placeholder="+52 222 000 0000" className="w-full bg-surface-container-highest border-none text-white font-body py-4 px-5 focus:ring-0 focus:border-b-2 focus:border-primary-container transition-all placeholder:text-outline/40 outline-none" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-headline text-[10px] tracking-widest text-primary-container font-bold uppercase block">Contraseña</label>
                <input type="password" placeholder="••••••••" className="w-full bg-surface-container-highest border-none text-white font-body py-4 px-5 focus:ring-0 focus:border-b-2 focus:border-primary-container transition-all placeholder:text-outline/40 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="font-headline text-[10px] tracking-widest text-primary-container font-bold uppercase block">Confirmar Contraseña</label>
                <input type="password" placeholder="••••••••" className="w-full bg-surface-container-highest border-none text-white font-body py-4 px-5 focus:ring-0 focus:border-b-2 focus:border-primary-container transition-all placeholder:text-outline/40 outline-none" />
              </div>
            </div>
            <div className="pt-4 flex flex-col gap-4">
              <button type="button" className="w-full bg-secondary-container hover:bg-secondary-fixed text-on-secondary font-headline font-bold py-5 tracking-tighter text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(234,234,0,0.2)] flicker-on-hover">
                REGISTRARSE
              </button>
              <div className="flex items-center gap-4 my-2">
                <div className="h-[1px] flex-grow bg-outline-variant opacity-20"></div>
                <span className="font-headline text-[10px] text-outline">O ACCEDE CON</span>
                <div className="h-[1px] flex-grow bg-outline-variant opacity-20"></div>
              </div>
              <button type="button" className="w-full bg-transparent border border-outline-variant hover:border-white text-white font-headline font-medium py-4 px-6 flex items-center justify-center gap-3 transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="currentColor"></path>
                </svg>
                ENTRAR CON GOOGLE
              </button>
            </div>
            <p className="text-center font-body text-xs text-on-surface-variant mt-8">
              ¿Ya tienes cuenta? <Link to="/login" className="text-primary-container hover:underline underline-offset-4">Inicia sesión aquí</Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
