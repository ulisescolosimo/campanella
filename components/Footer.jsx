import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-4" style={{background: 'linear-gradient(90deg, #A81919 0%, #000000 51.92%, #2D2D2D 100%)'}}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-10 px-4">
        <span className="footer-text text-white opacity-80">© 2023. Todos los derechos reservados.</span>
        <nav className="flex items-center space-x-6">
          <Link href="#" className="footer-text text-white opacity-80 hover:underline">Términos y condiciones</Link>
          <Link href="#" className="footer-text text-white opacity-80 hover:underline">Privacidad</Link>
        </nav>
      </div>
    </footer>
  );
} 