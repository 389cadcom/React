import { all } from 'redux-saga/effects'
import { delay } from 'redux-saga/effects'

import countSaga from './countSaga'
import listSaga from './listSaga'

function* hello() {
  yield delay(1000);
  console.log('hello saga')
}

function* watchSaga() {
  // body
}

export function* rootSaga() {
  yield all([hello(), countSaga(), listSaga()])
}
