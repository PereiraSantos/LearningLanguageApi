import { Router } from 'express';
import { createCategory, editCategory, getCategorys } from '../controllers/categoryController';

const router = Router();

router.post('/', createCategory);
router.put('/', editCategory);
router.get('/', getCategorys);


export default router;