import React from 'react'
import styled from 'styled-components'
import Button from './Button.js'

// -- STYLED COMPONENTS -- //
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    min-height: 70px;
    width: 25%;

    margin: 10px;
    padding: 10px;

    border: 1px solid orange
`;
const ExtendedButton = styled(Button)`
    width: 31%%;
    margin: 5px 0;
`;
const TitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;

    .green {
        background-color: green;
    }
    .yellow {
        background-color: yellow;
    }
    .red {
        background-color: red;
    }
`;

// -- COMPONENT TO EXPORT - //
function Card(params) {
    const { ToDo, id, buttonFunctions } = params
        console.log(ToDo)
    // -- * -- //

    const handleComplete = e => {
        e.preventDefault()
        console.log(id)
        buttonFunctions.completeToDo(id)
    }
    const handleUpdate = e => {
        e.preventDefault()
        console.log(id)
        buttonFunctions.updateToDo(id)
    }
    const handleDelete = e => {
        e.preventDefault()
        console.log(id)
        buttonFunctions.deleteToDo(id)
    }

    // -- * -- //
    return (
        <CardContainer>
            <TitleContainer>
                {ToDo.item}
            </TitleContainer>
            <ButtonContainer>
                <ExtendedButton className={'green'} text={'Complete ToDo'} buttonFunction={handleComplete}/>
                <ExtendedButton className={'yellow'} text={'Update ToDo'} buttonFunction={handleUpdate}/>
                <ExtendedButton className={'red'} text={'Delete ToDo'} buttonFunction={handleDelete}/>
            </ButtonContainer>
        </CardContainer>
    )
}

// -- EXPORTS -- //
export default Card