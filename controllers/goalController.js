const asyncHandler = require("express-async-handler");

const Goal = require("../model/goalModel");

// @ desc   Get goals
// @route   Get  /api/goals
// @access  private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

// @ desc   create goal
// @route   Post  /api/goals
// @access  private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});

// @ desc   update goal
// @route   put  /api/goals/:id
// @access  private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not Found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

// @ desc   Delete goal
// @route   Delete  /api/goals/:id
// @access  private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400);
        throw new Error("Goal not Found");
      }

       await goal.deleteOne()

  res.status(200).json({id: req.params.id});
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
