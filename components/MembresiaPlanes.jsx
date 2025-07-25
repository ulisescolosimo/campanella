import React from "react";

export default function MembresiaPlanes() {
  return (
    <section className="w-full py-12 md:py-20 flex flex-col items-center bg-gradient-to-br from-black via-black to-[#A82817]">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start pb-12 md:pb-20 pt-12 md:pt-20">
        {/* Texto lateral */}
        <div className="w-full lg:w-auto lg:max-w-[400px]">
          <h2 className="font-['Inter_Tight'] font-bold text-[48px] leading-[126%] text-white mb-6" id="membresias">
            ¿Qué incluye la membresía?
          </h2>
          <p className="font-['Inter_Tight'] font-normal text-[22px] leading-[144%] text-white">
            Con tu <span className="font-bold">suscripción anual</span> vas a vivir el detrás de escena de nuestras creaciones audiovisuales y teatrales. Accedé a encuentros exclusivos, zooms, ensayos, charlas íntimas y mucho más.
          </p>
        </div>

        <div className="w-full lg:flex-1">
          <div className="rounded-2xl shadow-lg p-6 md:p-8 flex flex-col border border-neutral-200" style={{background: 'linear-gradient(164.76deg, #FFFFFF 1.42%, #D9D9D9 99.61%)'}}>
            <h3 className="font-['Inter_Tight'] font-bold text-[32px] leading-[106%] mb-6 text-[#171717] text-center">
              Membresía Full Politeama
            </h3>
            
            {/* Lista de características en dos columnas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex flex-col">
                {[
                  "Todas las fechas desde butaca Platea",
                  "10 entradas gratis para el teatro",
                  "Acceso a backstage",
                  "Programas firmados por Campanella y elenco",
                  "Zooms exclusivos"
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex items-start gap-2 text-neutral-800 text-sm md:text-base py-3">
                      <img src="/images/icon/check.png" alt="check" className="w-3 h-3 mt-1.5 object-contain flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                    {index < 4 && <div className="border-b border-[#E8E8E8]"></div>}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col">
                {[
                  "Acceso a ensayos y producción",
                  "Tu foto en el mural de socios",
                  "Ubicaciones preferenciales y descuentos",
                  "Meet and Greet con Artistas",
                  "Regalos de bienvenida y sorteos"
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex items-start gap-2 text-neutral-800 text-sm md:text-base py-3">
                      <img src="/images/icon/check.png" alt="check" className="w-3 h-3 mt-1.5 object-contain flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                    {index < 4 && <div className="border-b border-[#E8E8E8]"></div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Sección de precios y formulario */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Precios */}
            <div className="text-center lg:flex-1 bg-[#EBEBEB] rounded-lg p-6 flex flex-col justify-center">
              <div className="mb-2">
                <span className="font-['Inter_Tight'] font-bold text-3xl md:text-[42px] leading-[128%] text-[#171717]">
                  $2.000.000
                </span>
              </div>
              <div className="mb-2">
                <span className="font-['Inter_Tight'] font-normal text-lg leading-[128%] text-[#171717]">
                  ó 12 cuotas de $200.000
                </span>
              </div>
              <div className="mb-2">
                <span className="font-['Inter_Tight'] font-normal text-sm leading-[110%] text-[#171717]">
                  Valor estimado real Más de $3.200.000
                </span>
              </div>
              <div>
                <span className="font-['Inter_Tight'] font-normal text-sm leading-[110%] text-[#1DB954]">
                  Ahorro: +$1.200.000
                </span>
              </div>
            </div>

            {/* Formulario y botón */}
            <div className="lg:flex-1">
              <div className="space-y-4 mb-6">
                <input 
                  type="text" 
                  placeholder="Tu nombre y apellido" 
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-[#171717] placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#A82817] focus:border-transparent"
                />
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-[#171717] placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#A82817] focus:border-transparent"
                />
              </div>

              {/* Botón */}
              <button 
                className="w-full py-3 rounded-lg text-white font-['Inter_Tight'] font-bold text-base md:text-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
                style={{background:'linear-gradient(90deg, #A82817 0%, #F9614D 100%)'}}
              >
                Contratar membresía
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 