import { take, put, call, fork, delay, race, cancel } from 'redux-saga/effects'
import axios from 'axios'

const delay1 = ms => new Promise((resolve, reject)=> setTimeout(resolve, ms))

/*
  1.第一次成功登录时, 服务器返回token, 每隔expires_in毫秒时间后的重新向后台刷新授权
  2.在等待api调用的结果(初始登录或刷新)时，用户可以在其间注销
*/
function* authAndRefreshToken(user, pass) {
  let token = yield call('authorize', { user, pass })
  while (true) {
    yield call(delay, token.expires_in)
    token = yield call('authorize', { token })
  }
}

//在等待api调用的结果(初始登录或刷新)时，用户可以在其间注销
function* watchAuth() {
  while (true) {
    try {
      let {user, pass} = yield take('LOGIN_REQUEST')
      yield race([
        take('LOGOUT'),
        call(authAndRefreshToken, user, pass)
      ])
    } catch (error) {
      yield put( login.error(error) )
    }
  }
}

function* all() {
  let [users, repos] = yield [
    call(axios.get, '/users'),
    call(axios.get, '/repos')
  ]
}

//防抖动、取消任务
function changeHandler () {
  yield call(delay, 5000);
  //...
}
function* watchInput() {
  let task;
  while (true) {
    const { value } = take('INPUT_CHANGED')
    if(task)
      yield cancel(task)
    task = yield fork(changeHandler, value)
  }
}


//登录
export function* loginSaga() {
  try {
    const { user, pass } = yield take('LOGIN_REQUEST')
    let { data } = yield call(axios.post, { user, pass })

    yield fork(loadUserData, data.userId)
    yield put({ type: 'LOGIN_SUCCESS', data })
  } catch (error) {
    yield put({ type: 'LOGIN_ERROR', error })
  }
}

//用户信息
function* loadUserData(userId) {
  try {
    yield put({ type: 'USERDATA_REQUEST' })
    let { data } = yield call(axios.get, `/users/${userId}`)
    yield put({ type: 'USERDATA_SUCCESS', data })
  } catch (error) {
    yield put({ type: 'USERDATA_ERROR', error })
  }
}

