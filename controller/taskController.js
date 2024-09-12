const Task = require('../model/taskModel');



/////////////---------------------------------- Create Task----------------------/////////////////////////////

exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = await Task.create({ title, description, user: req.user.id });
    res.status(201).json({
      result: true,
      message: `Task Create Successfully`,
      data: task
    });
  } catch (error) {
    console.error('Error during Task create:', error);
    res.status(500).json({ message: 'Internal server error' });
  }

}


/////////////---------------------------------- Get User's ----------------------/////////////////////////////

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id });
    tasks.length > 0 ? res.status(200).json({
      result: true,
      message: "Data Retrived",
      data: tasks
    }) : res.status(200).json({
      result: false,
      message: 'No Task Found'
    })
  } catch (error) {
    console.error('Error during Task List(Read):', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

/////////////---------------------------------- Update Task----------------------/////////////////////////////

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json({
      result: true,
      message: `Task Update Successfully`,
      data: task
    });
  } catch (error) {
    console.error('Error during Task Edit:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



/////////////---------------------------------- Delete Task----------------------/////////////////////////////

exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({
      result: true,
      message: 'Task deleted'
    });
  } catch (error) {
    console.error('Error during Task Delete :', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
