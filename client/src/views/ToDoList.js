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
function ToDoList({list}) {
    console.log(list)
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
                return <Card ToDo={ToDo} key={index}/> 
            })}
        </ToDoList_container>
    )
}

// -- EXPORTS -- //
export default ToDoList