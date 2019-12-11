import axios from 'axios'

//actons
const action = type => store.dispatch({ type })

//用户信息
const loadUserData = (userId) => async (dispatch) => {
  try {
    dispatch({ type: 'USERDATA_REQUEST' })
    let { data } = await axios.get('/users/' + userId)
    dispatch({ type: 'USERDATA_SUCCESS', data })
  } catch (error) {
    dispatch({ type: 'USERDATA_ERROE', error })
  }
}

//thunk-登录
export const login = (user, pass) => async (dispatch) => {
  try {
    dispatch({ type: 'LOGIN_REQUEST' })
    let { data } = await axios.post('/login', { user, pass })
    await dispatch(loadUserData(data.userId))
    dispatch({ type: 'LOGIN_SUCCESS', data })
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error })
  }
}

//saga
export const login1 = (user, pass) => {
  return {
    type: 'LOGIN_REQUEST',
    user,
    pass
  }
}
