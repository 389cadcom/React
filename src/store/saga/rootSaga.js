import { all } from 'redux-saga/effects'
import { delay } from 'redux-saga/effects'

import countSaga from './countSaga'

function* hello() {
  yield delay(1000);
  console.log('hello saga')
}

function* watchSaga() {
  // body
}

export function* rootSaga() {
  yield all([hello(), countSaga()])
}
