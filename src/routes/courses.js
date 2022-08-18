const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/edit/:id', courseController.edit);
router.put('/:id', courseController.update);
router.patch('/restore/:id', courseController.restore);
router.delete('/:id', courseController.destroy);
router.delete('/force/:id', courseController.forceDestroy);
router.get('/:slug', courseController.show);

module.exports = router;
