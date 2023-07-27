// actions.js (Redux actions for adding, toggling, and editing tasks)
export const addTask = (description) => ({
    type: 'ADD_TASK',
    payload: {
      id: Date.now(), // Generate a unique ID for each task.
      description,
      isDone: false,
    },
  });
  
  export const toggleTask = (id) => ({
    type: 'TOGGLE_TASK',
    payload: {
      id,
    },
  });
  
  export const editTask = (id, newDescription) => ({
    type: 'EDIT_TASK',
    payload: {
      id,
      newDescription,
    },
  });