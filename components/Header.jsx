import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-black py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-12 px-4">
        {/* Logos a la izquierda */}
        <div className="flex items-center space-x-6">
          {/* Logo 100 BARES */}
          <div className="flex items-center gap-2 mt-4">
            <Image src="/images/100bares.png" alt="100 Bares" width={88} height={28} className="mb-1" />
            <Image src="/images/politeama.png" alt="Politeama" width={24} height={28} className="mb-2" />
          </div>          
        </div>
        {/* Menú a la derecha */}
        <nav className="flex items-center space-x-8">
          <Link href="#" className="menu-link">Sobre 100 Bares</Link>
          <Link href="#" className="menu-link">Programa</Link>
          <Link href="#" className="menu-link">Membresías</Link>
        </nav>
      </div>
    </header>
  );
} 