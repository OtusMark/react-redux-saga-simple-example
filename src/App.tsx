import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {asyncDecrementAC, asyncIncrementAC, decrementAC} from "./redux/reducers/countReducer";
import {RootStateType} from "./redux/store";
import {asyncSetUser, UserType} from "./redux/reducers/usersReducer";

export const App = () => {
    const count = useSelector<RootStateType, number>(state => state.countReducer.count)
    const users = useSelector<RootStateType, Array<UserType>>(state => state.usersReducer.users)
    const dispatch = useDispatch()

    return (
        <div>
            <div>{count}</div>
            <div>
                <button onClick={() => dispatch(asyncIncrementAC())}>Increment</button>
                <button onClick={() => dispatch(asyncDecrementAC())}>Decrement</button>
                <button onClick={() => dispatch(asyncSetUser())}>Get users</button>
            </div>
            <div>
                {users.map(user => (
                    <div>
                        {user.name}
                    </div>
                ))}
            </div>
        </div>
    )
}
