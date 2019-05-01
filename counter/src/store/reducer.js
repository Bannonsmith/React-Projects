


const initialState = {
    counter:99,
    books: [],
    isAuthenitcated: false
}


const reducer = (state = initialState, action) => {

    if(action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if (action.type === "DEC_COUNTER") {
        return {
            ...state,
            counter: state.counter - 1

        }
    } else if (action.type === "MULTIPLY_FIVE_COUNTER") {
        return {
            ...state,
            counter: state.counter * 5
        }
    } else if (action.type === "DIVIDE_FIVE_COUNTER") {
        return {
            ...state,
            counter: state.counter / 5
        }
    } else if (action.type === "RETURN_TO_ZERO") {
        return {
            ...state,
            counter: state.counter * (0)
        }
    }

    return state
}

export default reducer