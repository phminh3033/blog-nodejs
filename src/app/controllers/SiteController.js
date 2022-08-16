const Course = require('../models/Course')

class SiteController {
    //[GET] /
    index(req, res) {
        Course.find({}, function(err, cources){
            if (!err) {
                res.json(cources)
            } else {
                res.status(400).json({error: 'Error'})
            }
        })
        // res.render('home');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
