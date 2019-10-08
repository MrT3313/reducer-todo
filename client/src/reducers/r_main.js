// - IMPORTS - //
import React from 'react'

// - REDUCERS - //

// - INITIAL STATE - //
const initialState = {
    ToDos: [
        { item: 'Paint the sink', completed: false,  id: Date.now() },
        { item: 'Stare at door. What does Rover see in this??', completed: false,  id: Date.now() },
        { item: 'Third To Do', completed: false,  id: Date.now() },
        { item: 'Get cat from dog store', completed: false,  id: Date.now() },
        { item: 'Return VHS to the 90s', completed: false,  id: Date.now() },
        { item: 'Disclose time traveling discovery...if you feel like it', completed: false,  id: Date.now() },
    ],
}

// -- REDUCER -- //
function r_main(state, action) {
    // console.log(state)
    // console.log(action)
    // -- * -- //
    let arrayToReturn = []
    // -- * -- //
    switch(action.type) {
        case 'ADD_TODO':
            const newToDo = {
                item: action.payload,
                completed: false,
                id: Date.now(),
            }
            console.log(newToDo)
            console.log(state)
            // -- * -- //
                arrayToReturn = [...state, newToDo]
                    console.log(arrayToReturn)
                return arrayToReturn
        // case 'COMPLETE_TODO':
        //     console.log(action.payload)
        //     // -- * -- // 
        //     arrayToReturn = action.payload
        //         console.log(arrayToReturn)
        //     return [...arrayToReturn]
        case 'DELETE_TODO':
            console.log(action.payload)
            // -- * -- // 
            arrayToReturn = action.payload
                console.log(arrayToReturn)
            return [...arrayToReturn]
        default:
            return state
    }
}

// - EXPORTS - //
export default {r_main, initialState}