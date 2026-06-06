import { Router } from 'express';
import { getWords, getWordByCategory, createWordList, editWord } from '../controllers/wordController';

const router = Router();

router.post('/', createWordList);
router.put('/', editWord);
router.get('/', getWords);
router.get('/category', getWordByCategory);

export default router;