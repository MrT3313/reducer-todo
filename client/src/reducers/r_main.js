// - IMPORTS - //
import React from 'react'

// - REDUCERS - //

// - INITIAL STATE - //
const initialState = {
    ToDos: [
        { item: 'NAME OF THIS', completed: false,  id: Date.now() },
        { item: 'Second Item', completed: false,  id: Date.now() },
        { item: 'Third To Do', completed: false,  id: Date.now() },
        { item: 'Get cat from dog store', completed: false,  id: Date.now() },
        { item: 'Return VHS to the 90s', completed: false,  id: Date.now() },
        { item: 'Disclose time traveling discovery...if you feel like it', completed: false,  id: Date.now() },
    ],
}

// - COMPONENT TO EXPORT - //
function r_main(state, action) {
    // console.log(state)
    // console.log(action)
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
            // -- V3 -- //
                const arrayToReturn = [...state, newToDo]
                    console.log(arrayToReturn)
                return arrayToReturn
            // -- V2 -- //
                // const objectToReturn = {
                //     ...state, ToDos: [...state, newToDo]
                // }
                //     console.log(objectToReturn)
                // return objectToReturn
            // -- V1 -- //
                // return {
                //     ...state,
                //     ToDos: [...state, newToDo]
                // }
        // case 'COMPLETE_TASK':
        //     return { ...state, completed: action.payload}
        // // case 'DECREASE':
        // //     return { count: state.count - 1}
        // case 'UPDATE_TASK':
        //     return {...state, item: action.payload}
        // case 'CLEAR_ALL_TASKS':
        //     let newState = []
        //     return newState 
        default:
            return state
    }
}

// - EXPORTS - //
export default {r_main, initialState}