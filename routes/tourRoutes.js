const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();
// // :id? 加這個參數就變成optional

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
