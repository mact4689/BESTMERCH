import { Link } from 'react-router-dom';

export default function Dropshipping() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[921px] min-h-[600px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Digital logistics landscape" 
            className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZpppenN2U0-8AeOMZFXYgN9TQElpWGeKHJ3-Qpy8oV3xuYMNuX2qifcc_RUUe1KLIipxbtjq3PdaNST3U_ka2UU8bEiAXcaUj47wA0dBa93kraT3uVJmKhn3M8qB3TkAwa9E9bYUxOUgocQWZy4Zu4q0gW6lLKimCGy-5oTjwV3BBHaTJT3W7Iwtw4kv8zlGsRgm5Qqf16Qn1_UhOW6SKekDeFtSsyf60ae9SPFtuh6lOP3FL9GqMz8zjHjj1ZO3h8jW3rrZ5RhWt"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1 mb-6 border border-primary-container text-primary-container font-headline text-sm tracking-[0.2em] uppercase">The Future of E-commerce</span>
            <h1 className="font-headline text-5xl md:text-7xl font-black text-white leading-tight mb-8 tracking-tighter">
              Vende sin inventarios. <br/>
              <span className="text-primary-container neon-glow-blue">Nosotros producimos</span> <br/>
              y enviamos por ti.
            </h1>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-primary-container text-on-primary-fixed px-10 py-5 font-headline font-bold text-lg hover:shadow-[0_0_20px_#00fbfb] transition-all active:scale-95">EMPEZAR AHORA</button>
              <Link to="/catalogo" className="border border-secondary-fixed/40 text-secondary-fixed px-10 py-5 font-headline font-bold text-lg hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all active:scale-95 text-center flex items-center justify-center">VER CATÁLOGO</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dropshipping Text Block */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-headline text-4xl font-black text-white tracking-tighter uppercase italic">
              ¿Qué es el <span className="text-secondary-fixed">Dropshipping</span> con BestmerchMX?
            </h2>
            <div className="space-y-6 text-on-surface/80 text-lg leading-relaxed">
              <p>
                El dropshipping es el modelo de negocio definitivo para la era digital. Tú te enfocas en lo que mejor sabes hacer: <span className="text-white font-bold">vender y crear comunidad</span>. Nosotros nos encargamos de todo el músculo operativo.
              </p>
              <p className="border-l-2 pl-6 border-secondary-fixed">
                Somos una marca 100% Poblana con infraestructura de clase mundial. Al recibir una orden en tu tienda, nuestro sistema procesa la producción bajo demanda (Print on Demand) y realiza el envío directamente a tu cliente final con tu identidad de marca.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-container to-secondary-container blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-video bg-surface-container-low flex items-center justify-center border border-white/5">
              <img 
                alt="Production line" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOZvyHw5yGiCG6SmO6OfFxkDvjqXatfR0OpFCjVeuXhE94Xq4lb3iBVUSPuxO11aCDwygMF37M_beVtiB3l2JKLb-Q6n1xgx8pWzb-ItKDTyc9z7f1qFRqqYtPQlW0mXCN6mBhjLTSNwh6vfXtdESiccEFgx7OhWcVCoXHAyLWzcMEV6l76Sxsnw6PMBDIYAXDfrCCB8NNqoAfrl2ue0hIsMm4Zjk0rNoYzZfl9inracPpg7gVfCg5G5tYohKzjxOklHQysE3lLIXl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-24 bg-surface-container-lowest relative overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="font-headline text-5xl font-black text-white tracking-tighter">BENEFICIOS <span className="text-primary-container">PRO</span></h2>
            <p className="font-label text-secondary-fixed tracking-widest uppercase text-sm">Escalabilidad sin límites</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5 border border-white/5">
            {/* Beneficio 1 */}
            <div className="bg-surface p-10 group hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary-container mb-6 group-hover:scale-110 transition-transform inline-block">inventory_2</span>
              <h3 className="font-headline font-bold text-white mb-4 uppercase leading-tight">Dropshipping sin complicaciones</h3>
              <p className="text-on-surface/60 text-sm">Integración directa y automatizada con tus plataformas.</p>
            </div>
            {/* Beneficio 2 */}
            <div className="bg-surface p-10 group hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary-container mb-6 group-hover:scale-110 transition-transform inline-block">payments</span>
              <h3 className="font-headline font-bold text-white mb-4 uppercase leading-tight">Sin inversión inicial</h3>
              <p className="text-on-surface/60 text-sm">No necesitas comprar stock. Paga solo cuando vendas.</p>
            </div>
            {/* Beneficio 3 */}
            <div className="bg-surface p-10 group hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary-container mb-6 group-hover:scale-110 transition-transform inline-block">bolt</span>
              <h3 className="font-headline font-bold text-white mb-4 uppercase leading-tight">Calidad y rapidez</h3>
              <p className="text-on-surface/60 text-sm">Producción 100% Poblana con estándares internacionales.</p>
            </div>
            {/* Beneficio 4 */}
            <div className="bg-surface p-10 group hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary-container mb-6 group-hover:scale-110 transition-transform inline-block">sell</span>
              <h3 className="font-headline font-bold text-white mb-4 uppercase leading-tight">Tu tienda, tu marca</h3>
              <p className="text-on-surface/60 text-sm">White labeling total. El cliente siempre ve tu logo.</p>
            </div>
            {/* Beneficio 5 */}
            <div className="bg-surface p-10 group hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary-container mb-6 group-hover:scale-110 transition-transform inline-block">public</span>
              <h3 className="font-headline font-bold text-white mb-4 uppercase leading-tight">Llegamos a donde necesites</h3>
              <p className="text-on-surface/60 text-sm">Logística nacional e internacional optimizada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Productos y Servicios Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-8">
          <h2 className="font-headline text-4xl font-black text-white tracking-tighter mb-16 uppercase text-center">
            Conoce nuestros <span className="text-secondary-fixed italic">productos y servicios</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <div className="relative h-96 overflow-hidden group bg-surface">
              <img 
                alt="Warehouse" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgv_JrazXMuA3cJKNd2plvSewzDpir05Wbo-5QaSyQCnrro8z4vkKcsbYjEjAVMC9LQg9tUEFRJUdvljMUH_uayjzORVKtHDqzDfx1ZXdyJP3ncDK9gF9SMcAWFNyfBrv4E-4lIOho85xxmvK5-TBAn2nNNtPpOwh5Q59yqtGzILLyQNNTctAjG3gQYbn9C7xcjFECL36eDGxmU-M-Kotrj7YeqPmq3PlRFXQjc2HyhvDuGQ7BH15MjDkKDUSh7OIX9090OQYOLK3I"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-headline text-2xl font-bold text-white mb-2 uppercase">Almacén y Fulfillment</h3>
                <p className="text-on-surface/70 text-sm mb-4">Gestión inteligente de inventario físico.</p>
                <div className="h-1 w-12 bg-primary-container"></div>
              </div>
            </div>
            {/* Service Card 2 */}
            <div className="relative h-96 overflow-hidden group bg-surface">
              <img 
                alt="Print on demand" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKoFLgbO_6Q8sXHXo3SpsoSu4MWqf71sI8YII7QfqpiZD3U5j8IdSDOjMQCVKkvkD1JcrJCy7D9EZewr-DFuIQepphtS5AamzEg_eUHyOX0w7yQqTXkoegzO2m0TOHAG-vOyFw3L1Ka4pHHAj7uFZE3rQHeUnq9ZP0QX9JZ04rUx60d-SUL_5ET_XL32XJq8s9T_qJtuJnwm1BvUL1dffqx4ZBMOSAPCrxRpkUasQBhClWu4MI_C0wx9hmKQVBs4unYztsEmehyVRq"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-headline text-2xl font-bold text-white mb-2 uppercase leading-tight">Dropshipping y Print on Demand</h3>
                <p className="text-on-surface/70 text-sm mb-4">Tu diseño, nuestra ejecución perfecta.</p>
                <div className="h-1 w-12 bg-primary-container"></div>
              </div>
            </div>
            {/* Service Card 3 */}
            <div className="relative h-96 overflow-hidden group bg-surface">
              <img 
                alt="Ecommerce creation" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlQdzeVNH2kZCQ2ZRch1ZTaZzbV-Zqb3DwZTvnQP48Roh6jzv9Czfoe14P6B0BfWVDYF_wA_lxjUK9gSVib6tAvDjWivYl9-lbkJ3aH6YUAqiuI8jBNE3zvHiF7G4DGEzhedIlvgbMUha9_mAvRXd5STXUNi_KYx8exxgr4RZ9WJrqAdRNgSuvWHE5rJ_nJJauz6OXwKcJWVRgBj_2SQ5KwNtCI5S0rQnDz8EQLA1wRqgCzakRwXpRSBrF2LEPmCP4jROlU6bsAKiT"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-headline text-2xl font-bold text-white mb-2 uppercase">Creación de E-commerce</h3>
                <p className="text-on-surface/70 text-sm mb-4">Levantamos tu plataforma desde cero.</p>
                <div className="h-1 w-12 bg-primary-container"></div>
              </div>
            </div>
            {/* Service Card 4 */}
            <div className="relative h-96 overflow-hidden group bg-surface">
              <img 
                alt="Packaging" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW-AZl4Qrktuxb6Tn5JskLwSPQRoiDq6Z4RPHNP6g42cC2RIP74GHmsAI7c5GOeXkRrtq4FHy8Tes7xD_L75rFuxsfR_NndAgRtx0V1pztbkurWGyyxRgBMAB4xFiHNHki_WFKkHFV61XyMtmrn6-0mdS2kCaycCpfWyzKpySkvUFKISV215cAAJp24tKAlm2vv4iJu4hqTYH5AKRJh9FUzJW_uvLmXJezGLF6Qk0a5z-MdcGAbhhNGI15tRcYeEDi6jIr0n2lW1X0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-headline text-2xl font-bold text-white mb-2 uppercase">Empaque y Envío</h3>
                <p className="text-on-surface/70 text-sm mb-4">Unboxing de impacto garantizado.</p>
                <div className="h-1 w-12 bg-primary-container"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Cómo funciona? Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="container mx-auto px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-black text-white tracking-tighter uppercase mb-4">
              ¿Cómo funciona nuestro servicio?
            </h2>
            <div className="h-1 w-24 bg-secondary-fixed mx-auto"></div>
          </div>
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="bg-surface p-8 border-l-4 border-primary-container">
              <div className="flex items-start gap-6">
                <div className="font-headline text-4xl font-black text-white/20">01</div>
                <div>
                  <h3 className="font-headline text-xl font-bold text-primary-container uppercase mb-3">Vende en tus plataformas favoritas</h3>
                  <p className="text-on-surface/70 leading-relaxed">Conecta tu tienda Shopify, WooCommerce o Marketplace con nuestro sistema. Tú solo te preocupas por captar clientes y cerrar ventas bajo tu propio dominio y marca.</p>
                </div>
              </div>
            </div>
            {/* Step 2 */}
            <div className="bg-surface p-8 border-l-4 border-secondary-fixed">
              <div className="flex items-start gap-6">
                <div className="font-headline text-4xl font-black text-white/20">02</div>
                <div>
                  <h3 className="font-headline text-xl font-bold text-secondary-fixed uppercase mb-3">Nosotros imprimimos y enviamos</h3>
                  <p className="text-on-surface/70 leading-relaxed">Al recibir la orden, fabricamos el producto con la más alta calidad y lo enviamos directamente a la puerta de tu cliente. Todo con empaques que resaltan tu identidad.</p>
                </div>
              </div>
            </div>
            {/* Step 3 */}
            <div className="bg-surface p-8 border-l-4 border-white">
              <div className="flex items-start gap-6">
                <div className="font-headline text-4xl font-black text-white/20">03</div>
                <div>
                  <h3 className="font-headline text-xl font-bold text-white uppercase mb-3">Gana dinero sin manejar inventario</h3>
                  <p className="text-on-surface/70 leading-relaxed">Olvídate de comprar cajas, stock o manejar paqueterías. Recibe tus ganancias líquidas sin el riesgo financiero de tener mercancía parada.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <div className="inline-block p-1 bg-gradient-to-r from-primary-container to-secondary-container">
              <div className="bg-surface-container-lowest px-12 py-8">
                <h4 className="font-headline text-2xl font-bold text-white mb-4 tracking-tight uppercase">¿Listo para escalar?</h4>
                <p className="text-on-surface/60 mb-8">Únete a la red de dropshipping más grande de México.</p>
                <button className="bg-primary-container text-on-primary-fixed px-12 py-4 font-headline font-black text-sm tracking-widest flicker-on-hover">HABLAR CON UN ASESOR</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
