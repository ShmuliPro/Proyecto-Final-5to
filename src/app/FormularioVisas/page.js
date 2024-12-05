'use client'

import './formulariovisas.css';
//import supabase from '../config/supabaseClient';

export default function FormularioVisas() {
    const enviarForm = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        // Do a bit of work to convert the entries to a plain JS object
        const value = Object.fromEntries(data.entries());

        console.log(value);
    };

    return (
        <>
            <main>
                <section className="hero">
                    <h1>VISA TRÁMITE</h1>
                </section>

                <section className="form-container">
                    <h2>Llena el formulario con tus datos</h2>
                    <form onSubmit={enviarForm}>
                        {/* Información básica */}
                        <div className="form-row">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id="nombre" name="nombre" required />
                        </div>
                        <div className="form-row">
                            <label htmlFor="apellido">Apellido</label>
                            <input type="text" id="apellido" name="apellido" required />
                        </div>
                        <div className="form-row">
                            <label htmlFor="fecha-nacimiento">Fecha nacimiento</label>
                            <input type="date" id="fecha-nacimiento" name="birth_date" required />
                        </div>
                        <div className="form-row">
                            <label htmlFor="pasaporte">Número de pasaporte</label>
                            <input type="text" id="pasaporte" name="pasaporte" required />
                        </div>
                        <div className="form-row">
                            <label htmlFor="fecha-emisionp">Fecha emisión pasaporte</label>
                            <input type="date" id="fecha-emisionp" name="passport_issue_date" required />
                        </div>
                        <div className="form-row">
                            <label htmlFor="lugar-emision">Lugar de emisión pasaporte</label>
                            <select id="lugar-emision" name="lugar-emision" required>
                                <option value="" disabled selected>
                                    Seleccione un lugar...
                                </option>
                                <option value="Ciudad 1">Ciudad 1</option>
                                <option value="Ciudad 2">Ciudad 2</option>
                                <option value="Ciudad 3">Ciudad 3</option>
                                <option value="Ciudad 4">Ciudad 4</option>
                                <option value="Ciudad 5">Ciudad 5</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <label htmlFor="telefono">Teléfono celular</label>
                            <input type="text" id="telefono" name="telefono" required />
                        </div>
                        <div className="form-row">
                            <label htmlFor="direccion">Dirección</label>
                            <input type="text" id="direccion" name="direccion" required />
                        </div>
                        <div className="form-row">
                            <label htmlFor="codigo-postal">Código postal</label>
                            <input type="text" id="codigo-postal" name="codigo-postal" required />
                        </div>
                        <div className="form-row">
                            <label htmlFor="email">Dirección email</label>
                            <input type="email" id="email" name="email" required />
                        </div>

                        {/* Redes sociales */}
                        <div className="form-row">
                            <label>¿Usa redes sociales?</label>
                            <input type="radio" id="social_yes" name="social_media" value="Sí" />
                            <label htmlFor="social_yes">Sí</label>
                            <input type="radio" id="social_no" name="social_media" value="No" />
                            <label htmlFor="social_no">No</label>
                        </div>
                        <div className="form-row">
                            <label htmlFor="social_platform">Red social</label>
                            <input
                                type="text"
                                id="social_platform"
                                name="social_platform"
                                placeholder="Ej. Instagram"
                            />
                            <label htmlFor="social_username">Usuario</label>
                            <input
                                type="text"
                                id="social_username"
                                name="social_username"
                                placeholder="@usuario"
                            />
                        </div>

                        {/* Trabajo actual */}
                        <div className="form-row">
                            <label htmlFor="current_job">Trabajo actual</label>
                            <textarea
                                id="current_job"
                                name="current_job"
                                placeholder="Detalles del trabajo actual..."
                            ></textarea>
                        </div>

                        {/* Estudiantes */}
                        <div className="form-row">
                            <label>Si es estudiante, entidad educativa, año y título a obtener:</label>
                            <input type="text" name="entidad_educativa" placeholder="Entidad educativa" />
                            <input type="text" name="titulo_obtener" placeholder="Título a obtener" />
                            <input type="number" name="año" placeholder="Año" min="1900" max="2100" />
                        </div>

                        <div className="form-row">
                            <button type="submit">Finalizar formulario</button>
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
}
