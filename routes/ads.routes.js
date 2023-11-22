const express = require('express');
const router = express.Router();

const AdsController = require('../controllers/ads.controller');

router.get('/ads', AdsController.getAll);

router.get('/ads/:id', AdsController.getOne);

router.post('/ads', AdsController.postOne);

router.delete('/ads/:id', AdsController.deleteOne);

router.put('/ads/:id', AdsController.putOne);

router.get('/ads/search/:searchPhrase', AdsController.searchAll);

module.exports = router;
