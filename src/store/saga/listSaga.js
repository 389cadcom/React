import { call, put, take, takeEvery, select } from 'redux-saga/effects'
import axios from 'axios'
import history from '../../utils/history'

import { types } from '../reducers/listReducer'
import { types as loginTypes } from '../reducers/loginReducer'

function* getFetch () {
  try {
    let list = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts')
    yield put({type: types.success, payload: list.data.slice(0, 10) })
  } catch (error) {
    yield put({type: types.error, payload: error })
  }
}

function* watch () {
  // yield takeEvery(types.request, getFetch)
  var action = yield take(types.request)
  console.log(action);
  // yield call(getFetch);
}
function* checkLogin (username, password) {
  var res = yield call(axios.post, '/login', {
    username,
    password
  });
  return res;
}


function* watchIsLogin () {
  var action1 = yield take(loginTypes.login_in)               //验证用户名
  // var ret = yield call(checkLogin(action1.username, action1.password))
  // if(ret.status === 'ok')

  yield put({type: loginTypes.login_in, payload: true});      //保存登录信息
  history.push('/list')

  yield call(getFetch);
}

export default watchIsLogin
