const initialState: UsersStateType = {
    users: [],
}

// Reducer
export const usersReducer = (state: UsersStateType = initialState, action: ActionType): UsersStateType => {
    switch (action.type) {
        case 'users/SET_USERS':
            return {...state, users: action.users}
        default:
            return state
    }
}

// Action creators
export const setUserAC = (users: Array<UserType>) => ({type: 'users/SET_USERS', users} as const)

// Saga action creators
export const asyncSetUser = () => ({type: 'users/ASYNC_SET_USERS'})


// Types
type UsersStateType = {
    users: Array<UserType>
}

export type UserType = {
    name: string
}

export type ActionType = ReturnType<typeof setUserAC>