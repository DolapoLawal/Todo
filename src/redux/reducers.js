// reducers.js (Redux reducer to handle the state)
const initialState = {
    tasks: [], // Initial state with an empty tasks array.
  };
  
  const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload], // Add the new task to the tasks array.
        };
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.id ? { ...task, isDone: !task.isDone } : task
          ), // Toggle the isDone property for the task with the specified id.
        };
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.id ? { ...task, description: action.payload.newDescription } : task
          ), // Update the description for the task with the specified id.
        };
      default:
        return state;
    }
  };
  
  export default tasksReducer;