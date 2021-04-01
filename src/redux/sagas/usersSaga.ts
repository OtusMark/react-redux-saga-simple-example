import {put, takeEvery, call} from 'redux-saga/effects'
import {setUserAC} from "../reducers/usersReducer";

const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

function* fetchUsersWorker() {
    // @ts-ignore
    const data = yield call(fetchUsersFromApi)
    // @ts-ignore
    const json = yield call(() => new Promise( res => res(data.json())))
    yield put(setUserAC(json))
}

export function* usersWatcher() {
    yield takeEvery('users/ASYNC_SET_USERS', fetchUsersWorker)
}