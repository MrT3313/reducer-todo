import React, { useReducer } from 'react'

const initialState = { 
    item: 'NAME OF THIS',
    completed: false, 
    id: Date.now(), 
}

function r_main(state, action) {
    switch(action.type) {
        // case 'INCREASE':
        //     return { count: state.count + 1}
        // case 'DECREASE':
        //     return { count: state.count - 1}
        default:
            return state
    }
}

export default r_main