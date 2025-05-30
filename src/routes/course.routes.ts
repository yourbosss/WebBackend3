import { Router } from 'express';
import { 
  getCourses, 
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  toggleFavorite
} from '../controllers/course.controller';
import { authenticateToken } from '../middleware/authenticateToken';
import multer from 'multer';

const router = Router();
const upload = multer({ dest: 'uploads/' });

router.get('/', getCourses);
router.get('/:id', getCourse);

router.post(
  '/',
  authenticateToken,
  upload.single('image'),
  createCourse
);

router.put(
  '/:id',
  authenticateToken,
  upload.single('image'),
  updateCourse
);

router.delete(
  '/:id',
  authenticateToken,
  deleteCourse
);

router.post(
  '/:id/favorite',
  authenticateToken,
  toggleFavorite
);

export default router;