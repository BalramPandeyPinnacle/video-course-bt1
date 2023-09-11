const express=require('express');
const router=express.Router();
const coursesControllers= require('../Controllers/courses-controllers')

router.get('/:cId',coursesControllers.getCourseById);

router.get('/title/:title',coursesControllers.getCourseByTitle);
router.post('/',coursesControllers.createCourse);
router.patch('/:cId',coursesControllers.updateCourse);
router.delete('/:cId' ,coursesControllers.deleteCourse);


module.exports=router;