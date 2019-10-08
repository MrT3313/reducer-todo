import React, { useEffect, useReducer } from 'react'
import styled from 'styled-components'

import Card from '../components/Card.js'
// -- * -- //
const ToDoList_container = styled.div`
    display: flex;
    flex-wrap: wrap;

    margin: 10px;
    padding: 10px;

    p {
        margin: 0
    }

    border: 1px solid black;
`;

// -- * -- //
function ToDoList({list, buttonFunctions}) {
    console.log(list)
    console.log(buttonFunctions)
    // -- * -- //
    useEffect(() => {
        console.log('useEffect triggered')
    })
    // -- * -- //
    return(
        <ToDoList_container>
            {list.map((ToDo,index) => {
                console.log(ToDo, index)
                // -- * -- //
                return <Card ToDo={ToDo} id={index} key={index} buttonFunctions={buttonFunctions}/> 
            })}
        </ToDoList_container>
    )
}

// -- EXPORTS -- //
export default ToDoList