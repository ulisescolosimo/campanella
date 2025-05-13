import React from "react";

export default function MembresiaPlanes() {
  return (
    <section className="w-full py-12 md:py-20 flex flex-col items-center bg-gradient-to-br from-black via-neutral-900 to-[#A82817]">
      <div className="max-w-7xl w-full mx-auto px-4 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start pb-12 md:pb-20 pt-12 md:pt-20">
        {/* Texto lateral */}
        <div className="w-full lg:w-auto lg:max-w-[400px]">
          <h2 className="font-['Inter_Tight'] font-bold text-2xl md:text-[28px] leading-[120%] text-white mb-6" id="membresias">
            ¿Qué incluye la membresía?
          </h2>
          <p className="font-['Inter_Tight'] font-normal text-base md:text-lg leading-[140%] text-white">
            Con tu <span className="font-bold">suscripción anual</span> vas a vivir el detrás de escena de nuestras creaciones audiovisuales y teatrales. Accedé a encuentros exclusivos, zooms, ensayos, charlas íntimas y mucho más.
          </p>
        </div>

        {/* Planes */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full justify-center">
          {/* Pullman */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col items-center border border-neutral-200 self-auto">
            <h3 className="font-['Inter_Tight'] font-bold text-2xl md:text-[28px] leading-[120%] mb-6 text-[#171717]">
              Socio Pullman
            </h3>
            <ul className="mb-8 w-full flex flex-col gap-3">
              {[
                "Todas las fechas desde butaca Pullman",
                "6 entradas gratis para el teatro",
                "Acceso a backstage",
                "Programas firmados por Campanella y elenco",
                "Zooms exclusivos",
                "Ubicaciones preferenciales y descuentos"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-neutral-800 text-sm md:text-base">
                  <img src="/images/icon/check.png" alt="check" className="w-3 h-3 mt-1.5 object-contain flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="w-full text-center mb-2">
              <span className="font-['Inter_Tight'] font-bold text-3xl md:text-[42px] leading-[128%] text-[#171717]">
                $125.000
              </span>
              <span className="font-['Inter_Tight'] font-normal text-base md:text-lg leading-[110%] text-[#171717] ml-1">
                al mes
              </span>
            </div>
            <div className="w-full text-center mb-2">
              <span className="font-['Inter_Tight'] font-normal text-base md:text-lg leading-[128%] text-neutral-600">
                ó $1.500.000 Anual
              </span>
            </div>
            <div className="w-full text-center mt-6 mb-6 gap-2 flex flex-col">
              <span className="font-['Inter_Tight'] font-normal text-sm leading-[110%] text-[#A82817] block">
                Valor estimado real: Más de $2.400.000
              </span>
              <span className="font-['Inter_Tight'] font-normal text-sm leading-[110%] text-[#1DB954] block">
                Ahorro: +$900.000
              </span>
            </div>
            <button 
              className="w-full py-3 rounded-lg text-white font-['Inter_Tight'] font-bold text-base md:text-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
              style={{background:'linear-gradient(90deg, #A82817 0%, #F9614D 100%)'}}
            >
              Contratar membresía Pullman
            </button>
          </div>

          {/* Platea */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col items-center border border-neutral-200 self-auto">
            <h3 className="font-['Inter_Tight'] font-bold text-2xl md:text-[28px] leading-[120%] mb-6 text-[#171717]">
              Socio Platea
            </h3>
            <ul className="mb-8 w-full flex flex-col gap-3">
              {[
                "Todas las fechas desde butaca Platea",
                "10 entradas gratis para el teatro",
                "Acceso a backstage",
                "Programas firmados por Campanella y elenco",
                "Zooms exclusivos",
                "Acceso a ensayos y producción",
                "Tu foto en el mural de socios",
                "Ubicaciones preferenciales y descuentos"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-neutral-800 text-sm md:text-base">
                  <img src="/images/icon/check.png" alt="check" className="w-3 h-3 mt-1.5 object-contain flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="w-full text-center mb-2">
              <span className="font-['Inter_Tight'] font-bold text-3xl md:text-[42px] leading-[128%] text-[#171717]">
                $165.000
              </span>
              <span className="font-['Inter_Tight'] font-normal text-base md:text-lg leading-[110%] text-[#171717] ml-1">
                al mes
              </span>
            </div>
            <div className="w-full text-center mb-2">
              <span className="font-['Inter_Tight'] font-normal text-base md:text-lg leading-[128%] text-neutral-600">
                ó $2.000.000 Anual
              </span>
            </div>
            <div className="w-full text-center mt-6 mb-6 gap-2 flex flex-col">
              <span className="font-['Inter_Tight'] font-normal text-sm leading-[110%] text-[#A82817] block">
                Valor estimado real: Más de $3.200.000
              </span>
              <span className="font-['Inter_Tight'] font-normal text-sm leading-[110%] text-[#1DB954] block">
                Ahorro: +$1.200.000
              </span>
            </div>
            <button 
              className="w-full py-3 rounded-lg text-white font-['Inter_Tight'] font-bold text-base md:text-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
              style={{background:'linear-gradient(90deg, #A82817 0%, #F9614D 100%)'}}
            >
              Contratar membresía Platea
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 