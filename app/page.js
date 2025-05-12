import Image from "next/image";
import PoliteamaInfo from "../components/PoliteamaInfo";

export default function Home() {
  return (
    <>
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
          <span className="hero-autor text-white mb-4 mt-8">Juan José Campanella</span>
          <h1 className="text-center text-white font-light mb-6">
            <span className="inline-flex items-center">
              <span className="hero-la">La</span>
              <span className="msmadi-script text-white ml-4">experiencia</span>
            </span>
            <br />
            <span>
              <span className="hero-detras font-bold">detrás</span>
              <span className="hero-detras font-normal"> del telón</span>
            </span>
          </h1>
          <div className="hero-categorias flex flex-wrap justify-center gap-x-4 gap-y-2 text-white opacity-90 mb-8">
            <span>Teatro</span>
            <span>|</span>
            <span>Cine</span>
            <span>|</span>
            <span>Backstage</span>
            <span>|</span>
            <span>Ensayos</span>
            <span>|</span>
            <span>Charlas</span>
            <span>|</span>
            <span>Producción</span>
          </div>
        </div>
      </section>
      <PoliteamaInfo />
    </>
  );
}
