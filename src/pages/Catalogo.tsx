import { Link } from 'react-router-dom';

export default function Catalogo() {
  return (
    <div className="w-full">
      {/* Title & Cyber-Accent */}
      <div className="mb-12 relative px-6 md:px-12 max-w-[1600px] mx-auto pt-28">
        <div className="h-[2px] w-12 bg-secondary-container mb-4"></div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none font-headline">
          CATÁLOGO DE <br/>
          <span className="text-primary-container neon-glow-blue">PRODUCTOS</span>
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 px-6 md:px-12 max-w-[1600px] mx-auto pb-20">
        {/* Sidebar Filter */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
          <div>
            <h3 className="text-secondary-container text-xs tracking-widest uppercase mb-4 font-bold font-headline">Categorías</h3>
            <ul className="space-y-3 font-label text-sm uppercase">
              <li><a href="#" className="text-primary-container flex items-center gap-2"><span>[x]</span> Playeras</a></li>
              <li><a href="#" className="text-white/60 hover:text-white flex items-center gap-2"><span>[ ]</span> Hoodies</a></li>
              <li><a href="#" className="text-white/60 hover:text-white flex items-center gap-2"><span>[ ]</span> Gorras</a></li>
              <li><a href="#" className="text-white/60 hover:text-white flex items-center gap-2"><span>[ ]</span> Accesorios</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-secondary-container text-xs tracking-widest uppercase mb-4 font-bold font-headline">Filtros Rápidos</h3>
            <div className="flex flex-wrap gap-2">
              <button className="bg-surface-container-low border border-white/10 px-3 py-1 text-[10px] hover:border-primary-container transition-colors font-label">UNISEX</button>
              <button className="bg-surface-container-low border border-white/10 px-3 py-1 text-[10px] hover:border-primary-container transition-colors font-label">PREMIUM</button>
              <button className="bg-surface-container-low border border-white/10 px-3 py-1 text-[10px] hover:border-primary-container transition-colors font-label">OVERSIZE</button>
            </div>
          </div>
          <div className="p-6 bg-primary-container/5 border-l-2 border-primary-container">
            <p className="text-[10px] text-primary-container/80 uppercase tracking-tighter mb-1 font-label">Promo Active</p>
            <p className="text-sm font-bold text-white uppercase font-headline">20% Off en Mayoreo</p>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="flex-1">
          {/* Sorting & View */}
          <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
            <p className="text-xs text-white/40 uppercase tracking-widest font-label">Mostrando 6 de 156 productos</p>
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase text-white/40 font-label">Ordenar por:</span>
              <select className="bg-transparent border-none text-xs uppercase font-bold focus:ring-0 cursor-pointer text-white font-label outline-none">
                <option>Lo más nuevo</option>
                <option>Precio: Menor a Mayor</option>
                <option>Precio: Mayor a Menor</option>
              </select>
            </div>
          </div>

          {/* Bento-ish Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-1">
            {/* Product Card 1 */}
            <div className="group relative bg-surface-container-low overflow-hidden">
              <div className="aspect-[3/4] relative overflow-hidden bg-surface">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaJo-1vsRHFxT9R5xoTDPOyz6rGEbLGPN8rGViPBpK4s__KhAiWoiXOYPbkWm7ny3T3kF9NO15lD5YG_jt2TAOacg2j6NOaGNNwy5_WPlE45jZ0l7QgLLGmxy6h7YrRm6HrCL-NmB1iye-bwL0PvfVfmygVlziKoxp-Hpp87m1GTZ8tH3sOFTjQkeZJ8ey_qJb6_t4EVbrjqPQDRKQ_i6n5RWkZEcEj68fDGO3kcfIGghB1wKyMzriiTxgJUV36ZCokKUNbQlD_hAq" 
                  alt="White T-shirt" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-primary-container text-on-primary-fixed text-[10px] font-black px-2 py-1 uppercase font-headline">Best Seller</div>
                <div className="absolute inset-0 bg-primary-container/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Link to="/personalizador" className="bg-white text-black px-6 py-3 font-bold text-xs uppercase tracking-tighter transform translate-y-4 group-hover:translate-y-0 transition-transform font-headline">Ver Detalle</Link>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-lg font-bold leading-tight uppercase max-w-[70%] font-headline">Playera Unisex Algodón Peinado</h2>
                  <span className="text-primary-container font-black font-headline">$299.00</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-white border border-white/20"></div>
                  <div className="w-3 h-3 bg-black border border-white/20"></div>
                  <div className="w-3 h-3 bg-zinc-500 border border-white/20"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/40 uppercase font-label">Tallas: XS - XXL</span>
                  <button className="text-secondary-container hover:text-white transition-colors">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="group relative bg-surface-container-low overflow-hidden">
              <div className="aspect-[3/4] relative overflow-hidden bg-surface">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAggf1PHdPI0uGXL7aqXXDtoGmYe7jI__k5-P1JACsAJDsHf5IiCmhvvfLSgio5r0_3nMWzCcCS6AFi8wtu2vwQ1zj6t-sUq7tx7u6InfTICtbAEfKHofk4znMIcDnLtE7oP2_ElFg-l5W9whWTWdbr1Oq128ld0D-sgAjP-zLzBIXpPz0F0lh2ZCFz_uhX0V58Vecw0LfLr9ABzYnofKkUl0tsiM9ihH6gdrQJocFgg190or9-toaXVKNGXWnEbkL6_XX0Hymx-ESw" 
                  alt="Black T-shirt" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-secondary-container text-on-secondary-fixed text-[10px] font-black px-2 py-1 uppercase font-headline">Premium Drop</div>
                <div className="absolute inset-0 bg-primary-container/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Link to="/personalizador" className="bg-white text-black px-6 py-3 font-bold text-xs uppercase tracking-tighter transform translate-y-4 group-hover:translate-y-0 transition-transform font-headline">Ver Detalle</Link>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-lg font-bold leading-tight uppercase max-w-[70%] font-headline">Heavy Cotton Oversize Black</h2>
                  <span className="text-primary-container font-black font-headline">$450.00</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-black border border-white/20"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/40 uppercase font-label">Tallas: S - XL</span>
                  <button className="text-secondary-container hover:text-white transition-colors">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="group relative bg-surface-container-low overflow-hidden">
              <div className="aspect-[3/4] relative overflow-hidden bg-surface">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYQXXioPRBWrDCqampYaHIIcI6f9ke1kO8rUvXFhZN5FKmVnciUDcZOB5wJ4jFwxZzHgc29CmGi_6mE5rv1m0OPBCTLIcIZFLmOcu7UPsoi-lzs84dtWqIE3mMfAkCZiOYfuBEryfvV84PGjCY-24jqwIM77JtV2lfDQ3BHz5VxQPzVh8yqzpdC7OR2XOm-9xIelwSBWcUM0fbpC_Vev1ek0puK_N6uKj89bXMfjB8wQNd__5nB8EDAu_sUjiKxiVH4ns-1IAk9-EX" 
                  alt="Tan T-shirt" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary-container/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Link to="/personalizador" className="bg-white text-black px-6 py-3 font-bold text-xs uppercase tracking-tighter transform translate-y-4 group-hover:translate-y-0 transition-transform font-headline">Ver Detalle</Link>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-lg font-bold leading-tight uppercase max-w-[70%] font-headline">Playera Cuello V Tacto Suave</h2>
                  <span className="text-primary-container font-black font-headline">$320.00</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-[#D2B48C] border border-white/20"></div>
                  <div className="w-3 h-3 bg-white border border-white/20"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/40 uppercase font-label">Tallas: M - XXL</span>
                  <button className="text-secondary-container hover:text-white transition-colors">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="group relative bg-surface-container-low overflow-hidden">
              <div className="aspect-[3/4] relative overflow-hidden bg-surface">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnsuvXEaHm8Bxlm6LUUhgzDAbQXcxkJ6jmOKjisOzPWEduQ130OgKCVGGZpB_gouM7y4Qq-I1dR1Px89FuUlGXoZoyA0Qo8yykROW1nnrvrQIbv-lrPwOkBWTc4007-fOqtSBpSedyldaUsQ5g5YG9G88ifQ9dlPnrAggEGzdubLuFIQa5zCqnwslyZSOF_zK8HADcwF1JdRCe8GRNeQJY5tItHhN2FuZyg_En6hP3TFBZHxqHK2eLcn60CDZo3u_G8Dg_U3OMpa6T" 
                  alt="Grey T-shirt" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary-container/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Link to="/personalizador" className="bg-white text-black px-6 py-3 font-bold text-xs uppercase tracking-tighter transform translate-y-4 group-hover:translate-y-0 transition-transform font-headline">Ver Detalle</Link>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-lg font-bold leading-tight uppercase max-w-[70%] font-headline">Performance Tee Sport-Fit</h2>
                  <span className="text-primary-container font-black font-headline">$380.00</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-gray-400 border border-white/20"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/40 uppercase font-label">Tallas: S - L</span>
                  <button className="text-secondary-container hover:text-white transition-colors">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 5 */}
            <div className="group relative bg-surface-container-low overflow-hidden">
              <div className="aspect-[3/4] relative overflow-hidden bg-surface">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-oVSJxSlvSGkIf_C20tUzzGvVhrcFnbI-naAfe4hePteEnzE-3eF42sElT5PsZjhNeGqSdoaMYLAXzTY0GyDJBP3-5y22YaRnc-aFMLGc70DSYDMD_H3foUEjqQx4xbucmJNtkP8iJDRZf8qp_EJSWQWwkdI1H-yyOKRt1v0uzbOztmIfcKb5e6ixsN1kA8hkQIs8RzDN3jD-NQA7xhdnWP1jLKttUXvxBgraXaqKHm32Xc9-7rrst5kVAInNq3a5SI2nBcUm0Uui" 
                  alt="Blue T-shirt" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-primary-container text-on-primary-fixed text-[10px] font-black px-2 py-1 uppercase font-headline">Limited</div>
                <div className="absolute inset-0 bg-primary-container/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Link to="/personalizador" className="bg-white text-black px-6 py-3 font-bold text-xs uppercase tracking-tighter transform translate-y-4 group-hover:translate-y-0 transition-transform font-headline">Ver Detalle</Link>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-lg font-bold leading-tight uppercase max-w-[70%] font-headline">Cyber Blue Reactive Tee</h2>
                  <span className="text-primary-container font-black font-headline">$520.00</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-blue-600 border border-white/20"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/40 uppercase font-label">Tallas: M - XL</span>
                  <button className="text-secondary-container hover:text-white transition-colors">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 6 */}
            <div className="group relative bg-surface-container-low overflow-hidden">
              <div className="aspect-[3/4] relative overflow-hidden bg-surface">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7D3Vn5iO1KDw7ZxqDolfIXz2O4gqTox6nnsQm_1f-smQ0dm8hv0IBFSHmizJBTJoa8ifmHMYBG4JuzomQfUITMX0wfZ7s400DUV55hIvkn5wzIsgTRboEVhif8WdeSM6MKPgNQg8DXqoBtlhZg49T3PTVaO0fcmoYxONvigr_D7lyoX-UsyN2RP_hoAR_sJLA4KCLeaYj7x6WkWLy0k777UI_m3t166w4M4f5la8XA515SW_rAfRLeRZ33Jef1Eeci1I1JSPp9n6p" 
                  alt="White T-shirt V2" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary-container/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Link to="/personalizador" className="bg-white text-black px-6 py-3 font-bold text-xs uppercase tracking-tighter transform translate-y-4 group-hover:translate-y-0 transition-transform font-headline">Ver Detalle</Link>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-lg font-bold leading-tight uppercase max-w-[70%] font-headline">Basic Essential 3-Pack</h2>
                  <span className="text-primary-container font-black font-headline">$799.00</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-white border border-white/20"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/40 uppercase font-label">Tallas: XS - XL</span>
                  <button className="text-secondary-container hover:text-white transition-colors">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center items-center gap-4">
            <button className="w-10 h-10 border border-white/10 flex items-center justify-center text-white hover:border-primary-container transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <div className="flex gap-2">
              <button className="w-10 h-10 bg-primary-container text-black font-bold font-headline">1</button>
              <button className="w-10 h-10 border border-white/10 text-white font-bold hover:border-primary-container transition-colors font-headline">2</button>
              <button className="w-10 h-10 border border-white/10 text-white font-bold hover:border-primary-container transition-colors font-headline">3</button>
              <span className="w-10 h-10 flex items-center justify-center text-white/20">...</span>
              <button className="w-10 h-10 border border-white/10 text-white font-bold hover:border-primary-container transition-colors font-headline">12</button>
            </div>
            <button className="w-10 h-10 border border-white/10 flex items-center justify-center text-white hover:border-primary-container transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
