const initialState = {
    count: 0,
}

// Reducer
export const countReducer = (state: CountStateType = initialState, action: ActionType): CountStateType => {
    switch (action.type) {
        case 'count/INCREMENT':
            return {...state, count: state.count + 1}

        case 'count/DECREMENT':
            return {...state, count: state.count - 1}

        default:
            return state
    }
}

// Action creators
export const incrementAC = () => ({type: 'count/INCREMENT'} as const)
export const decrementAC = () => ({type: 'count/DECREMENT'} as const)

// Saga action creators
export const asyncIncrementAC = () => ({type: 'count/ASYNC_INCREMENT'})
export const asyncDecrementAC = () => ({type: 'count/ASYNC_DECREMENT'})


// Types
type CountStateType = typeof initialState

export type ActionType = ReturnType<typeof incrementAC> | ReturnType<typeof decrementAC>