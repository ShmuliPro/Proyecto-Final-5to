import pkg from "pg";
const { Client } = pkg;
import config from "../configs/db-config.js";
const secretKey = "ClaveSecreta3000$";


export default class VisasRepository {

    searchAsync = async (params) => {
        const client = new Client(config);
        await client.connect();

        try {
            let sql = `SELECT * FROM visas`;
            const values = [];
            const conditions = [];

            if (params.email) {
                conditions.push(`email ILIKE $${values.length + 1}`);
                values.push(`%${params.email}%`);
            }

            if (conditions.length > 0) {
                sql += ` WHERE ${conditions.join(" AND ")}`;
            }
            sql += ` ORDER BY email ASC`;

            const result = await client.query(sql, values);
            return result.rows;
        } catch (e) {
            console.log(e);
        } finally {
            await client.end();
        }
    }

    getByIdAsync = async (id) => {
        const client = new Client(config);
        await client.connect();

        try {
            let sql = `SELECT * FROM visas WHERE id = $1`;

        const values = [id];
        const result = await client.query(sql, values);
        const visa = result.rows[0];
            return visa;
        } finally {
            await client.end();
        }
    };

    createAsync = async (body) => {

        const client = new Client(config);
        await client.connect();
        try {
            /*if (!name || !description || name.length < 3 || description.length < 3) {
                return ["Name and description must have at least 3 characters", 400];
            }

            if (max_assistance <= 0) {
                return ["max_assistance must be greater than 0", 400];
            }

            const max_capacity = await getMaxCapacity(id_event_location);

            if (max_assistance > max_capacity) {
                return [`max_assistance (${max_assistance}) cannot be greater than max_capacity (${max_capacity})`, 400];
            }

            if (price < 0 || duration_in_minutes < 0) {
                return ["Price and duration_in_minutes must be greater than or equal to 0", 400];
            }*/

            const query = 'INSERT INTO visas (nombre, apellido, birth_date, pasaporte, passport_issue_date, lugar_emision, telefono, direccion, codigo_postal, email, social_media, social_platform, social_username, current_job, entidad_educativa, titulo_obtener, año) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)';
            const values = [
                body.nombre,
                body.apellido,
                body.birth_date,
                body.pasaporte,
                body.passport_issue_date,
                body.lugar_emision,
                body.telefono,
                body.direccion,
                body.codigo_postal,
                body.email,
                body.social_media === "true",
                body.social_platform,
                body.social_username,
                body.current_job,
                body.entidad_educativa,
                body.titulo_obtener,
                body.anio
            ];

            const result = await client.query(query, values);

            return ["created", 201];
        } catch (error) {
            console.error("Error creating event:", error);
            return [error.message, 500];
        } finally {
            await client.end();
        }
    };

}