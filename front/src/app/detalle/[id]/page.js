'use client'

import axios from 'axios';
import './formulariovisas.css';
import { redirect, useParams } from 'next/navigation'
import { useEffect, useState } from 'react';

export default function FormularioVisas() {
    const [visa, setVisa] = useState({});

    const {id} = useParams();
    useEffect(() => {
        axios.get('http://localhost:4000/api/visas/' + id).then((response) => {
            setVisa(response.data);
        });
    }, []);

    return (
        <>
            <main>
                <section className="hero">
                    <h1>VISA TRÁMITE NUMERO 1234</h1>
                </section>

                <section className="form-container">
                    <h2>Llena el formulario con tus datos</h2>
                    <form >
                        {/* Información básica */}
                        <div className="form-row">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" value={visa.nombre} disabled id="nombre" name="nombre" required />
                        </div>
                        <div className="form-row">
                            <label htmlFor="apellido">Apellido</label>
                            <input type="text"  value={visa.apellido} disabled id="apellido" name="apellido" required />
                        </div>
                        <div className="form-row">
                            <label htmlFor="fecha-nacimiento">Fecha nacimiento</label>
                            <input type="text"  value={visa.birth_date} disabled id="fecha-nacimiento" name="birth_date" required />
                        </div>
                        <div className="form-row">
                            <label htmlFor="pasaporte">Número de pasaporte</label>
                            <input type="text" value={visa.pasaporte} disabled id="pasaporte" name="pasaporte" required />
                        </div>
                        <div className="form-row">
                            <label htmlFor="fecha-emisionp">Fecha emisión pasaporte</label>
                            <input type="text" value={visa.passport_issue_date} disabled id="fecha-emisionp" name="passport_issue_date" required />
                        </div>
                        <div className="form-row">
                            <label htmlFor="lugar-emision">Lugar de emisión pasaporte</label>
                            <select value={visa.lugar_emision} disabled id="lugar-emision" name="lugar_emision" required>
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
                            <input value={visa.telefono} disabled type="text" id="telefono" name="telefono" required />
                        </div>
                        <div className="form-row">
                            <label htmlFor="direccion">Dirección</label>
                            <input value={visa.direccion} disabled type="text" id="direccion" name="direccion" required />
                        </div>
                        <div className="form-row">
                            <label htmlFor="codigo-postal">Código postal</label>
                            <input value={visa.codigo_postal} disabled type="text" id="codigo-postal" name="codigo_postal" required />
                        </div>
                        <div className="form-row">
                            <label htmlFor="email">Dirección email</label>
                            <input value={visa.email}  disabled type="email" id="email" name="email" required />
                        </div>

                        <div className="form-row">
                            <label>¿Usa redes sociales?</label>
                            <input disabled type="text" value={visa.social_media ? "SI" : "NO"} />
                        </div>
                        <div className="form-row">
                            <label htmlFor="social_platform">Red social</label>
                            <input
                                disabled
                                value={visa.social_platform}
                                type="text"
                                id="social_platform"
                                name="social_platform"
                                placeholder="Ej. Instagram"
                            />
                            <label htmlFor="social_username">Usuario</label>
                            <input
                            disabled
                            value={visa.social_username}
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
                            disabled
                            value={visa.current_job}
                                id="current_job"
                                name="current_job"
                                placeholder="Detalles del trabajo actual..."
                            ></textarea>
                        </div>

                        {/* Estudiantes */}
                        <div className="form-row">
                            <label>Si es estudiante, entidad educativa, año y título a obtener:</label>
                            <input value={visa.entidad_educativa} disabled type="text" name="entidad_educativa" placeholder="Entidad educativa" />
                            <input  value={visa.titulo_obtener} disabled type="text" name="titulo_obtener" placeholder="Título a obtener" />
                            <input  value={visa.año} disabled type="number" name="anio" placeholder="Año" min="1900" max="2100" />
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
}
