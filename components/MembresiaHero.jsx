import React from "react";

export default function MembresiaHero() {
  return (
    <section
      className="min-h-[90vh] w-full flex items-center justify-center px-4 py-12 md:py-16 relative"
      style={{
        background: `url('/images/background1.png') center/cover, radial-gradient(99.87% 292.01% at 0.69% 0%, #F9614D 0%, #FD3422 19.5%, #F9614D 37.5%, #D74B39 62.5%, #F9614D 79%, #F9614D 100%)`,
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
        <h1
          className="font-['Inter_Tight'] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[128%] text-white text-center mb-2 md:mb-3"
        >
          Reservá tu butaca{" "}
          <span role="img" aria-label="claqueta" className="inline-block">
            🎬
          </span>
          <br className="hidden sm:block" />
          <span className="block sm:inline">Viví el teatro desde adentro</span>
        </h1>
        
        {/* Formulario */}
        <div className="w-full max-w-4xl mt-8 md:mt-12">
          <div className="rounded-3xl shadow-lg p-8 md:p-12" style={{background: 'linear-gradient(164.76deg, #6E6E6E 1.42%, #000000 99.61%)'}}>
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Lado izquierdo - Texto */}
              <div className="lg:w-1/2">
                <h2 className="font-['Inter_Tight'] font-bold text-[32px] leading-[106%] text-white mb-4 text-center lg:text-left">
                  ¿Querés participar?
                </h2>
                <p className="font-['Inter_Tight'] font-normal text-[22px] leading-[144%] text-white">
                  Súmate al círculo politeama y se parte de nuestra cocina cultural.
                </p>
              </div>
              
              {/* Lado derecho - Formulario */}
              <div className="lg:w-1/2">
                <form className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Nombre y apellido"
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 font-['Inter_Tight'] focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 font-['Inter_Tight'] focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 font-['Inter_Tight'] focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-white font-['Inter_Tight'] font-semibold rounded-lg transition-colors duration-200"
                    style={{backgroundColor: '#F9614D'}}
                  >
                    Quiero participar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 