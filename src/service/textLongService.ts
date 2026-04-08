import pool from '../config/database';
import { TextLong } from '../models/textLong';


export class TextLongService {
    static async initTable() {
        const sql = `
      CREATE TABLE IF NOT EXISTS text_longs (
        id SERIAL PRIMARY KEY,
        value VARCHAR(1000) NOT NULL,
        creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

        await pool.query(sql);
    }

    static async criateTextLong(value: string): Promise<TextLong> {
        const sql = 'INSERT INTO text_longs (value) VALUES ($1) RETURNING *';
        const values = [value];
        const { rows } = await pool.query(sql, values);
        return rows[0];
    }

    static async findTextLongAll(): Promise<TextLong[]> {
        const { rows } = await pool.query('SELECT * FROM text_longs ORDER BY id ASC');
        return rows;
    }
}