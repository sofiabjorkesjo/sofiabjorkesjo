'use strict';

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

module.exports = router;