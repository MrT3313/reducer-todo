// - INITIAL STATE - //
const initialState = []

// -- REDUCER -- //
function completedArray(state, action) {
    let arrayToReturn = []
    // -- * -- //
    switch(action.type) {
        case 'COMPLETE_TODO':
            console.log(action.payload)
            // -- * -- //
            const addToDo = action.payload[0]
            addToDo.completed = true
                console.log(addToDo)
            return [...state, addToDo]
        default:
                return state
    }
}

// - EXPORTS - //
export default {completedArray, initialState}