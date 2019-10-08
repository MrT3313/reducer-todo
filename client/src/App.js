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
  const updateToDo = (id) => {
    console.log('UPDATE TO DO')
    console.log(id)

    console.log(toDoList)
    
  }
  const completeToDo = (id) => {
    console.log('COMPLETE TO DO')
    console.log(id)
    // -- * -- //
    console.log(toDoList)
    toDoList.splice(id,1)
    console.log(toDoList)
    // -- * -- //
    dispatch({ type: 'COMPLETE_TODO', payload: toDoList})
  }
  const deleteToDo = (id) => {
    console.log('DELETE TO DO')
    console.log(id)
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
