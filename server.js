const express = require('express');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');


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


// Start the server
// const PORT = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 3000;
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




// g9qIYXGNoc3JcQJV    rahulraw2002