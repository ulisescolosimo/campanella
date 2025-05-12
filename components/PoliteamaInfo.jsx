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
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
        <div className="pt-16 max-w-6xl w-full mx-auto bg-black/70 rounded-xl mb-16 flex flex-col gap-6">
          {/* Primera fila: texto y estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
            {/* Texto descriptivo */}
            <div className="md:col-span-2">
              <h3 className="text-white text-2xl font-bold mb-2">
                Sobre <span className="font-black">100Bares</span>
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
                <span className="relative z-10 text-3xl text-white font-bold">
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
                <span className="relative z-10 text-3xl text-white font-bold">
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
                <span className="relative z-10 text-3xl text-white font-bold">
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
                <span className="relative z-10 text-3xl text-white font-bold">
                  7
                </span>
                <span className="relative z-10 text-white/70 text-xs text-center">
                  Películas realizadas
                </span>
              </div>
            </div>
          </div>
          {/* Segunda fila: imagen y premios */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
            {/* Imagen de Campanella */}
            <div className="md:col-span-3 w-full h-56 bg-neutral-800 rounded-lg flex items-center justify-center overflow-hidden">
              <span className="text-white/40">Imagen de Campanella</span>
            </div>
            {/* Premios */}
            <div className="md:col-span-2 w-full flex flex-col gap-2 justify-center">
              <h4 className="text-white text-base font-semibold mb-2">
                Entre sus obras más reconocidas están:
              </h4>
              <ul className="text-white/90 text-sm flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <img src="/images/oscar.png" alt="Óscar" className="w-8 h-6 object-contain" />
                  <span>
                    <span className="font-bold text-yellow-300">El secreto de sus ojos</span>{" "}
                    <span className="text-white/60">(2009)</span>
                    <br />
                    <span className="text-white/60">Óscar a Mejor película extranjera</span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <img src="/images/trofeo.png" alt="Goya" className="w-6 h-6 object-contain" />
                  <span>
                    <span className="font-bold">Metegol</span>{" "}
                    <span className="text-white/60">(2013)</span>
                    <br />
                    <span className="text-white/60">Goya a mejor película de Animación</span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <img src="/images/trofeo.png" alt="Goya" className="w-6 h-6 object-contain" />
                  <span>
                    <span className="font-bold">Luna de Avellaneda</span>{" "}
                    <span className="text-white/60">(2004)</span>
                    <br />
                    <span className="text-white/60">Goya a mejor película extranjera</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tipos de experiencias */}
        <div className="max-w-6xl w-full mx-auto mt-12">
          <h4 className="text-white text-xl font-bold text-center mb-10">
            ¿Qué tipo de experiencias vas a vivir?
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-white/40 text-2xl">🎭</span>
              </div>
              <span className="text-white font-semibold mb-2">
                Obra de teatro
              </span>
              <span className="text-white/60 text-xs text-center">
                Lorem ipsum dolor sit amet.
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-white/40 text-2xl">🎫</span>
              </div>
              <span className="text-white font-semibold mb-2">
                Eventos presenciales
              </span>
              <span className="text-white/60 text-xs text-center">
                Lorem ipsum dolor sit amet.
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-white/40 text-2xl">🎓</span>
              </div>
              <span className="text-white font-semibold mb-2">
                Formación profesional
              </span>
              <span className="text-white/60 text-xs text-center">
                Lorem ipsum dolor sit amet.
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-white/40 text-2xl">🤝</span>
              </div>
              <span className="text-white font-semibold mb-2">
                Creaciones participativas
              </span>
              <span className="text-white/60 text-xs text-center">
                Lorem ipsum dolor sit amet.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
