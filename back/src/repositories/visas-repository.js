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

    /*getByIdAsync = async (id) => {
        const client = new Client(config);
        await client.connect();

        try {
            let sql = `
            SELECT 
                e.id, e.name, e.description, e.id_event_category, 
                e.id_event_location, e.start_date, e.duration_in_minutes, 
                e.price, e.enabled_for_enrollment, e.max_assistance, 
                e.id_creator_user,
                el.id AS event_location_id, el.id_location, el.name AS location_name, 
                el.full_address, el.max_capacity, el.latitude AS location_latitude, 
                el.longitude AS location_longitude,
                l.id AS location_id, l.name AS location_name, l.id_province, 
                l.latitude AS province_latitude, l.longitude AS province_longitude,
                p.id AS province_id, p.name AS province_name, p.full_name AS province_full_name,
                u.id AS creator_user_id, u.first_name AS creator_first_name, 
                u.last_name AS creator_last_name, u.username AS creator_username, 
                u.password AS creator_password,
                ec.id AS event_category_id, ec.name AS event_category_name, 
                ec.display_order AS event_category_display_order
            FROM 
                events AS e
            left JOIN 
                event_locations AS el ON e.id_event_location = el.id
            left JOIN 
                locations AS l ON el.id_location = l.id
            left JOIN 
                provinces AS p ON l.id_province = p.id
            left JOIN 
                users AS u ON e.id_creator_user = u.id
            left JOIN 
                event_categories AS ec ON e.id_event_category = ec.id
            WHERE 
                e.id = $1`;

        const values = [id];
        const result = await client.query(sql, values);
        const eventData = result.rows[0];

            if (!eventData) {
                return null;
            }

            const event = {
                id: eventData.id,
                name: eventData.name,
                description: eventData.description,
                id_event_category: eventData.id_event_category,
                id_event_location: eventData.id_event_location,
                start_date: eventData.start_date,
                duration_in_minutes: eventData.duration_in_minutes,
                price: eventData.price,
                enabled_for_enrollment: eventData.enabled_for_enrollment,
                max_assistance: eventData.max_assistance,
                creator_user: {
                    id: eventData.creator_user_id,
                    first_name: eventData.creator_first_name,
                    last_name: eventData.creator_last_name,
                    username: eventData.creator_username,
                    password: eventData.creator_password,
                },
                event_location: {
                    id: eventData.event_location_id,
                    id_location: eventData.id_location,
                    name: eventData.location_name,
                    full_address: eventData.full_address,
                    max_capacity: eventData.max_capacity,
                    latitude: eventData.location_latitude,
                    longitude: eventData.location_longitude,
                    location: {
                        id: eventData.location_id,
                        name: eventData.location_name,
                        id_province: eventData.id_province,
                        latitude: eventData.province_latitude,
                        longitude: eventData.province_longitude,
                        province: {
                            id: eventData.province_id,
                            name: eventData.province_name,
                            full_name: eventData.province_full_name,
                        },
                    },
                },
                event_category: {
                    id: eventData.event_category_id,
                    name: eventData.event_category_name,
                    display_order: eventData.event_category_display_order,
                },
            };

            return event;
        } finally {
            await client.end();
        }
    };

    createAsync = async (body, token) => {

        let payloadOriginal = null;
        try {
            payloadOriginal = jwt.verify(token, secretKey);
        } catch (error) {
            console.error("Error verifying JWT:", error);
            return ["Unauthorized", 401];
        }

        const getMaxCapacity = async (id_event_location) => {
            const client = new Client(config);
            await client.connect();
            try {
                const query = `
              SELECT max_capacity
              FROM event_locations
              WHERE id = $1`;

                const values = [id_event_location];
                const result = await client.query(query, values);

                if (result.rows.length > 0) {
                    return result.rows[0].max_capacity;
                } else {
                    throw new Error(
                        `Event location with ID ${id_event_location} not found`
                    );
                }
            } catch (error) {
                console.error("Error getting max capacity:", error);
                throw error;
            } finally {
                await client.end();
            }
        };

        const client = new Client(config);
        await client.connect();
        try {
            const { name, description, id_event_category, id_event_location, start_date, duration_in_minutes, price, enabled_for_enrollment, max_assistance } = body;

            if (!name || !description || name.length < 3 || description.length < 3) {
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
            }

            const id_creator_user = payloadOriginal.id;

            const sql1 = `SELECT id FROM public.events ORDER BY id DESC limit 1;`;
            const result1 = await client.query(sql1);
            const lastEvent = result1.rows[0];
            const newEventId = lastEvent ? lastEvent.id + 1 : 1;

            const query = `
          INSERT INTO events (name, description, id_event_category, id_event_location, start_date, duration_in_minutes, price, enabled_for_enrollment, max_assistance, id_creator_user, id)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      `;
            const values = [
                name,
                description,
                id_event_category,
                id_event_location,
                start_date,
                duration_in_minutes,
                price,
                enabled_for_enrollment,
                max_assistance,
                id_creator_user,
                newEventId,
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
*/

}