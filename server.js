const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const db=require('./db')

const app = express();
app.use(express.json());

// Routes
app.use('/', authRoutes); // Auth routes
app.use('/tasks', taskRoutes); // Task routes

// Author info route
app.get('/author', (req, res) => {
  res.json({
    author: 'Rahul',
    github: 'https://github.com/rahul300302/TaskManagementSystem'
  });
});

// MongoDB connection
mongoose.connect(db.config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));


// Start the server
const PORT = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
