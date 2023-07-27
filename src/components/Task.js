// Task.js (Individual task component)
import React from 'react';

const Task = ({ id, description, isDone, onToggleTask, onEditTask }) => {
  const handleToggle = () => {
    onToggleTask(id); // Calls the onToggleTask function with the task's id when the checkbox is clicked.
  };

  const handleEdit = () => {
    const newDescription = prompt('Edit task description:', description);
    if (newDescription) {
      onEditTask(id, newDescription); // Calls the onEditTask function with the task's id and the edited description when the task description is clicked.
    }
  };

  return (
    <div>
      <input type="checkbox" checked={isDone} onChange={handleToggle} />
      <span onClick={handleEdit}>{description}</span>
    </div>
  );
};

export default Task;