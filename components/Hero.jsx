export default function Hero() {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="./images/fondo-hero.jpg"
          alt="Fondo hero"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay degradado */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#A81919]/80 via-black/80 to-[#2D2D2D]/80" />
      </div>
      {/* Contenido del hero */}
      <div className="relative z-10 flex flex-col items-center w-full px-4 gap-20">
        <span className="hero-autor text-white mb-4 mt-8">
          Juan José Campanella
        </span>

        {/* Versión móvil - solo visible en móvil */}
        <div className="md:hidden w-full">
          <h1 className="text-center text-white font-light mb-6" style={{lineHeight: '1.05'}}>
            <span className="inline-flex items-center" style={{marginBottom: '-8px', display: 'inline-flex'}}>
              <span className="hero-la" style={{
                fontSize: '38px',
                lineHeight: '1.44',
                display: 'inline-block',
                verticalAlign: 'middle'
              }}>La</span>
              <span className="font-ms-madi text-white ml-1 text-[62px] md:text-[150px]" style={{
                lineHeight: '1.44',
                letterSpacing: '0px',
                fontWeight: '400',
                display: 'inline-block',
                verticalAlign: 'middle'
              }}>experiencia</span>
            </span>
            <br />
            <span>
              <span className="hero-detras" style={{
                fontSize: '38px',
                lineHeight: '1.44',
                display: 'inline-block',
                verticalAlign: 'middle',
                fontWeight: '700',
                marginRight: '0.25em'
              }}>detrás</span>
              <span className="hero-detras" style={{
                fontSize: '38px',
                lineHeight: '1.44',
                display: 'inline-block',
                verticalAlign: 'middle',
                fontWeight: '400'
              }}>del telón</span>
            </span>
          </h1>
        </div>

        {/* Versión desktop - oculta en móvil */}
        <div className="hidden md:block">
          <h1 className="text-center text-white font-light mb-6" style={{lineHeight: '1.05'}}>
            <span className="inline-flex items-center" style={{marginBottom: '-51px', display: 'inline-flex'}}>
              <span className="hero-la">La</span>
              <span className="font-ms-madi text-white ml-4 text-[150px]" style={{
                lineHeight: '1.44',
                letterSpacing: '0px',
                fontWeight: '400',
                display: 'inline-block',
                verticalAlign: 'middle'
              }}>experiencia</span>
            </span>
            <br />
            <span>
              <span className="hero-detras font-bold">detrás</span>
              <span className="hero-detras font-normal"> del telón</span>
            </span>
          </h1>
        </div>

        <div className="hero-categorias flex flex-wrap justify-center gap-x-4 gap-y-2 text-white opacity-90 mb-8 text-[14px] md:text-[20px] tracking-[0.1em] md:tracking-[0.15em]" style={{
          fontFamily: 'Inter Tight',
          fontWeight: 300,
          lineHeight: '109%',
          textAlign: 'center',
          textTransform: 'uppercase'
        }}>
          <span className="px-1 md:px-0">TEATRO</span>
          <span className="hidden md:inline">|</span>
          <span className="px-1 md:px-0">CINE</span>
          <span className="hidden md:inline">|</span>
          <span className="px-1 md:px-0">BACKSTAGE</span>
          <span className="hidden md:inline">|</span>
          <span className="px-1 md:px-0">ENSAYOS</span>
          <span className="hidden md:inline">|</span>
          <span className="px-1 md:px-0">CHARLAS</span>
          <span className="hidden md:inline">|</span>
          <span className="px-1 md:px-0">PRODUCCIÓN</span>
        </div>
      </div>
    </section>
  );
}
