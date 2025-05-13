'use client'
import React, { useRef, useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const categorias = [
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
];

function Card({ card }) {
  return (
    <div
      className="rounded-xl p-3 flex flex-col border border-white/10 flex-1 min-w-[280px] min-h-[340px]"
      style={{
        background: 'linear-gradient(180deg, #F5F5F5 0%, #E9E9E9 100%)',
        boxShadow: '0px 10px 15px 0px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="relative mb-3 rounded-lg overflow-hidden h-[180px] flex items-center justify-center bg-black/20">
        {card.imagen && (
          <img src={card.imagen} alt={card.titulo} className="object-cover w-full h-full" />
        )}
        {card.badge && (
          <span
            style={{
              background: 'linear-gradient(180deg, #A82817 0%, #F9614D 100%)',
              fontFamily: 'Inter Tight',
              fontWeight: 700,
              fontSize: 14,
              lineHeight: '176%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: '#fff',
              padding: '2px 12px',
              borderRadius: '9999px',
              position: 'absolute',
              top: 8,
              right: 8,
            }}
          >
            {card.badge}
          </span>
        )}
      </div>
      <div className="flex-1 flex flex-col">
        <span
          style={{
            fontFamily: 'Inter Tight',
            fontWeight: 700,
            fontSize: 20,
            lineHeight: '106%',
            letterSpacing: 0,
            color: 'rgba(0,0,0,1)'
          }}
          className="mb-1 line-clamp-2"
        >
          {card.titulo}
        </span>
        <span
          style={{
            fontFamily: 'Inter Tight',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '134%',
            letterSpacing: 0,
            color: 'rgba(0,0,0,1)'
          }}
          className="line-clamp-3"
        >
          {card.descripcion}
        </span>
      </div>
    </div>
  );
}

function MobileCarousel({ cards }) {
  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);

  // Detectar el slide activo
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.firstChild?.offsetWidth || 1;
    const scrollLeft = el.scrollLeft;
    const idx = Math.round(scrollLeft / (cardWidth + 16)); // 16 = gap-4
    setActive(idx);
  };

  return (
    <>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 -mx-4 px-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="snap-center flex-shrink-0 w-[85vw] max-w-xs"
            style={{ minWidth: '85vw' }}
          >
            <Card card={card} />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-2">
        {cards.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${active === i ? 'bg-white' : 'bg-white/40'} transition-all`}
            style={{ display: 'inline-block' }}
          />
        ))}
      </div>
    </>
  );
}

export default function Programa2025() {
  return (
    <section className="w-full py-16 flex flex-col items-center bg-gradient-to-br from-black via-neutral-900 to-[#2D2D2D] min-h-[80vh]">
      <div className="max-w-7xl w-full mx-auto px-4">
        <h2
          style={{
            fontFamily: 'Inter Tight',
            fontWeight: 700,
            fontSize: 36,
            lineHeight: '106%',
            letterSpacing: 0,
            color: 'rgba(255,255,255,1)'
          }}
          className="text-center md:text-left mt-8 mb-18 md:mt-12 md:mb-16"
          id="programa"
        >
          Programa 2025
        </h2>
        <div className="flex flex-col gap-10">
          {categorias.map((cat, idx) => (
            <div key={cat.titulo} className="flex flex-col gap-3 w-full">
              <div
                className="flex items-center justify-between mb-2 px-1 border-t border-b py-4"
                style={{ borderColor: "rgba(109, 109, 109, 1)" }}
              >
                <div className="flex items-center gap-2 md:gap-4">
                  <img src={cat.icono} alt={cat.titulo} className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                  <span
                    style={{
                      fontFamily: 'Inter Tight',
                      fontWeight: 600,
                      letterSpacing: 0,
                      color: 'rgba(255,255,255,1)'
                    }}
                    className="text-base md:text-2xl leading-[124%] whitespace-normal md:whitespace-nowrap"
                  >
                    {cat.titulo}
                  </span>
                </div>
                {cat.verMas && (
                  <button
                    className="flex items-center gap-1 hover:underline text-sm md:text-2xl leading-[124%] flex-shrink-0 ml-2"
                    style={{
                      fontFamily: 'Inter Tight',
                      fontWeight: 600,
                      letterSpacing: 0,
                      color: 'rgba(255,255,255,1)'
                    }}
                  >
                    Ver más <FiChevronRight className="text-base md:text-2xl" />
                  </button>
                )}
              </div>
              {/* Carrusel en mobile */}
              <div className="block sm:hidden">
                <MobileCarousel cards={cat.cards} />
              </div>
              {/* Grilla en desktop/tablet */}
              <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                {cat.cards.map((card, i) => (
                  <Card card={card} key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 