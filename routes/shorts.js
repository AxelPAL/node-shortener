var express = require('express');
var mongoose = require('mongoose');
var Link = require(__dirname+'/../models/link');

var router = express.Router();
mongoose.connect('mongodb://localhost/links');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.status(200);
    //res.send('respond with a resource');
    Link.findOne({ 'shortLink': 's5Gh' }, 'fullLink shortLink visits', function (err, l) {
        console.log("test");
        if (err) return handleError(err);
        res.render('shorts', {
            fullLink: l.message,
            shortLink: l.message,
            visits: l.message
        });
    })

});

module.exports = router;
