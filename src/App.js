import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tasksReducer from './redux/reducers'; // Importing the tasksReducer.
import AddTask from './components/Addtask'; // Importing the AddTask component.
import ListTask from './components/ListTask'; // Importing the ListTask component.

const store = createStore(tasksReducer); // Creating the Redux store with the tasksReducer.

const App = () => {
  return (
    <Provider store={store}> {/* Providing the Redux store to the entire application */}
      <div className='App' >
        <header className='dola'>
        <AddTask />
        <ListTask />
        </header>
      </div>
    </Provider>
  );
};

export default App;
