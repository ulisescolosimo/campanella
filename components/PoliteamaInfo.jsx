'use client'
import React from 'react'

export default function PoliteamaInfo() {
  return (
    <section className="w-full relative py-10 md:py-20 flex flex-col items-center overflow-hidden bg-black">
      <div
        className="pointer-events-none absolute right-0 top-0 w-[500px] h-[500px] z-0 opacity-30"
        style={{
          background: "radial-gradient(circle at right top, rgba(168,25,25,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] z-0 opacity-30"
        style={{
          background: "radial-gradient(circle at center, rgba(168,25,25,0.1) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 w-full">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-36 mb-10 md:mb-20 px-4 md:px-0">
          <div className="w-fit">
            <h2 id="sobre-100-bares" className="text-white font-inter-tight font-bold text-[18px] leading-[106%] tracking-[0%] text-left md:text-left md:text-2xl sm:md:text-3xl mb-4 md:mb-4">
              Qué es el Círculo Politeama
            </h2>
            <p className="text-white/80 text-[15px] leading-[140%] mb-4 md:mb-6 text-left md:text-left">
              El Círculo Politeama es una membresía anual creada por <b>100Bares</b>, la productora de <b>Juan José Campanella</b>, para quienes aman el cine, el teatro y el proceso creativo detrás de cada obra. Más que entradas a espectáculos, es una invitación a vivir desde adentro la cocina artística de uno de los equipos más prestigiosos de Argentina.
            </p>
            <p className="text-white/80 text-[15px] leading-[140%] mb-4 md:mb-0 text-left md:text-left">
              Formar parte del Círculo es entrar en una comunidad selecta, con acceso a experiencias únicas y contenido exclusivo imposible de conseguir de otra manera.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <img 
              src="/images/politeama.jpg" 
              alt="Teatro Politeama" 
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>

        <div className="max-w-7xl w-full mx-auto mb-20 md:mb-32 px-4 md:px-0">
          <div className="relative w-full rounded-xl overflow-hidden">
            <img 
              src="/images/banner.png" 
              alt="Banner video" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 cursor-pointer hover:bg-white/30 transition-all duration-300">
                <svg 
                  className="w-12 h-12 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl w-full mx-auto mb-20 md:mb-32 px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className=" rounded-xl">
              <h2 className="text-white font-inter-tight font-bold text-[40px] leading-[106%] tracking-[0%] mb-4">
                Sumergite en el mundo <br></br> del cine y el teatro
              </h2>
              <p className="text-white/80 font-inter-tight font-normal text-[18px] leading-[144%] tracking-[0%]">
                Te invitamos a la cocina creativa de todos nuestros proyectos. Una forma de trabajo, una poética, una disciplina, una pasión. Inspirate, nutrí tu vida y tu actividad de esos elementos que te emocionan en la pantalla y el escenario.
              </p>
            </div>
            {/* Caja 01 */}
            <div className="bg-[#303030] border border-[#6C6C6C] rounded-xl p-6 md:p-8">
              <div className="flex flex-col">
                <span className="text-[#F9614D] font-inter-tight font-light text-[24px] leading-[124%] tracking-[0%] mb-4">01</span>
                <h3 className="text-white font-inter-tight font-semibold text-[32px] leading-[124%] tracking-[0%] mb-4">Obras de teatro</h3>
                <div className="text-white/80 font-inter-tight font-light text-[14px] leading-[144%] tracking-[0%] space-y-2">
                  <p>Acceso gratis a todas las actividades del Círculo Politeama</p>
                  <p>Entradas gratis para los espectáculos del teatro Politeama</p>
                  <p>Acceso exclusivo al detrás de escena</p>
                </div>
              </div>
            </div>

            {/* Caja 02 */}
            <div className="bg-[#303030] border border-[#6C6C6C] rounded-xl p-6 md:p-8">
              <div className="flex flex-col">
                <span className="text-[#F9614D] font-inter-tight font-light text-[24px] leading-[124%] tracking-[0%] mb-4">02</span>
                <h3 className="text-white font-inter-tight font-semibold text-[32px] leading-[124%] tracking-[0%] mb-4">Encuentros de creatividad</h3>
                <div className="text-white/80 font-inter-tight font-light text-[14px] leading-[144%] tracking-[0%] space-y-2">
                  <p>Masterclass de Juan José Campanella</p>
                  <p>Charlas con creadores de distintos rubros</p>
                  <p>Acceso exclusivo al proceso creativo de los proyectos en curso</p>
                </div>
              </div>
            </div>

            {/* Caja 03 */}
            <div className="bg-[#303030] border border-[#6C6C6C] rounded-xl p-6 md:p-8">
              <div className="flex flex-col">
                <span className="text-[#F9614D] font-inter-tight font-light text-[24px] leading-[124%] tracking-[0%] mb-4">03</span>
                <h3 className="text-white font-inter-tight font-semibold text-[32px] leading-[124%] tracking-[0%] mb-4">Eventos presenciales</h3>
                <div className="text-white/80 font-inter-tight font-light text-[14px] leading-[144%] tracking-[0%] space-y-2">
                  <p>Encuentros presenciales con artistas de primer nivel</p>
                  <p>Charlas participativas con Juan José Campanella</p>
                  <p>Eventos exclusivos para miembros del Círculo</p>
                </div>
              </div>
            </div>

            {/* Caja 04 */}
            <div className="bg-[#303030] border border-[#6C6C6C] rounded-xl p-6 md:p-8">
              <div className="flex flex-col">
                <span className="text-[#F9614D] font-inter-tight font-light text-[24px] leading-[124%] tracking-[0%] mb-4">04</span>
                <h3 className="text-white font-inter-tight font-semibold text-[32px] leading-[124%] tracking-[0%] mb-4">Creaciones participativas</h3>
                <div className="text-white/80 font-inter-tight font-light text-[14px] leading-[144%] tracking-[0%] space-y-2">
                  <p>Accesos a ensayos y distintas etapas de producción</p>
                  <p>Participación creativa de las obras en producción</p>
                  <p>Creación colectiva del Círculo con función presencial</p>
                </div>
              </div>
            </div>

            {/* Caja 05 */}
            <div className="bg-[#303030] border border-[#6C6C6C] rounded-xl p-6 md:p-8">
              <div className="flex flex-col">
                <span className="text-[#F9614D] font-inter-tight font-light text-[24px] leading-[124%] tracking-[0%] mb-4">05</span>
                <h3 className="text-white font-inter-tight font-semibold text-[32px] leading-[124%] tracking-[0%] mb-4">Beneficios exclusivos</h3>
                <div className="text-white/80 font-inter-tight font-light text-[14px] leading-[144%] tracking-[0%] space-y-2">
                  <p>Meet and Greet con los artistas y la posibilidad de comprar una butaca con tu nombre</p>
                  <p>Regalos de bienvenida y sorteos de memorabilia exclusiva</p>
                  <p>Ubicaciones preferenciales y reconocimiento en mural dentro del teatro</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experiencia Politeama */}
        <div className="max-w-7xl w-full mx-auto px-4 md:px-0">
          <div className="flex w-full h-[400px] md:h-[500px] relative overflow-hidden rounded-xl">
            {/* Fondo con vector y gradiente */}
            <div className="absolute inset-0 flex items-center justify-start pl-4">
              <img 
                src="/images/vector.png" 
                alt="Vector background" 
                className="w-full h-full object-contain opacity-20"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30"></div>
            
            {/* Contenido */}
            <div className="relative z-10 flex w-full h-full">
            {/* Lado izquierdo - Imagen */}
            <div className="w-1/2 h-full">
              <img 
                src="/images/campanella2.png" 
                alt="Juan José Campanella" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Lado derecho - Texto */}
            <div className="w-1/2 h-full flex items-center justify-center p-8">
              <img 
                src="/images/texto.png" 
                alt="Texto experiencia Politeama" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        </div>

        {/* Programa 2025 */}
        <div className="w-full py-16 flex flex-col items-center min-h-[80vh] relative">
          {/* Fondo con imagen */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/background1.png" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="max-w-7xl w-full mx-auto px-4 relative z-10">
            <h2
              style={{
                fontFamily: 'Inter Tight',
                fontWeight: 700,
                fontStyle: 'Bold',
                fontSize: '56px',
                lineHeight: '106%',
                letterSpacing: '0%',
                color: 'rgba(255,255,255,1)'
              }}
              className="text-center md:text-left mt-8 mb-6 md:mt-12 md:mb-8"
              id="programa"
            >
              Programa 2025
            </h2>
            <p 
              className="text-white/80 text-center md:text-left mb-12 md:mb-16 mx-auto md:mx-0"
              style={{
                fontFamily: 'Inter Tight',
                fontWeight: 400,
                fontStyle: 'Regular',
                fontSize: '18px',
                lineHeight: '144%',
                letterSpacing: '0%',
                width: '50%'
              }}
            >
              Una temporada completa de experiencias juntos, estaremos en contacto a lo largo del año de diferentes maneras. Con propuestas participativas online, seguimiento de proyectos, y los grandes encuentros del año con creadores en un programa que te cambiará la forma de ver tu vida.
            </p>
            <div className="flex flex-col gap-10">
              {[
                {
                  titulo: "Obras de teatro",
                  icono: "/images/icon/caretas.png",
                  verMas: true,
                  cards: [
                    {
                      titulo: "Parque Lezama: Una década de éxito",
                      descripcion: "Junto a Brandoni y Blanco, conoceremos los detalles de una obra que forma parte de la historia del teatro argentino y su pasaje al cine.",
                      imagen: "/images/obras/1.png",
                      badge: "Junio",
                    },
                    {
                      titulo: "Domicilio Desconocido: Nueva obra",
                      descripcion: "Te invitamos a ser parte de la cocina creativa del nuevo proyecto de Juan José Campanella y su equipo. Viví todo el proceso hasta llegar al estreno.",
                      imagen: "/images/obras/2.png",
                      badge: "Julio",
                    },
                    {
                      titulo: "Empieza con D Reloaded",
                      descripcion: "Te invitamos a una función muy especial. Donde los actores darán una charla abierta al final y con muchas sorpresas en el escenario.",
                      imagen: "/images/obras/3.png",
                      badge: "Noviembre",
                    },
                  ],
                },
                {
                  titulo: "Formación profesional",
                  icono: "/images/icon/cinta.png",
                  verMas: true,
                  cards: [
                    {
                      titulo: "Campanella x Campanella",
                      descripcion: "El proceso creativo de sus proyectos en una clase magistral donde nos develerá todos sus secretos.",
                      imagen: "/images/formacion/4.png",
                      badge: "Mayo",
                    },
                    {
                      titulo: "Eduardo Sacheri: Cine y literatura",
                      descripcion: "Un autor acostumbrado a ver sus historias en la pantalla grande, nos cuenta como es ese proceso de creación.",
                      imagen: "/images/formacion/5.png",
                      badge: "Junio",
                    },
                    {
                      titulo: "Inside Law and Order",
                      descripcion: "En exclusiva desde New York, Juan Campanella nos invita a conocer como se hace la serie record de la televisión americana.",
                      imagen: "/images/formacion/6.png",
                      badge: "Septiembre",
                    },
                  ],
                },
                {
                  titulo: "Eventos presenciales",
                  icono: "/images/icon/calendario.png",
                  verMas: true,
                  cards: [
                    {
                      titulo: "Francella: Actor de toda la cancha",
                      descripcion: "Un momento íntimo con un Ícono del cine que muestra su versatilidad y talento en cada proyecto que encarna.",
                      imagen: "/images/eventos/7.png",
                      badge: "Mayo",
                    },
                    {
                      titulo: "Emilio Kauderer y la camerata Bariloche",
                      descripcion: "Emilio Kauderer , autor de todos los éxitos de 100 Bares y junto a la Camerata Bariloche, nos brindará una noche orquestal repasando grandes melodias.",
                      imagen: "/images/eventos/8.png",
                      badge: "Agosto",
                    },
                    {
                      titulo: "Natalia Oreiro: Una vida de película",
                      descripcion: "El encanto y carisma de Natalia Oreiro en una charla intima donde conoceremos los detalles de una vida inigualable.",
                      imagen: "/images/eventos/9.png",
                      badge: "Octubre",
                    },
                  ],
                },
                {
                  titulo: "Creaciones participativas",
                  icono: "/images/icon/grupo.png",
                  verMas: true,
                  cards: [
                    {
                      titulo: "Domicilio Desconocido: Nueva obra",
                      descripcion: "Te invitamos a ser parte de la cocina creativa del nuevo proyecto de Juan José Campanella y su equipo. Viví todo el proceso hasta llegar al estreno.",
                      imagen: "/images/creaciones/10.png",
                      badge: null,
                    },
                    {
                      titulo: "Empieza con D Reloaded",
                      descripcion: "Te invitamos a una función muy especial. Donde los actores darán una charla abierta al final y con muchas sorpresas en el escenario.",
                      imagen: "/images/creaciones/11.png",
                      badge: "Noviembre",
                    },
                    {
                      titulo: "Acceso a ensayos y producción",
                      descripcion: "Lorem Ipsum dolot sit amet. Lorem Ipsum dolot sit amet. Lorem Ipsum dolot sit amet.",
                      imagen: "/images/creaciones/12.png",
                      badge: null,
                    },
                  ],
                },
              ].map((cat, idx) => (
                <div key={cat.titulo} className="flex flex-col gap-3 w-full">
                  {/* Grilla en desktop/tablet */}
                  <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                    {cat.cards.map((card, i) => (
                      <div
                        key={i}
                        className="rounded-xl overflow-hidden flex flex-col min-w-[280px] min-h-[400px]"
                        style={{
                          boxShadow: '0px 10px 15px 0px rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        {/* Sección superior - Ilustración */}
                        <div className="relative h-[250px] flex items-center justify-center">
                          {card.imagen && (
                            <img src={card.imagen} alt={card.titulo} className="object-cover w-full h-full" />
                          )}
                        </div>
                        
                        {/* Sección inferior - Contenido de texto */}
                        <div className="bg-black p-4 flex-1 flex flex-col">
                          {/* Badge de categoría */}
                          <div className="mb-3">
                            <span
                              className="inline-block px-3 py-1 border border-white text-white uppercase tracking-wide"
                              style={{
                                fontFamily: 'Inter Tight',
                                fontWeight: 400,
                                fontStyle: 'Regular',
                                fontSize: '13px',
                                lineHeight: '134%',
                                letterSpacing: '0%',
                                borderRadius: '8px'
                              }}
                            >
                              {cat.titulo}
                            </span>
                          </div>
                          
                          {/* Título */}
                          <h3
                            style={{
                              fontFamily: 'Inter Tight',
                              fontWeight: 700,
                              fontStyle: 'Bold',
                              fontSize: '20px',
                              lineHeight: '106%',
                              letterSpacing: '0%',
                              color: 'rgba(255,255,255,1)'
                            }}
                            className="mb-3 line-clamp-2"
                          >
                            {card.titulo}
                          </h3>
                          
                          {/* Descripción */}
                          <p
                            style={{
                              fontFamily: 'Inter Tight',
                              fontWeight: 400,
                              fontStyle: 'Regular',
                              fontSize: '16px',
                              lineHeight: '134%',
                              letterSpacing: '0%',
                              color: 'rgba(255,255,255,0.8)'
                            }}
                            className="line-clamp-3"
                          >
                            {card.descripcion}
                          </p>
                          

                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Carrusel en mobile */}
                  <div className="block sm:hidden">
                    <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 -mx-4 px-4">
                      {cat.cards.map((card, i) => (
                        <div
                          key={i}
                          className="snap-center flex-shrink-0 w-[85vw] max-w-xs"
                          style={{ minWidth: '85vw' }}
                        >
                          <div
                            className="rounded-xl overflow-hidden flex flex-col min-w-[280px] min-h-[400px]"
                            style={{
                              boxShadow: '0px 10px 15px 0px rgba(0, 0, 0, 0.1)'
                            }}
                          >
                            {/* Sección superior - Ilustración */}
                            <div className="relative h-[250px] flex items-center justify-center">
                              {card.imagen && (
                                <img src={card.imagen} alt={card.titulo} className="object-cover w-full h-full" />
                              )}
                            </div>
                            
                            {/* Sección inferior - Contenido de texto */}
                            <div className="bg-black p-4 flex-1 flex flex-col">
                              {/* Badge de categoría */}
                              <div className="mb-3">
                                <span
                                  className="inline-block px-3 py-1 border border-white text-white uppercase tracking-wide"
                                  style={{
                                    fontFamily: 'Inter Tight',
                                    fontWeight: 400,
                                    fontStyle: 'Regular',
                                    fontSize: '13px',
                                    lineHeight: '134%',
                                    letterSpacing: '0%',
                                    borderRadius: '8px'
                                  }}
                                >
                                  {cat.titulo}
                                </span>
                              </div>
                              
                              {/* Título */}
                              <h3
                                style={{
                                  fontFamily: 'Inter Tight',
                                  fontWeight: 700,
                                  fontStyle: 'Bold',
                                  fontSize: '20px',
                                  lineHeight: '106%',
                                  letterSpacing: '0%',
                                  color: 'rgba(255,255,255,1)'
                                }}
                                className="mb-3 line-clamp-2"
                              >
                                {card.titulo}
                              </h3>
                              
                              {/* Descripción */}
                              <p
                                style={{
                                  fontFamily: 'Inter Tight',
                                  fontWeight: 400,
                                  fontStyle: 'Regular',
                                  fontSize: '16px',
                                  lineHeight: '134%',
                                  letterSpacing: '0%',
                                  color: 'rgba(255,255,255,0.8)'
                                }}
                                className="line-clamp-3"
                              >
                                {card.descripcion}
                              </p>
                              

                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Beneficios exclusivos */}
        <div className="w-full py-16 md:py-32 bg-black">
          <div className="max-w-7xl w-full mx-auto px-4">
            <h2
              style={{
                fontFamily: 'Inter Tight',
                fontWeight: 700,
                fontStyle: 'Bold',
                fontSize: '56px',
                lineHeight: '106%',
                letterSpacing: '0%',
                color: 'rgba(255,255,255,1)'
              }}
              className="text-center md:text-left mb-12 md:mb-16"
            >
              Beneficios<br />exclusivos
            </h2>
            
            {/* Carrusel de productos */}
            <div className="relative">
              {/* Flechas de navegación */}
              <button 
                onClick={() => {
                  const container = document.getElementById('beneficios-carousel');
                  if (container) {
                    container.scrollBy({ left: -350, behavior: 'smooth' });
                  }
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              </button>
              <button 
                onClick={() => {
                  const container = document.getElementById('beneficios-carousel');
                  if (container) {
                    container.scrollBy({ left: 350, behavior: 'smooth' });
                  }
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                </svg>
              </button>
              
              {/* Contenedor del carrusel */}
              <div 
                id="beneficios-carousel"
                className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 px-4 scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {/* Producto 1 - Taza de bienvenida */}
                <div className="snap-center flex-shrink-0 w-[280px] md:w-[320px]">
                  <div className="bg-[#303030] rounded-xl p-6 flex flex-col items-center hover:bg-[#404040] transition-all duration-300">
                    <div className="w-full h-[200px] rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <img 
                        src="/images/productos/taza.png" 
                        alt="Taza de bienvenida" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3
                      style={{
                        fontFamily: 'Inter Tight',
                        fontWeight: 700,
                        fontStyle: 'Bold',
                        fontSize: '18px',
                        lineHeight: '144%',
                        letterSpacing: '0%',
                        color: 'rgba(255,255,255,1)'
                      }}
                      className="text-left w-full"
                    >
                      Taza de bienvenida
                    </h3>
                  </div>
                </div>
                
                {/* Producto 2 - Kit Creatividad */}
                <div className="snap-center flex-shrink-0 w-[280px] md:w-[320px]">
                  <div className="bg-[#303030] rounded-xl p-6 flex flex-col items-center hover:bg-[#404040] transition-all duration-300">
                    <div className="w-full h-[200px]  rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <img 
                        src="/images/productos/agenda.png" 
                        alt="Kit Creatividad" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3
                      style={{
                        fontFamily: 'Inter Tight',
                        fontWeight: 700,
                        fontStyle: 'Bold',
                        fontSize: '18px',
                        lineHeight: '144%',
                        letterSpacing: '0%',
                        color: 'rgba(255,255,255,1)'
                      }}
                      className="text-left w-full"
                    >
                      Kit Creatividad
                    </h3>
                  </div>
                </div>
                
                {/* Producto 3 - Remeras */}
                <div className="snap-center flex-shrink-0 w-[280px] md:w-[320px]">
                  <div className="bg-[#303030] rounded-xl p-6 flex flex-col items-center hover:bg-[#404040] transition-all duration-300">
                    <div className="w-full h-[200px]  rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <img 
                        src="/images/productos/remera.png" 
                        alt="Remeras" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3
                      style={{
                        fontFamily: 'Inter Tight',
                        fontWeight: 700,
                        fontStyle: 'Bold',
                        fontSize: '18px',
                        lineHeight: '144%',
                        letterSpacing: '0%',
                        color: 'rgba(255,255,255,1)'
                      }}
                      className="text-left w-full"
                    >
                      Remeras
                    </h3>
                  </div>
                </div>
                
                {/* Producto 4 - Diploma de membresía */}
                <div className="snap-center flex-shrink-0 w-[280px] md:w-[320px]">
                  <div className="bg-[#303030] rounded-xl p-6 flex flex-col items-center hover:bg-[#404040] transition-all duration-300">
                    <div className="w-full h-[200px] rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <img 
                        src="/images/productos/firma.png" 
                        alt="Diploma de membresía" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3
                      style={{
                        fontFamily: 'Inter Tight',
                        fontWeight: 700,
                        fontStyle: 'Bold',
                        fontSize: '18px',
                        lineHeight: '144%',
                        letterSpacing: '0%',
                        color: 'rgba(255,255,255,1)'
                      }}
                      className="text-left w-full"
                    >
                      Diploma de membresía
                    </h3>
                  </div>
                </div>

                {/* Repetición de productos para carrusel infinito */}
                {/* Producto 1 - Taza de bienvenida (duplicado) */}
                <div className="snap-center flex-shrink-0 w-[280px] md:w-[320px]">
                  <div className="bg-[#303030] rounded-xl p-6 flex flex-col items-center hover:bg-[#404040] transition-all duration-300">
                    <div className="w-full h-[200px]  rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <img 
                        src="/images/productos/taza.png" 
                        alt="Taza de bienvenida" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3
                      style={{
                        fontFamily: 'Inter Tight',
                        fontWeight: 700,
                        fontStyle: 'Bold',
                        fontSize: '18px',
                        lineHeight: '144%',
                        letterSpacing: '0%',
                        color: 'rgba(255,255,255,1)'
                      }}
                      className="text-left w-full"
                    >
                      Taza de bienvenida
                    </h3>
                  </div>
                </div>
                
                {/* Producto 2 - Kit Creatividad (duplicado) */}
                <div className="snap-center flex-shrink-0 w-[280px] md:w-[320px]">
                  <div className="bg-[#303030] rounded-xl p-6 flex flex-col items-center hover:bg-[#404040] transition-all duration-300">
                    <div className="w-full h-[200px] rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <img 
                        src="/images/productos/agenda.png" 
                        alt="Kit Creatividad" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3
                      style={{
                        fontFamily: 'Inter Tight',
                        fontWeight: 700,
                        fontStyle: 'Bold',
                        fontSize: '18px',
                        lineHeight: '144%',
                        letterSpacing: '0%',
                        color: 'rgba(255,255,255,1)'
                      }}
                      className="text-left w-full"
                    >
                      Kit Creatividad
                    </h3>
                  </div>
                </div>
                
                {/* Producto 3 - Remeras (duplicado) */}
                <div className="snap-center flex-shrink-0 w-[280px] md:w-[320px]">
                  <div className="bg-[#303030] rounded-xl p-6 flex flex-col items-center hover:bg-[#404040] transition-all duration-300">
                    <div className="w-full h-[200px]  rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <img 
                        src="/images/productos/remera.png" 
                        alt="Remeras" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3
                      style={{
                        fontFamily: 'Inter Tight',
                        fontWeight: 700,
                        fontStyle: 'Bold',
                        fontSize: '18px',
                        lineHeight: '144%',
                        letterSpacing: '0%',
                        color: 'rgba(255,255,255,1)'
                      }}
                      className="text-left w-full"
                    >
                      Remeras
                    </h3>
                  </div>
                </div>
                
                {/* Producto 4 - Diploma de membresía (duplicado) */}
                <div className="snap-center flex-shrink-0 w-[280px] md:w-[320px]">
                  <div className="bg-[#303030] rounded-xl p-6 flex flex-col items-center hover:bg-[#404040] transition-all duration-300">
                    <div className="w-full h-[200px]  rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <img 
                        src="/images/productos/firma.png" 
                        alt="Diploma de membresía" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3
                      style={{
                        fontFamily: 'Inter Tight',
                        fontWeight: 700,
                        fontStyle: 'Bold',
                        fontSize: '18px',
                        lineHeight: '144%',
                        letterSpacing: '0%',
                        color: 'rgba(255,255,255,1)'
                      }}
                      className="text-left w-full"
                    >
                      Diploma de membresía
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nueva sección debajo de productos */}
        <div className="w-full bg-black py-16 md:py-16">
          <div className="max-w-7xl w-full mx-auto flex flex-col gap-10 md:gap-10">
            {/* Primer div horizontal */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16 items-start">
              <div className="md:col-span-2 px-4 md:px-0">
                <h3 className="text-white mb-4 font-inter-tight font-bold text-[56px] leading-[106%] tracking-[0%]">
                  Sobre <br></br> 100BARES
                </h3>
                <p className="text-white/80 text-base mb-4" style={{
                  fontFamily: 'Inter Tight',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '16px',
                  lineHeight: '158%',
                  letterSpacing: '0%'
                }}>
                  100Bares es la productora fundada por <b>Juan José Campanella</b>, uno de los directores más premiados del cine argentino.
                </p>
                <p className="text-white/80 text-base" style={{
                  fontFamily: 'Inter Tight',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '16px',
                  lineHeight: '158%',
                  letterSpacing: '0%'
                }}>
                  En 2022, Campanella inauguró el <b>Teatro Politeama</b>, con más de 700 butacas y tecnología de última generación.
                </p>
              </div>
              <div className="md:col-span-3 px-4 md:px-0">
                {/* Cards de estadísticas */}
                <div className="grid grid-cols-4 gap-4 w-full">
                  <div className="relative rounded-[16px] flex flex-col items-center justify-center overflow-hidden aspect-square min-w-[90px] min-h-[90px] bg-[#303030] border border-[#8E8E8E] p-4">
                    <span className="relative z-10 text-white mb-2" style={{
                      fontFamily: 'Inter Tight',
                      fontWeight: 700,
                      fontStyle: 'Bold',
                      fontSize: '55px',
                      lineHeight: '109%',
                      letterSpacing: '0%'
                    }}>
                      08
                    </span>
                    <span className="relative z-10 text-white/70 text-center" style={{
                      fontFamily: 'Inter Tight',
                      fontWeight: 300,
                      fontStyle: 'Light',
                      fontSize: '16px',
                      lineHeight: '109%',
                      letterSpacing: '0%',
                      textAlign: 'center'
                    }}>
                      Películas realizadas
                    </span>
                  </div>
                  <div className="relative bg-[#303030] border border-[#8E8E8E] rounded-[16px] flex flex-col items-center justify-center overflow-hidden aspect-square min-w-[90px] min-h-[90px] p-4">
                    <span className="relative z-10 text-white mb-2" style={{
                      fontFamily: 'Inter Tight',
                      fontWeight: 700,
                      fontStyle: 'Bold',
                      fontSize: '55px',
                      lineHeight: '109%',
                      letterSpacing: '0%'
                    }}>
                      28
                    </span>
                    <span className="relative z-10 text-white/70 text-center" style={{
                      fontFamily: 'Inter Tight',
                      fontWeight: 300,
                      fontStyle: 'Light',
                      fontSize: '16px',
                      lineHeight: '109%',
                      letterSpacing: '0%',
                      textAlign: 'center'
                    }}>
                      Premios internacionales
                    </span>
                  </div>
                  <div className="relative bg-[#303030] border border-[#8E8E8E] rounded-[16px] flex flex-col items-center justify-center overflow-hidden aspect-square min-w-[90px] min-h-[90px] p-4">
                    <span className="relative z-10 text-white mb-2" style={{
                      fontFamily: 'Inter Tight',
                      fontWeight: 700,
                      fontStyle: 'Bold',
                      fontSize: '55px',
                      lineHeight: '109%',
                      letterSpacing: '0%'
                    }}>
                      17
                    </span>
                    <span className="relative z-10 text-white/70 text-center" style={{
                      fontFamily: 'Inter Tight',
                      fontWeight: 300,
                      fontStyle: 'Light',
                      fontSize: '16px',
                      lineHeight: '109%',
                      letterSpacing: '0%',
                      textAlign: 'center'
                    }}>
                      Series filmadas
                    </span>
                  </div>
                  <div className="relative bg-[#303030] border border-[#8E8E8E] rounded-[16px] flex flex-col items-center justify-center overflow-hidden aspect-square min-w-[90px] min-h-[90px] p-4">
                    <span className="relative z-10 text-white mb-2" style={{
                      fontFamily: 'Inter Tight',
                      fontWeight: 700,
                      fontStyle: 'Bold',
                      fontSize: '55px',
                      lineHeight: '109%',
                      letterSpacing: '0%'
                    }}>
                      15
                    </span>
                    <span className="relative z-10 text-white/70 text-center" style={{
                      fontFamily: 'Inter Tight',
                      fontWeight: 300,
                      fontStyle: 'Light',
                      fontSize: '16px',
                      lineHeight: '109%',
                      letterSpacing: '0%',
                      textAlign: 'center'
                    }}>
                      Países recorridos
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Segundo div horizontal */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
              <div className="w-full md:w-2/5 px-4 md:px-0">
                {/* Espacio vacío o contenido futuro */}
              </div>
              <div className="w-full md:w-3/5 px-4 md:px-0 flex gap-20">
                <div className="mb-6 w-1/3">
                  <h3 className="text-white mb-4 font-inter-tight font-bold text-[36px] leading-[113%] tracking-[0%]">
                    Premios destacados
                  </h3>
                  <p className="text-white/80 text-base" style={{
                    fontFamily: 'Inter Tight',
                    fontWeight: 400,
                    fontStyle: 'Regular',
                    fontSize: '16px',
                    lineHeight: '158%',
                    letterSpacing: '0%'
                  }}>
                    100Bares es la productora fundada por <b>Juan José Campanella</b>, uno de los directores más premiados del cine argentino.
                  </p>
                </div>
                {/* Lista de premios */}
                <div className="flex flex-col gap-4 w-2/3">
                  <div className="flex gap-3 items-center pb-3 border-b border-white/10">
                    <img src="/images/oscar.png" alt="Óscar" className="w-8 h-8 object-contain" />
                    <div className="flex flex-col items-start text-left">
                      <div>
                        <span className="font-bold text-yellow-400 text-base">El secreto de sus ojos</span>
                        <span className="text-white/60 text-sm"> (2009)</span>
                      </div>
                      <div className="text-white/80 text-xs">Oscar a Mejor película extranjera</div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center pb-3 border-b border-white/10">
                    <img src="/images/trofeo.png" alt="Goya" className="w-8 h-8 object-contain" />
                    <div className="flex flex-col items-start text-left">
                      <div>
                        <span className="font-bold text-white text-base">Metegol</span>
                        <span className="text-white/60 text-sm"> (2013)</span>
                      </div>
                      <div className="text-white/80 text-xs">Goya a mejor película de Animación</div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <img src="/images/trofeo.png" alt="Goya" className="w-8 h-8 object-contain" />
                    <div className="flex flex-col items-start text-left">
                      <div>
                        <span className="font-bold text-white text-base">Luna de Avellaneda</span>
                        <span className="text-white/60 text-sm"> (2004)</span>
                      </div>
                      <div className="text-white/80 text-xs">Goya a mejor película extranjera</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
