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
    console.log(params)
    const { ToDo } = params
        console.log(ToDo)
    // -- * -- //
    return (
        <CardContainer>
            <TitleContainer>
                {ToDo.item}
            </TitleContainer>
            <ButtonContainer>
                <ExtendedButton className={'green'} text={'Complete ToDo'}/>
                <ExtendedButton className={'yellow'} text={'Update ToDo'}/>
                <ExtendedButton className={'red'} text={'Delete ToDo'}/>
            </ButtonContainer>
        </CardContainer>
    )
}

// -- EXPORTS -- //
export default Card