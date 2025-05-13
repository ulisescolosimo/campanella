import React from "react";

export default function MembresiaHero() {
  return (
    <section
      className="min-h-[60vh] w-full flex items-center justify-center px-4 py-12 md:py-16"
      style={{
        background:
          "radial-gradient(99.87% 292.01% at 0.69% 0%, #A82817 0%, #FD3422 19.5%, #FD5F4A 37.5%, #D74B39 62.5%, #FD3422 79%, #A82817 100%)",
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
          <span className="block sm:inline">Viví el Politeama desde adentro.</span>
        </h1>
        <p
          className="font-['Inter_Tight'] font-normal text-base sm:text-lg md:text-xl lg:text-2xl leading-[144%] text-white text-opacity-90 text-center mb-6 md:mb-8 max-w-2xl"
        >
          Sumate hoy al Círculo Politeama y sé
          <br className="hidden sm:block" />
          <span className="block sm:inline">parte de nuestra cocina creativa.</span>
        </p>
        <button
          className="
            bg-white text-[#171717] 
            font-['Inter_Tight'] font-bold 
            text-base sm:text-lg md:text-xl 
            leading-[144%] 
            rounded-lg 
            px-6 sm:px-8 md:px-10 
            py-3 md:py-4 
            shadow-sm hover:bg-opacity-90 
            transition-all duration-200 
            transform hover:scale-[1.02] 
            active:scale-[0.98]
          "
        >
          QUIERO MI MEMBRESÍA
        </button>
      </div>
    </section>
  );
} 