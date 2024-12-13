import Image from "next/image";
import "./globals.css";
import logo from './imagenes/Captura de pantalla 2024-11-11 085453.png';
import profilePic from './imagenes/imagen.jpg';
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <div className="logo">
              <Image width={100} src={logo} alt="Logo"  />
            </div>
            <ul className="nav-links">
              <li><Link href="/">Home </Link></li>
              <li><Link href="/servicios">Servicios</Link></li>
              <li><Link href="/quienessomos">Quiénes somos?</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
              <li><Link href="/tramitesinfo">Trámites info</Link></li>
            </ul>
            <div className="profile">
              <Image src={profilePic} alt="Perfil" className="profile-pic" />
            </div>
          </nav>
        </header>
        
        {children}

        <section className="features">
          <div className="feature">
            <p>🏆 Gran calidad de servicio</p>
            <span>Por profesionales dedicados</span>
          </div>
          <div className="feature">
            <p>💼 Servicio de confianza</p>
            <span>Más de 10 años</span>
          </div>
          <div className="feature">
            <p>📞 Soporte personalizado</p>
            <span>Para que resuelvas todas tus dudas</span>
          </div>
        </section>
      </body>
    </html>
  );
}
