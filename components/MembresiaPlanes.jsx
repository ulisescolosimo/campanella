import React from "react";

export default function MembresiaPlanes() {
  return (
    <section className="w-full py-12 flex flex-col items-center bg-gradient-to-br from-black via-black to-[#A82817]">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start pb-12 md:pb-32 pt-12 md:pt-32">
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
          <div className="rounded-2xl shadow-lg p-6 md:p-8 flex flex-col border border-neutral-200" style={{background: 'linear-gradient(164.76deg, #FFE9E9 1.42%, #D4D4D4 99.61%)'}}>
            <h3 className="font-['Inter_Tight'] font-bold text-[32px] leading-[106%] mb-6 text-[#171717] text-left">
              Membresía Full Politeama
            </h3>
            
            {/* Lista de características en dos columnas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </div>
          </div>
        </div>
    </section>
  );
} 