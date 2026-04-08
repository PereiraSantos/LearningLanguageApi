import { Request, Response, NextFunction } from 'express';
import { TextLongService } from '../service/textLongService';

export const createTextLong = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        await TextLongService.initTable();
        var values = await TextLongService.criateTextLong(body.value);

        res.status(201).json(values);
    } catch (error) {
        next(error);
    }
};

export const getTextLongs = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await TextLongService.initTable();
        const values = await TextLongService.findTextLongAll();
        res.json(values);
    } catch (error) {
        next(error);
    }
};
