export const types = {
  request: "REQUEST",
  success: "SUCCESS",
  error: "ERROR"
}

export const actions = {
  fatch(){
    return {
      type: types.request,
    }
  },
  success(list){
    return {
      type: types.success,
      payload: list
    }
  },
  error(err){
    return {
      type: types.error,
      payload: err
    }
  }
}
let initialState = {
  list: []
}

export default function(state = initialState, action){
  switch (action.type) {
    case types.success:
      state = {...state, list: action.payload}
      break;
    case types.error:
      state = {...state, error: action.payload}
      break;
    default:
      break;
  }
  return state;
}
