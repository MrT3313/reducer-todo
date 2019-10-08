import React, { useEffect, useReducer } from 'react'
import styled from 'styled-components'

import Card from '../components/Card.js'
// -- * -- //
const CompletedToDoList_Container = styled.div`
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
function CompletedToDoList({list, buttonFunctions}) {
    return (
        <>
            <div>
                Completed ToDo's 
            </div>
            <CompletedToDoList_Container>
                {list.map((ToDo,index) => {
                    console.log(ToDo, index)
                    // -- * -- //
                    return <Card ToDo={ToDo} id={index} key={index} buttonFunctions={buttonFunctions}/> 
                })}
            </CompletedToDoList_Container>
        </>
    )
}

// -- EXPORTS -- //
export default CompletedToDoList