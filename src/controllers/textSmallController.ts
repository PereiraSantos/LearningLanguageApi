import { Request, Response, NextFunction } from 'express';
import { TextSmallService } from '../service/textSmallService';

export const createTextSmall = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        const values = { words: body.value };
        await TextSmallService.initTable();
        await TextSmallService.criateTextSmall(body.value);

        res.status(201).json(values);
    } catch (error) {
        next(error);
    }
};

export const getTextSmalls = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await TextSmallService.initTable();
        const values = await TextSmallService.findTextSmallAll();
        res.json(values);
    } catch (error) {
        next(error);
    }
};
