export default function PoliteamaInfo() {
  return (
    <section className="w-full relative py-20 flex flex-col items-center overflow-hidden">
      {/* Gradiente esquina inferior izquierda */}
      <div
        className="pointer-events-none absolute left-0 bottom-0 w-96 h-96 z-0"
        style={{
          background:
            "radial-gradient(circle at left bottom, rgba(168,25,25,0.7) 0%, transparent 70%)",
        }}
      />
      {/* Gradiente esquina superior derecha */}
      <div
        className="pointer-events-none absolute right-0 top-0 w-96 h-96 z-0"
        style={{
          background:
            "radial-gradient(circle at right top, rgba(168,25,25,0.5) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 w-full">
        {/* Título y descripción */}
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4">
              ¿Qué es el Círculo Politeama?
            </h2>
            <p className="text-white/80 text-base mb-6">
              El Círculo Politeama es una membresía anual creada por{" "}
              <b>100Bares</b>, producida de <b>Juan José Campanella</b>, para
              quienes desean ser parte del proceso creativo detrás de las artes
              escénicas.
            </p>
            <p className="text-white/80 text-base">
              Más allá de los espectáculos, es una invitación a vivir de cerca
              el trabajo de los artistas y equipos creativos de los elencos más
              prestigiosos de Argentina.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-white/80 text-base mb-6">
              Formar parte del Círculo es entrar a una comunidad exclusiva, con
              acceso a experiencias únicas y contenido especial sobre el proceso
              creativo de los montajes.
            </p>
            <p className="text-white text-lg font-bold">
              Lo que ves en el escenario es solo una parte. Nosotros te
              mostramos todo lo demás.
            </p>
          </div>
        </div>

        {/* Sobre 100Bares */}
        <div className="pt-28 max-w-7xl w-full mx-auto bg-black/70 rounded-xl mb-16 flex flex-col gap-6">
          {/* Primera fila: texto y estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
            {/* Texto descriptivo */}
            <div className="md:col-span-2">
              <h3 className="text-white mb-2">
                <span class="sobre-100bares">Sobre</span> <span class="sobre-100bares-bold">100Bares</span>
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
            <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-4">
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
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start mt-12">
            {/* Imagen de Campanella */}
            <div
              className="md:col-span-3 w-full h-56 rounded-[16px] flex items-center justify-between overflow-hidden relative borde"
              style={{
                backgroundImage: "url('/images/campanella.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src="/images/100bares.png"
                alt="100 Bares"
                className="h-10 ml-8"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <img
                src="/images/politeama.png"
                alt="Politeama"
                className="h-12 mr-8"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            {/* Premios */}
            <div className="md:col-span-2 w-full flex flex-col gap-2 justify-center">
              <h4 className="text-white text-xs font-semibold mb-2">
                Entre sus obras más reconocidas están:
              </h4>
              <ul className="text-white/90 text-sm flex flex-col gap-2">
                <li className="flex gap-3 items-start pb-3 border-b border-white/10">
                  <img
                    src="/images/oscar.png"
                    alt="Óscar"
                    className="w-8 h-7 mt-1 object-contain"
                  />
                  <div>
                    <span className="font-bold text-yellow-400">
                      El secreto de sus ojos
                    </span>
                    <span className="text-white/60 font-normal"> (2009)</span>
                    <div className="text-white/60 text-xs">
                      Óscar a Mejor película extranjera
                    </div>
                  </div>
                </li>
                <li className="flex gap-3 items-start pb-3 border-b border-white/10">
                  <img
                    src="/images/trofeo.png"
                    alt="Goya"
                    className="w-8 h-7 mt-1 object-contain"
                  />
                  <div>
                    <span className="font-bold text-white">Metegol</span>
                    <span className="text-white/60 font-normal"> (2013)</span>
                    <div className="text-white/60 text-xs">
                      Goya a mejor película de Animación
                    </div>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <img
                    src="/images/trofeo.png"
                    alt="Goya"
                    className="w-8 h-7 mt-1 object-contain"
                  />
                  <div>
                    <span className="font-bold text-white">
                      Luna de Avellaneda
                    </span>
                    <span className="text-white/60 font-normal"> (2004)</span>
                    <div className="text-white/60 text-xs">
                      Goya a mejor película extranjera
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tipos de experiencias */}
        <div className="max-w-7xl w-full mx-auto mt-28">
          <h4 className="experiencia-titulo text-white mb-10">
            ¿Qué tipo de experiencias vas a vivir?
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Obra de teatro */}
            <div className="flex flex-col items-center">
            <img
                src="/images/mascaras.png"
                alt="Creaciones participativas"
                className="w-16 h-16 object-contain mb-4"
              />
              <span className="text-white font-bold text-lg mb-2">
                Obras de teatro
              </span>
              <ul className="experiencia-info w-full text-white/70 flex flex-col gap-1 text-center">
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
            <div className="flex flex-col items-center">
            <img
                src="/images/calendario.png"
                alt="Creaciones participativas"
                className="w-16 h-16 object-contain mb-4"
              />
              <span className="text-white font-bold text-lg mb-2">
                Eventos presenciales
              </span>
              <ul className="experiencia-info w-full text-white/70 flex flex-col gap-1 text-center">
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
            <div className="flex flex-col items-center">
            <img
                src="/images/pelicula.png"
                alt="Creaciones participativas"
                className="w-16 h-16 object-contain mb-4"
              />
              <span className="text-white font-bold text-lg mb-2">
                Formación profesional
              </span>
              <ul className="experiencia-info w-full text-white/70 flex flex-col gap-1 text-center">
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
            <div className="flex flex-col items-center">
              <img
                src="/images/grupo.png"
                alt="Creaciones participativas"
                className="w-16 h-16 object-contain mb-4"
              />
              <span className="text-white font-bold text-lg mb-2">
                Creaciones participativas
              </span>
              <ul className="experiencia-info w-full text-white/70 flex flex-col gap-1 text-center">
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
