'use strict';
let fs = require('fs');

let router = require('express').Router();

router.route('/')
    .get(function (req, res) {
        res.render('layout/index');
    });

router.route('/portfolio')
    .get(function (req, res) {
        res.render('layout/portfolio');
    });

router.route('/fotografier')
    .get(function (req, res) {
        res.render('layout/fotografier');
    });

router.route('/programmering')
    .get(function (req, res) {
        res.render('layout/programmering');
    });

router.route('/om-mig')
    .get(function (req, res) {
        res.render('layout/om-mig');
    });

router.route('/kontakt')
    .get(function (req, res) {
        res.render('layout/kontakt');
    });

router.route('/cv')
    .get(function (req, res) {
        let file = './public/cv_hemsida_1.pdf';
        fs.readFile(file, function(err, data) {
            res.contentType('application/pdf');
            res.send(data);
            if(err){
                console.log(err);
            }
        });
    });

module.exports = router;