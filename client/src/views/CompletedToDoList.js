import React, { useEffect, useReducer } from 'react'
import styled from 'styled-components'

import Card from '../components/Card.js'
// -- * -- //
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    width: 90%;
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
        <Wrapper>
            <div>
                Completed ToDo's 
            </div>
            <CardsContainer>
                {list.map((ToDo,index) => {
                    console.log(ToDo, index)
                    // -- * -- //
                    return <Card ToDo={ToDo} id={index} key={index} buttonFunctions={buttonFunctions}/> 
                })}
            </CardsContainer>
        </Wrapper>
    )
}

// -- EXPORTS -- //
export default CompletedToDoList