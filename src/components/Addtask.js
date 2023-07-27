import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions'; // Importing the addTask action.

const AddTask = () => {
  const [taskDescription, setTaskDescription] = useState(''); // State to manage the input field.
  const dispatch = useDispatch(); // Get the dispatch function from the Redux store.

  const handleAddTask = () => {
    if (taskDescription.trim() !== '') {
      dispatch(addTask(taskDescription)); // Dispatches the addTask action with the task description as the payload.
      setTaskDescription(''); // Clears the input field after adding the task.
    }
  };

  return (
    <div>
        <h2> Todo List App in Redux </h2>
        
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Enter To do List" style={{
            width: 250,
            padding: 10,
            borderRadius: 20,
            border: "none",
            fontSize: 20,
        }} />
      <button onClick={handleAddTask} style={{
        padding: 12,
        borderRadius: 25,
        fontSize: 15,
      }}>Add</button>
      
    </div>
  );
};

export default AddTask;