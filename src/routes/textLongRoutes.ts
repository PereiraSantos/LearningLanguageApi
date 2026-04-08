import { Router } from 'express';
import { createTextLong, getTextLongs } from '../controllers/textLongController';

const router = Router();

router.post('/', createTextLong);
router.get('/', getTextLongs);


export default router;