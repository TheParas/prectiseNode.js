const mongoose = require('mongoose');
//Define the Task schema
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: 'daily task',
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  },
  dueDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending',
  }
});
// Create Task model
const newTask = mongoose.model('New-Task', taskSchema);
// Export the Task model
module.exports = newTask;
// Now we can use this model to create and manage documents in the 'tasks' collection in MongoDB.
// This model can be used in other files to create, read, update, and delete tasks in the database.
