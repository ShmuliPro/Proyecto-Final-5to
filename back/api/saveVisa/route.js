import { NextResponse } from 'next/server';
import { db } from '../../../lib/db';  // Asegúrate de que el archivo lib/db.js esté correctamente configurado

export async function POST(request) {
    try {
        // Obtener los datos enviados desde el formulario (en formato JSON)
        const data = await request.json();

        // Insertar los datos en la base de datos
        const result = await db.query(
            'INSERT INTO visas (nombre, apellido, birth_date, pasaporte, passport_issue_date, lugar_emision, telefono, direccion, codigo_postal, email, social_media, social_platform, social_username, current_job, entidad_educativa, titulo_obtener, año) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)',
            [
                data.nombre,
                data.apellido,
                data.birth_date,
                data.pasaporte,
                data.passport_issue_date,
                data.lugar_emision,
                data.telefono,
                data.direccion,
                data.codigo_postal,
                data.email,
                data.social_media,
                data.social_platform,
                data.social_username,
                data.current_job,
                data.entidad_educativa,
                data.titulo_obtener,
                data.año
            ]
        );

        // Retornar una respuesta exitosa
        return NextResponse.json({ message: 'Datos guardados correctamente', data: result.rows });
    } catch (error) {
        // Manejar errores
        console.error('Error al guardar los datos:', error);
        return NextResponse.json({ message: 'Error al guardar los datos', error: error.message }, { status: 500 });
    }
}