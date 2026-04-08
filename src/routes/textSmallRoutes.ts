import { Router } from 'express';
import { createTextSmall, getTextSmalls } from '../controllers/textSmallController';

const router = Router();

router.post('/', createTextSmall);
router.get('/', getTextSmalls);


export default router;