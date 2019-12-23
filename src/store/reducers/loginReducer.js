export const types = {
  login_in: "TO_LOGIN_IN",
  login_out: "TO_LOGIN_OUT",
}

export const actions = {
  toLoginIn(username, password){
    return {
      type: types.login_in,
      username,
      password
    }
  },
}
let initialState = {
  islogin: false
}

export default function(state = initialState, action){
  switch (action.type) {
    case types.login_in:
      state = {...state, islogin: action.payload}
      break;
    default:
      break;
  }
  return state;
}
