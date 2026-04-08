import { Router } from 'express';
import { getWords, getWordByCategory, createWordList } from '../controllers/wordController';

const router = Router();

router.post('/', createWordList);
router.get('/', getWords);
router.post('/category', getWordByCategory);

export default router;