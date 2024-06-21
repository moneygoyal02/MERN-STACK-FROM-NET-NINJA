const Workout = require('../models/WorkoutModel')
const mongoose = require('mongoose')


//GET ALL WORKOUTS
const getWorkouts = async (req,res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

//GET A SINGLE WORKOUT
const getWorkout = async (req,resp) => {
    const {id} = req.params 

    if(!mongoose.Types.ObjectId.isValid(id)){
        return resp.status(404).json({error:'no such workout'})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return resp.status(404).json({error:'no such workout'})
    }

    resp.status(200).json(workout)
}

//CREATE A NEW WORKOUT
const createWorkout = async (req,resp) => {
    const {title,load,reps} = req.body

    try {
        const workout = await Workout.create({title,load,reps})
        resp.status(200).json(workout)
        return
    } catch (error) {

        resp.status(400).json({error: error.message})
        
        
    }
    resp.json({msg: 'post new workout'})
}

//UPDATE A NEW WORKOUT
const updateWorkout = async (req,resp) => {
    const {id} =req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return resp.status(404).json({error:'no such workout'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {...req.body})

    if(!workout){
        return resp.status(404).json({error:'no such workout'})
    }

    resp.status(200).json(workout)

}


//DELETE A WORKOUT
const deleteWorkout = async (req,resp) => {
    const {id} =req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return resp.status(404).json({error:'no such workout'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout){
        return resp.status(404).json({error:'no such workout'})
    }

    resp.status(200).json(workout)

}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}