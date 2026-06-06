import pool from '../config/database';
import { Category } from '../models/category';
import { WordService } from './wordService';

export class CategoryService {
    static async initTable() {
        const sql = `
      CREATE TABLE IF NOT EXISTS categorys (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

        await pool.query(sql);
    }

    static async criateCategory(name: string): Promise<Category> {
        const sql = 'INSERT INTO categorys (name) VALUES ($1) RETURNING *';
        const values = [name];
        const { rows } = await pool.query(sql, values);
        return rows[0];
    }

    static async editCategory(name: string, id: number): Promise<Category> {
        const sql = 'UPDATE categorys set name = $1 where id = $2';
        const values = [name, id];
        const { rows } = await pool.query(sql, values);
        return rows[0];
    }

    static async findCategoryAll(): Promise<Category[]> {

        const { rows } = await pool.query('SELECT * FROM categorys ORDER BY id ASC');
        for (var i = 0; i < rows.length; i++) {
            var words = await WordService.findWordBycategory(rows[i]['id']);
            rows[i].words = words;
        }

        return rows;
    }
}