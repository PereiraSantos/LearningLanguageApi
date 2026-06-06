import { Request, Response, NextFunction } from 'express';
import { Word } from '../models/word';
import { WordService } from '../service/wordService';

export const createWord = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        const word: Word = { id: Date.now(), name: body.name, id_category: body.idCategory };
        await WordService.initTable();
        await WordService.criateWord(body.name, body.idCategory);
        res.status(201).json(word);
    } catch (error) {
        next(error);
    }
};

export const createWordList = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        const word = { words: body.words, id_category: body.idCategory };
        await WordService.initTable();
        await WordService.criateWordList(body.words, body.idCategory);
        res.status(201).json(word);
    } catch (error) {
        next(error);
    }
};

export const editWord = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        await WordService.initTable();
        let word = await WordService.editWord(body.word, body.id);
        res.status(201).json(word);
    } catch (error) {
        next(error);
    }
};

export const getWords = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await WordService.initTable();
        const word = await WordService.findWordAll();
        res.json(word);
    } catch (error) {
        next(error);
    }
};

export const getWordByCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        const word = await WordService.findWordBycategory(body.idCategory);
        res.json(word);
    } catch (error) {
        next(error);
    }
};
