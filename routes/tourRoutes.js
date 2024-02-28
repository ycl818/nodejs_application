const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();
// // :id? 加這個參數就變成optional

// router.param('id', tourController.checkID);

// Create a checkBodt middleware
// check if body contains the name and price property
// if not, send back 400 (bad request)
// add it to the post handler stack

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
