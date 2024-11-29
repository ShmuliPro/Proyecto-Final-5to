import './servicios.css';

export default function Servicios() {
    return (
        <>
            <main>
                <section class="hero">
                    <h1>SERVICIOS</h1>
                </section>

                <section class="services-container">
                    <div class="service-item">
                        <h2>SERVICIOS VISAS</h2>
                        <p>Visas para Estados Unidos, Canadá, China, India, Australia, permisos para ingreso a Nueva Zelanda, Estados Unidos con pasaporte Europeo</p>
                        <div class="icons">
                            <img src="imagenes/estadosu.jpg" alt="USA" />
                            <img src="imagenes/canada.png" alt="Canadá" />
                            <img src="imagenes/bandera china.png" alt="China" />
                            <img src="imagenes/india.png" alt="India" />
                            <img src="imagenes/australia.png" alt="Australia" />
                            <img src="imagenes/nuevazelanda.png" alt="Nueva Zelanda" />
                            <img src="imagenes/onu.png" alt="Unión Europea" />
                        </div>
                    </div>

                    <div class="service-item">
                        <h2>VISAS DE ESTUDIO</h2>
                        <p>Estados Unidos, Europa, Australia</p>
                        <div class="icons">
                            <img src="imagenes/estadosu.jpg" alt="USA" />
                            <img src="imagenes/onu.png" alt="Europa" />
                            <img src="imagenes/australia.png" alt="Australia" />
                        </div>
                    </div>

                    <div class="service-item">
                        <h2>SERVICIOS CIUDADANÍAS</h2>
                        <p>Ciudadanías Europeas</p>
                        <div class="icons">
                            <img src="imagenes/onu.png" alt="Unión Europea" />
                        </div>
                        <p>Apostillas, pedidos de partidas, solicitud de turnos consulares</p>
                    </div>

                    <div class="service-item">
                        <h2>SERVICIO COMPLETO</h2>
                        <p>Se realiza son todos los trámites previos a las entrevistas que son personales. Confecciono el formulario Ds-160, genero el pago los aranceles y coordino los turnos. Una vez que aprueban la visa, es avisado para retirar.</p>
                        <p>Retiro y entrega de documentación y cobros a domicilio</p>
                        <h1>Para más info contactese directamente con nosotros
                            <img class="imagenwpp" src="imagenes/wpp.jpg" alt="WhatsApp" />
                        </h1>
                    </div>
                </section>
            </main>
        </>
    );
}

