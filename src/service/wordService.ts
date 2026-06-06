import pool from '../config/database';
import { Category } from '../models/category';
import { Word } from '../models/word';

export class WordService {
    static async initTable() {
        const sql = `
      CREATE TABLE IF NOT EXISTS words (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        id_category INT NOT NULL,
        creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

        await pool.query(sql);
    }

    static async criateWord(name: string, idCategory: number): Promise<Word> {
        const sql = 'INSERT INTO words (name, id_category) VALUES ($1, $2) RETURNING *';
        const values = [name, idCategory];
        const { rows } = await pool.query(sql, values);
        return rows[0];
    }

    static async criateWordList(words: any[], idCategory: number): Promise<void> {
        const sql = 'INSERT INTO words (name, id_category) VALUES ($1, $2) RETURNING *';

        for (var i = 0; i < words.length; i++) {
            const values = [words[i].name, idCategory];
            await pool.query(sql, values);
        }
    }

    static async editWord(name: string, id: number): Promise<Word[]> {
        const sql = 'UPDATE words set name = $1 where id = $2';
        const values = [name, id];
        const { rows } = await pool.query(sql, values);
        return rows;
    }

    static async findWordAll(): Promise<Category[]> {
        const { rows } = await pool.query('SELECT * FROM words ORDER BY id ASC');
        return rows;
    }

    static async findWordBycategory(idCategory: number): Promise<Word[]> {
        const sql = 'SELECT * FROM words where id_category = $1';
        const values = [idCategory];
        const { rows } = await pool.query(sql, values);
        return rows;
    }
}