const express = require('express');
const router  = express.Router()
const Workout = require('../models/WorkoutModel')
const {getWorkouts,getWorkout,createWorkout,updateWorkout,deleteWorkout} = require('../controllers/workoutController')

router.get('/',getWorkouts)
router.get('/:id',getWorkout)
router.post('/', createWorkout)
router.delete('/:id',deleteWorkout)
router.patch('/:id',updateWorkout)

module.exports = router;