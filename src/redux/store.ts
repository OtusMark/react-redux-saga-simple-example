import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {countReducer} from "./reducers/countReducer";
import {usersReducer} from "./reducers/usersReducer";
import {countWatcher} from "./sagas/countSaga";
import {rootWatcher} from "./sagas";

// Redux

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    countReducer,
    usersReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)

// Types
export type RootStateType = ReturnType<typeof rootReducer>

// Utilities
// @ts-ignore
window.store = store;