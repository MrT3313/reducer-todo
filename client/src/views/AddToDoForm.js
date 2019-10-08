import React, {useEffect} from 'react'
import styled from 'styled-components'
import Button from '../components/Button.js'
import useInput from '../hooks/useInput.js'
// -- STYLED COMPONENTS -- //
const FormContainer = styled.form`
    display: flex;

    margin: 10px;
    padding: 10px;

    input {
        margin-right: 15px;
    }

    border: 1px solid blue;
`;
const ExtendedButton = styled(Button)`
    border: 1px solid green;
`;
// -- COMPONENT TO EXPORT -- //
function AddToDoForm({dispatch}) {
    const [ToDo, handleToDo, setTodo] = useInput()
    // -- * -- //
    const handleSubmit = e => {
        e.preventDefault()
        if(ToDo === undefined ) {
            alert('please enter something')
        } else {
            dispatch({ type: 'ADD_TODO', payload: ToDo })
        }
    }
    // -- * -- //
    useEffect(() => {
        console.log('useEffect Triggered')
        console.log(ToDo)
    })
    // -- * -- //
    return (
        <FormContainer
            onSubmit={handleSubmit}
        >
            <input
                type='text'
                value={ToDo}
                onChange={handleToDo}
                placeholder='Enter ToDo Here'
            />
            <ExtendedButton
                text={'Submit New ToDo'}
            >
                Click Here
            </ExtendedButton>

        </FormContainer>
    )
}

// -- EXPORTS -- //
export default AddToDoForm

