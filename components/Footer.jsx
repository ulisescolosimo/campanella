import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-6 md:py-4" style={{background: 'linear-gradient(90deg, #A81919 0%, #000000 51.92%, #2D2D2D 100%)'}}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 px-4">
        <span className="footer-text text-white opacity-80 text-sm md:text-base text-center md:text-left order-2 md:order-1">
          © 2023. Todos los derechos reservados.
        </span>
        <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-6 order-1 md:order-2">
          <Link 
            href="#" 
            className="footer-text text-white opacity-80 hover:underline text-sm md:text-base text-center"
          >
            Términos y condiciones
          </Link>
          <Link 
            href="#" 
            className="footer-text text-white opacity-80 hover:underline text-sm md:text-base text-center"
          >
            Privacidad
          </Link>
        </nav>
      </div>
    </footer>
  );
} 