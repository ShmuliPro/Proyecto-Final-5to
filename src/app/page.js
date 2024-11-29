
import Link from "next/link";
export default function Home() {
  return (
    <>
      <section class="hero">

        <div class="hero-text">
          <h1>INICIA TU TRÁMITE</h1>
          <p>Con Nosotros</p>
          <span class="arrow-down">⬇️</span>
        </div>
      </section>

      <section class="services">
        <div class="service-card">
          <a href="formulariopag1.html">
            <button class="btn-service">TRAMITA TU CIUDADANÍA</button>
          </a>
          <p>Ciudadanías de todo el mundo</p>
        </div>
        <div class="service-card">
          <a href="formulariopag1.html">
            <button class="btn-service">TRAMITA TU VISA</button>
          </a>
          <p>Visas de todo tipo para tus necesidades</p>
        </div>
      </section>

      <section class="info-section">
        <p>¿QUÉ NECESITO ANTES DE HACER CUALQUIERA DE ESTOS TRÁMITES?</p>
       
        <li> <Link href="informacion" class="btn-info">INFÓRMATE</Link></li>
      </section>
    </>
  );
}
