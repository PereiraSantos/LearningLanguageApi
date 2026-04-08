import pool from '../config/database';
import { TextSmall } from '../models/textSmall';


export class TextSmallService {
    static async initTable() {
        const sql = `
      CREATE TABLE IF NOT EXISTS text_smalls (
        id SERIAL PRIMARY KEY,
        value VARCHAR(100) NOT NULL,
        creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

        await pool.query(sql);
    }

    static async criateTextSmall(value: any[]): Promise<void> {
        const sql = 'INSERT INTO text_smalls (value) VALUES ($1) RETURNING *';

        for (var i = 0; i < value.length; i++) {
            const values = [value[i]];
            await pool.query(sql, values);
        }
    }

    static async findTextSmallAll(): Promise<TextSmall[]> {

        const { rows } = await pool.query('SELECT * FROM text_smalls ORDER BY id ASC');
        return rows;

    }
}