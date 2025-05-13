export default function PoliteamaInfo() {
  return (
    <section className="w-full relative py-10 md:py-20 flex flex-col items-center overflow-hidden" style={{
      background: `
        linear-gradient(to bottom, 
          #000000 0%,
          rgba(59, 14, 14, 0.3) 50%,
          rgba(30, 30, 30, 0.2) 100%
        )
      `
    }}>
      {/* Gradiente esquina inferior izquierda */}
      <div
        className="pointer-events-none absolute left-0 bottom-0 w-[500px] h-[500px] z-0 opacity-30"
        style={{
          background: "radial-gradient(circle at left bottom, rgba(168,25,25,0.2) 0%, transparent 70%)",
        }}
      />
      {/* Gradiente esquina superior derecha */}
      <div
        className="pointer-events-none absolute right-0 top-0 w-[500px] h-[500px] z-0 opacity-30"
        style={{
          background: "radial-gradient(circle at right top, rgba(168,25,25,0.15) 0%, transparent 70%)",
        }}
      />
      {/* Gradiente central */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] z-0 opacity-30"
        style={{
          background: "radial-gradient(circle at center, rgba(168,25,25,0.1) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 w-full">
        {/* Título y descripción */}
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-36 mb-10 md:mb-20 px-4 md:px-0">
          <div>
            <h2 className="text-white font-inter-tight font-bold text-[18px] leading-[106%] tracking-[0%] text-left md:text-left md:text-2xl sm:md:text-3xl mb-4 md:mb-4">
              ¿Qué es el Círculo Politeama?
            </h2>
            <p className="text-white/80 text-[15px] leading-[140%] mb-4 md:mb-6 text-left md:text-left">
              El Círculo Politeama es una membresía anual creada por <b>100Bares</b>, producida de <b>Juan José Campanella</b>, para quienes desean ser parte del proceso creativo detrás de las artes escénicas.
            </p>
            <p className="text-white/80 text-[15px] leading-[140%] mb-4 md:mb-0 text-left md:text-left">
              Más allá de los espectáculos, es una invitación a vivir de cerca el trabajo de los artistas y equipos creativos de los elencos más prestigiosos de Argentina.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-white/80 text-[15px] leading-[140%] mb-4 md:mb-6 text-left md:text-left">
              Formar parte del Círculo es entrar a una comunidad exclusiva, con acceso a experiencias únicas y contenido especial sobre el proceso creativo de los montajes.
            </p>
            <p className="text-white text-base md:text-lg font-bold text-left md:text-left">
              Lo que ves en el escenario es solo una parte. Nosotros te mostramos todo lo demás.
            </p>
          </div>
        </div>

        {/* Sobre 100Bares */}
        <div className="pt-16 md:pt-32 max-w-7xl w-full mx-auto rounded-xl mb-10 md:mb-20 flex flex-col gap-10 md:gap-20" id="sobre-100-bares">
          {/* Primera fila: texto y estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16 items-start">
            {/* Texto descriptivo */}
            <div className="md:col-span-2 px-4 md:px-0">
              <h3 className="text-white mb-2 font-inter-tight font-bold text-[18px] leading-[106%] tracking-[0%] md:text-base md:font-normal md:leading-normal md:tracking-normal">
                 <span className="font-inter-tight font-bold text-[18px] leading-[106%] tracking-[0%]">Sobre</span> <span className="font-inter-tight font-extrabold text-[18px] leading-[106%] tracking-[0%]">100Bares</span>
              </h3>
              <p className="text-white/80 text-base mb-2">
                100Bares es la productora fundada por{" "}
                <b>Juan José Campanella</b>, uno de los directores más premiados
                del cine argentino.
                <br />
                En 2021, Campanella inauguró el <b>Teatro Politeama</b>, con más
                de 700 butacas y tecnología de última generación.
              </p>
            </div>
            {/* Estadísticas */}
            <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 px-4 md:px-0">
              <div className="relative rounded-[16px] flex flex-col items-center justify-center overflow-hidden aspect-square min-w-[90px] min-h-[90px]">
                <span
                  className="absolute inset-0 z-0 pointer-events-none rounded-[16px]"
                  style={{
                    padding: 2,
                    background:
                      "linear-gradient(105.13deg, #E8E8E8 5.84%, #000000 92.28%)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
                <span className="relative z-10 estadistica-numero text-white">
                  15
                </span>
                <span className="relative z-10 text-white/70 text-xs text-center">
                  Países recorridos
                </span>
              </div>
              <div className="relative bg-black/40 rounded-[16px] flex flex-col items-center justify-center overflow-hidden aspect-square min-w-[90px] min-h-[90px]">
                <span
                  className="absolute inset-0 z-0 pointer-events-none rounded-[16px]"
                  style={{
                    padding: 2,
                    background:
                      "linear-gradient(105.13deg, #E8E8E8 5.84%, #000000 92.28%)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
                <span className="relative z-10 estadistica-numero text-white">
                  26
                </span>
                <span className="relative z-10 text-white/70 text-xs text-center">
                  Premios internacionales
                </span>
              </div>
              <div className="relative bg-black/40 rounded-[16px] flex flex-col items-center justify-center overflow-hidden aspect-square min-w-[90px] min-h-[90px]">
                <span
                  className="absolute inset-0 z-0 pointer-events-none rounded-[16px]"
                  style={{
                    padding: 2,
                    background:
                      "linear-gradient(105.13deg, #E8E8E8 5.84%, #000000 92.28%)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
                <span className="relative z-10 estadistica-numero text-white">
                  17
                </span>
                <span className="relative z-10 text-white/70 text-xs text-center">
                  Series filmadas
                </span>
              </div>
              <div className="relative bg-black/40 rounded-[16px] flex flex-col items-center justify-center overflow-hidden aspect-square min-w-[90px] min-h-[90px]">
                <span
                  className="absolute inset-0 z-0 pointer-events-none rounded-[16px]"
                  style={{
                    padding: 2,
                    background:
                      "linear-gradient(105.13deg, #E8E8E8 5.84%, #000000 92.28%)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
                <span className="relative z-10 estadistica-numero text-white">
                  7
                </span>
                <span className="relative z-10 text-white/70 text-xs text-center">
                  Películas realizadas
                </span>
              </div>
            </div>
          </div>
          {/* Segunda fila: imagen y premios */}
          {/* SOLO MOBILE: Bloque compacto con foto y obras reconocidas */}
          <div className="md:hidden w-full flex flex-col items-center">
            <div className="relative left-1/2 right-1/2 -translate-x-1/2 w-screen">
              <img
                src="/images/campanella.png"
                alt="Juan José Campanella"
                className="w-screen max-w-none h-[180px] object-cover object-top rounded-t-xl md:border-2 md:border-[linear-gradient(98.35deg,#3F3F3F_2.51%,#4C3C3C_100%)] md:shadow-[0px_4px_15px_0px_rgba(0,0,0,0.57)]"
              />
            </div>
            <div className="w-full flex justify-center">
              <div className="px-4 py-5 w-full max-w-[420px]">
                <h4 className="text-white text-sm font-semibold mb-6 text-center mt-4">Entre sus obras más reconocidas están:</h4>
                <ul className="flex flex-col gap-4 mx-auto">
                  <li className="flex gap-3 items-center">
                    <img src="/images/oscar.png" alt="Óscar" className="w-8 h-8 object-contain" />
                    <div className="flex flex-col items-start text-left">
                      <div>
                        <span className="font-bold text-yellow-400 text-base">El secreto de sus ojos</span>
                        <span className="text-white/60 text-sm"> (2009)</span>
                      </div>
                      <div className="text-white/80 text-xs">Oscar a Mejor película extranjera</div>
                    </div>
                  </li>
                  <li className="flex gap-3 items-center border-t border-white/10 pt-4">
                    <img src="/images/trofeo.png" alt="Goya" className="w-8 h-8 object-contain" />
                    <div className="flex flex-col items-start text-left">
                      <div>
                        <span className="font-bold text-white text-base">Metegol</span>
                        <span className="text-white/60 text-sm"> (2013)</span>
                      </div>
                      <div className="text-white/80 text-xs">Goya a mejor película de Animación</div>
                    </div>
                  </li>
                  <li className="flex gap-3 items-center border-t border-white/10 pt-4">
                    <img src="/images/trofeo.png" alt="Goya" className="w-8 h-8 object-contain" />
                    <div className="flex flex-col items-start text-left">
                      <div>
                        <span className="font-bold text-white text-base">Luna de Avellaneda</span>
                        <span className="text-white/60 text-sm"> (2004)</span>
                      </div>
                      <div className="text-white/80 text-xs">Goya a mejor película extranjera</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* DESKTOP: Sección original */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-stretch mt-8 md:mt-12 px-4 md:px-0">
            {/* Imagen de Campanella */}
            <img
              src="/images/campanella.png"
              alt="Juan José Campanella"
              className="md:col-span-3 w-full h-[200px] md:h-[300px] object-cover rounded-[16px] border-2 border-[linear-gradient(98.35deg,#3F3F3F_2.51%,#4C3C3C_100%)] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.57)]"
            />
            {/* Premios */}
            <div className="md:col-span-2 w-full flex flex-col gap-2 justify-center h-auto md:h-[300px]">
              <h4 className="font-inter-tight font-bold text-[16px] md:text-[18px] leading-[158%] tracking-[0%] text-white mb-2">
                Entre sus obras más reconocidas están:
              </h4>
              <ul className="text-white/90 text-sm flex flex-col gap-2">
                <li className="flex gap-2 md:gap-3 items-start pb-3 border-b border-white/10">
                  <img src="/images/oscar.png" alt="Óscar" className="w-6 h-5 md:w-10 md:h-10 mt-1 object-contain" />
                  <div>
                    <span className="font-inter-tight font-extrabold text-[16px] md:text-[18px] leading-[158%] tracking-[0%] text-white inline-block">El secreto de sus ojos</span>
                    <span className="font-inter-tight font-normal text-[16px] md:text-[18px] leading-[158%] tracking-[0%] text-white/60"> (2009)</span>
                    <div className="font-inter-tight font-normal text-[14px] md:text-[18px] leading-[158%] tracking-[0%] text-white/60">Óscar a Mejor película extranjera</div>
                  </div>
                </li>
                <li className="flex gap-2 md:gap-3 items-start pb-3 border-b border-white/10">
                  <img src="/images/trofeo.png" alt="Goya" className="w-6 h-5 md:w-10 md:h-10 mt-1 object-contain" />
                  <div>
                    <span className="font-inter-tight font-extrabold text-[16px] md:text-[18px] leading-[158%] tracking-[0%] text-white inline-block">Metegol</span>
                    <span className="font-inter-tight font-normal text-[16px] md:text-[18px] leading-[158%] tracking-[0%] text-white/60"> (2013)</span>
                    <div className="font-inter-tight font-normal text-[14px] md:text-[18px] leading-[158%] tracking-[0%] text-white/60">Goya a mejor película de Animación</div>
                  </div>
                </li>
                <li className="flex gap-2 md:gap-3 items-start">
                  <img src="/images/trofeo.png" alt="Goya" className="w-6 h-5 md:w-10 md:h-10 mt-1 object-contain" />
                  <div>
                    <span className="font-inter-tight font-extrabold text-[16px] md:text-[18px] leading-[158%] tracking-[0%] text-white inline-block">Luna de Avellaneda</span>
                    <span className="font-inter-tight font-normal text-[16px] md:text-[18px] leading-[158%] tracking-[0%] text-white/60"> (2004)</span>
                    <div className="font-inter-tight font-normal text-[14px] md:text-[18px] leading-[158%] tracking-[0%] text-white/60">Goya a mejor película extranjera</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Placeholder de video */}
        <div className="w-full flex pt-16 justify-center mb-12 md:mb-18 px-8 md:px-0">
          <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/video.png"
              alt="Video placeholder"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-black/60 rounded-full p-4 md:p-6 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="24" fill="white" fillOpacity="0.85"/>
                  <polygon points="20,16 34,24 20,32" fill="#A82817" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        {/* Fin placeholder de video */}

        {/* Tipos de experiencias */}
        <div className="max-w-7xl w-full mx-auto mt-16 md:mt-28 py-10 md:py-20 px-4 md:px-0">
          <h4
            className="text-white mb-8 md:mb-16 text-center font-inter-tight font-bold text-[18px] leading-[106%] tracking-[0%] md:text-[24px] md:leading-[124%]"
          >
            ¿Qué tipo de experiencias vas a vivir?
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {/* Obra de teatro */}
            <div className="flex flex-col items-center py-6 md:py-10">
              <img
                src="/images/mascaras.png"
                alt="Creaciones participativas"
                className="w-16 h-16 md:w-20 md:h-20 object-contain mb-3 md:mb-4"
              />
              <span className="text-white font-semibold text-[20px] md:text-[24px] leading-[124%] tracking-[0%] text-center font-inter-tight mb-4 md:mb-6">
                Obras de teatro
              </span>
              <ul className="experiencia-info w-full text-white/70 flex flex-col gap-1 text-center font-inter-tight font-light text-[14px] leading-[144%] tracking-[0%]">
                <li className="border-b border-white/10 pb-1 mb-1">
                  Acceso a todas las fechas del programa anual
                </li>
                <li className="border-b border-white/10 pb-1 mb-1">
                  Entradas gratis a espectáculos
                </li>
                <li>Lorem ipsum</li>
              </ul>
            </div>
            {/* Eventos presenciales */}
            <div className="flex flex-col items-center py-6 md:py-10">
              <img
                src="/images/calendario.png"
                alt="Creaciones participativas"
                className="w-16 h-16 md:w-20 md:h-20 object-contain mb-3 md:mb-4"
              />
              <span className="text-white font-semibold text-[20px] md:text-[24px] leading-[124%] tracking-[0%] text-center font-inter-tight mb-4 md:mb-6">
                Eventos presenciales
              </span>
              <ul className="experiencia-info w-full text-white/70 flex flex-col gap-1 text-center font-inter-tight font-light text-[14px] leading-[144%] tracking-[0%]">
                <li className="border-b border-white/10 pb-1 mb-1">
                  Charlas post-funciones
                </li>
                <li className="border-b border-white/10 pb-1 mb-1">
                  Lorem ipsum
                </li>
                <li>Lorem ipsum</li>
              </ul>
            </div>
            {/* Formación profesional */}
            <div className="flex flex-col items-center py-6 md:py-10">
              <img
                src="/images/pelicula.png"
                alt="Creaciones participativas"
                className="w-16 h-16 md:w-20 md:h-20 object-contain mb-3 md:mb-4"
              />
              <span className="text-white font-semibold text-[20px] md:text-[24px] leading-[124%] tracking-[0%] text-center font-inter-tight mb-4 md:mb-6">
                Formación profesional
              </span>
              <ul className="experiencia-info w-full text-white/70 flex flex-col gap-1 text-center font-inter-tight font-light text-[14px] leading-[144%] tracking-[0%]">
                <li className="border-b border-white/10 pb-1 mb-1">
                  Masterclass con{" "}
                  <span className="text-white font-bold">
                    Campanella y Sacheri
                  </span>
                </li>
                <li className="border-b border-white/10 pb-1 mb-1">
                  Zooms exclusivos con creadores
                </li>
                <li>Programas filmados y encuentros con elencos</li>
              </ul>
            </div>
            {/* Creaciones participativas */}
            <div className="flex flex-col items-center py-6 md:py-10">
              <img
                src="/images/grupo.png"
                alt="Creaciones participativas"
                className="w-16 h-16 md:w-20 md:h-20 object-contain mb-3 md:mb-4"
              />
              <span className="text-white font-semibold text-[20px] md:text-[24px] leading-[124%] tracking-[0%] text-center font-inter-tight mb-4 md:mb-6">
                Creaciones participativas
              </span>
              <ul className="experiencia-info w-full text-white/70 flex flex-col gap-1 text-center font-inter-tight font-light text-[14px] leading-[144%] tracking-[0%]">
                <li className="border-b border-white/10 pb-1 mb-1">
                  Acceso a ensayos y etapas de producción
                </li>
                <li className="border-b border-white/10 pb-1 mb-1">
                  Participación en{" "}
                  <span className="text-white font-bold">
                    «Domicilio desconocido»
                  </span>
                </li>
                <li>
                  Participación en{" "}
                  <span className="text-white font-bold">
                    «Empieza con D Reloaded»
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
