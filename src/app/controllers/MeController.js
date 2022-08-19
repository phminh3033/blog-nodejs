const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../utils/mongoose')

class MeController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        let courseQuery = Course.find({})

        if (req.query.hasOwnProperty('_sort')) {
            courseQuery = courseQuery.sort({
                [req.query.column]: req.query.type
            })
        }

        Promise.all([courseQuery, Course.countDocumentsDeleted()])
            .then(([courses, deleteCount]) =>
                res.render('me/storedCourses', {
                    deleteCount,
                    courses: mutipleMongooseToObject(courses)
                })
            )
            .catch(next)

        //Xử lý bất đồng bộ
        // Course.find({})
        //     .then(courses => res.render('me/storedCourses', {
        //         courses: mutipleMongooseToObject(courses)
        //     }))
        //     .catch(next)

        // Course.countDocumentsDeleted()
        //     .then((deleteCount) => {
        //         console.log(deleteCount);
        //     })
        //     .catch(() => {})

    }

    //[GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/trashCourses', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next)
        
    }
}

module.exports = new MeController();
