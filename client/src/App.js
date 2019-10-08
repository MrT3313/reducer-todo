import React, {useState, useEffect, useReducer} from 'react';
import './App.css';
import reducer from './reducers/r_main.js'
// -- //
import AddToDoForm from './views/AddToDoForm.js'
import ToDoList from './views/ToDoList.js'
// -- //
function App() {
  const [toDoList, dispatch] = useReducer(reducer.r_main, reducer.initialState.ToDos)
  // -- * -- //
  useEffect(() => {
    console.log('useEffect Triggered')
    console.log(toDoList)
  })
  // -- * -- //
  const updateToDo = () => {
    console.log('UPDATE TO DO')
  }
  const completeToDo = () => {
    console.log('COMPLETE TO DO')
  }
  const deleteToDo = () => {
    console.log('DELETE TO DO')
  }
  const buttonFunctions = {
    updateToDo,
    completeToDo,
    deleteToDo,
  }
  // -- * -- //
  return (
    <div className="App">
      <h1>HELLO</h1>
      <AddToDoForm dispatch={dispatch}/> 
      <ToDoList 
        list={toDoList} 
        buttonFunctions={buttonFunctions}
      /> 
    </div>
  );
}

export default App;
