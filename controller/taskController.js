const Task = require('../model/taskModel');



/////////////---------------------------------- Create Task----------------------/////////////////////////////

exports.createTask = async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  } else {
    const task = await Task.create({ title, description, user: req.user.id });
    res.status(201).json({
      result: true,
      message: `Task Create Successfully`,
      data: task
    });
  }
}


/////////////---------------------------------- Get User's ----------------------/////////////////////////////

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user._id });
  tasks.length > 0 ? res.status(200).json({
    result: true,
    message: "Data Retrived",
    data: tasks
  }) : res.status(200).json({
    result: false,
    message: 'No Task Found'
  })
};

/////////////---------------------------------- Update Task----------------------/////////////////////////////

exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.status(200).json({
    result: true,
    message: `Task Update Successfully`,
    data: task
  });
};



/////////////---------------------------------- Delete Task----------------------/////////////////////////////

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.status(200).json({
    result: true,
    message: 'Task deleted'
  });
};
