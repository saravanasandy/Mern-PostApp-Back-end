const asyncHandler = require('express-async-handler')


// @ desc   Get goals
// @route   Get  /api/goals
// @access  private
const getGoals = asyncHandler(async(req,res)=>{
    res.status(200).json({message: 'Get Goals'});
})


// @ desc   create goal
// @route   Post  /api/goals
// @access  private
const setGoal = asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')

    }
    res.status(200).json({message: 'Create Goal'});
})


// @ desc   update goal
// @route   put  /api/goals/:id
// @access  private
const updateGoal = asyncHandler(async(req,res)=>{
    res.status(200).json({message: `Update goal${req.params.id}`});
})


// @ desc   Delete goal
// @route   Delete  /api/goals/:id
// @access  private
const deleteGoal = asyncHandler(async(req,res)=>{
    res.status(200).json({message: `Delete goal${req.params.id}`});
})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,

}