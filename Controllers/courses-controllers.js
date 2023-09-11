const HttpError=require('../Models/httperror');
const bodyParser=require('body-parser');
const Course=require('../Models/course');
const DUMMY_COURSE=[
    {
        "id":"c1",
        "title": "Introduction to Programming",
        "description": "A comprehensive course on programming fundamentals.",
        "teachersName": "John Doe",
        "previewImage": "https://example.com/course_image.jpg",
        "previewvideo": "https://example.com/course_intro.mp4",
        "rating": 4.5,
        "price": 49.99,
        "mrp": 59.99
      }
       
]

const getCourseById= async(req,res,next)=>{
    const courseId=req.params.cId;
    let course;
    try{
       course= await Course.findById(courseId)
    }
    catch(err){
      const error=new HttpError("Any Course is not Present on this Id ",500);
      return next(error);
    }
    

    if(!course){
        const error=new HttpError("Could not Find Course By This Id " ,404);
        return next(error)
        
    }
    else{
        res.json({course:course.toObject({getters:true})});
    }
    
}

const getCourseByTitle= async(req,res,next)=>{ try {
    const title = req.params.title;

    const course =Course.findById() 

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}




const createCourse=async(req,res,next)=>{
  const {CourseTitle,description,teachersName,previewImage,previewVideo,rating,price,mrp}=req.body;
  const createdCourse=new Course({
    CourseTitle,
    description,
    teachersName,
    previewImage,
    previewVideo,
    rating,
    price,
    mrp
  });
  try{
    await createdCourse.save();
  }
  catch(err){
    const error=new HttpError("Course Not Created,try Again",500);
    return next(error);

  }
  res.status(201).json({course:createdCourse})
};


const updateCourse=(req,res,next)=>{
  const {title,description,teachersName,previewImage,previewvideo,rating,price,mrp}=req.body;
  const courseId=req.params.cId;
  const updatedCourse={...DUMMY_COURSE.find((c)=>c.id===courseId)} //create a copy before update
  const courseIndex=DUMMY_COURSE.find((c)=>c.id===courseId)
  
updatedCourse.title=title;
updatedCourse.description=description;
updatedCourse.teachersName=teachersName;
updatedCourse.previewImage=previewImage;
updatedCourse.previewvideo=previewvideo;
updatedCourse.previewvideo=previewvideo;
updatedCourse.rating=rating;
updatedCourse.price=price;
updatedCourse.mrp=mrp;

DUMMY_COURSE[courseId]=updatedCourse;

}

const deleteCourse=(req,res,next)=>{
  

}

exports.getCourseById=getCourseById;
exports.getCourseByTitle=getCourseByTitle;
exports.createCourse=createCourse;
exports.updateCourse=updateCourse;
exports.deleteCourse=deleteCourse;
