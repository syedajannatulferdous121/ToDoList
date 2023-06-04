const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Task data
let tasks = [];

// Routes
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const { title, description, priority, dueDate } = req.body;
  const task = { title, description, priority, dueDate };
  tasks.push(task);
  res.json({ message: 'Task added successfully!' });
});

app.put('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const { title, description, priority, dueDate } = req.body;
  tasks[id] = { title, description, priority, dueDate };
  res.json({ message: 'Task updated successfully!' });
});

app.delete('/tasks/:id', (req, res) => {
  const id = req.params.id;
  tasks.splice(id, 1);
  res.json({ message: 'Task deleted successfully!' });
});

// Start the server
app.listen(port, () => {
  console.log(`ToDoList app is running on http://localhost:${port}`);
});
