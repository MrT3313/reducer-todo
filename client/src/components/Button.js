import React from 'react'
import styled from 'styled-components'
// -- STYLED COMPONENTS -- //
const StyledButton = styled.button`
    display: flex;

    border: 1px dashed black;
`;
// -- COMPONENT TO EXPORT -- //
function Button({className, text, buttonFunction}) {
    // -- * -- //
    return (
        <StyledButton 
            className ={className}
            onClick={buttonFunction}
        >
            {text}
        </StyledButton>
    )
}
// -- EXPORTS -- //
export default Button