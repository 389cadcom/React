export const types = {
  login_request: 'LOGIN_REQUEST',
  login_success: 'LOGIN_SUCCESS',
  login_error: 'LOGIN_ERROR',
}

export const actions = {
  login(user, pass) {
    return {
      type: types.login_request,
      user,
      pass,
    }
  },
  success(data) {
    return {
      type: type.login_success,
      data,
    }
  },
  faiil(error) {
    return {
      type: types.login_error,
      error,
    }
  },
}

//reducer
export default (state, action) => {
  switch (action.type) {
    case types.success:
      state = {...state, data: action.data}
      break;
    default:
      break;
  }
  return;
}
