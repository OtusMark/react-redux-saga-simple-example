import {put, takeEvery} from 'redux-saga/effects'
import {decrementAC, incrementAC} from "../reducers/countReducer";

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

function* incrementWorker() {
    yield delay(1000)
    yield put(incrementAC())
}

function* decrementWorker() {
    yield delay(1000)
    yield put(decrementAC())
}

export function* countWatcher() {
    yield takeEvery('count/ASYNC_INCREMENT', incrementWorker)
    yield takeEvery('count/ASYNC_DECREMENT', decrementWorker)
}