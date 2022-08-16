const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../utils/mongoose')

class SiteController {
    //[GET] /
    index(req, res, next) {
        //promise
        Course.find({})
            .then(courses => {
                res.render('home', { 
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(next)

        //func
        // Course.find({}, function(err, cources){
        //     if (!err) {
        //         res.json(cources)
        //     } else {
        //         res.status(400).json({error: 'Error'})
        //     }
        // })
        // res.render('home');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
