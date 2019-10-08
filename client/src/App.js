import React, {useState, useEffect, useReducer} from 'react';
import './App.css';
import reducer from './reducers/r_main.js'
import completedReducer from './reducers/r_completedArray.js'

import Card from './components/Card.js'

// -- //
import AddToDoForm from './views/AddToDoForm.js'
import ToDoList from './views/ToDoList.js'
import CompletedToDoList from './views/CompletedToDoList.js'
// -- //
function App() {
  const [toDoList, dispatch] = useReducer(reducer.r_main, reducer.initialState.ToDos)
  const [completedArray, setCompletedArray] = useReducer(completedReducer.completedArray, completedReducer.initialState)
  // -- * -- //
  useEffect(() => {
    console.log('useEffect Triggered')
    console.log(toDoList)
    console.log(completedArray)
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
    const result = toDoList.splice(id,1)
    console.log(result)
    // -- * -- //
    setCompletedArray({ type: 'COMPLETE_TODO', payload: result})
  }
  const deleteToDo = (id) => {
    console.log('DELETE TO DO')
    console.log(id)
    // -- * -- //
    console.log(toDoList)
    toDoList.splice(id,1)
    console.log(toDoList)
    // -- * -- //
    dispatch({ type: 'DELETE_TODO', payload: toDoList})
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

      {completedArray.length !== 0 &&
        <CompletedToDoList 
          list={completedArray} 
        />
      }
    </div>
  );
}

export default App;
