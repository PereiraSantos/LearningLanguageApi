import { Request, Response, NextFunction } from 'express';
import { CategoryService } from '../service/categoryService';

export const createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        await CategoryService.initTable();
        var category = await CategoryService.criateCategory(body.name);

        res.status(201).json(category);
    } catch (error) {
        next(error);
    }
};

export const editCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        await CategoryService.initTable();
        var category = await CategoryService.editCategory(body.name, body.id);

        res.status(201).json(category);
    } catch (error) {
        next(error);
    }
};

export const getCategorys = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await CategoryService.initTable();
        const category = await CategoryService.findCategoryAll();
        res.json(category);
    } catch (error) {
        next(error);
    }
};
