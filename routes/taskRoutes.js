// routes/taskRoutes.js
const express = require('express');
const { createTask, getTasks, updateTask, deleteTask } = require('../controller/taskController');
const { protect } = require('../middleware/ath_middleware');
const InputValidation=require('../middleware/InputValidation')
const router = express.Router();

// POST /tasks - Create a task
router.post('/', protect,InputValidation,createTask);

// GET /tasks - Get all tasks of the logged-in user
router.get('/', protect, getTasks);

// PUT /tasks/:id - Update a specific task
router.put('/:id', protect,InputValidation, updateTask);

// DELETE /tasks/:id - Delete a specific task
router.delete('/:id', protect, deleteTask);

module.exports = router;
