import { put, delay, takeEvery, select } from 'redux-saga/effects'

import { types } from '../reducers/appReducer'

function* add () {
  yield delay(1000)
  var num = yield select(state => state.appReducer.num)
  yield put({type: types.ADD, payload: num + 1})
  //yield put({ type: 'add_item', payload })
}

function* watch () {
  yield takeEvery('add_async', add)
}

export default watch
