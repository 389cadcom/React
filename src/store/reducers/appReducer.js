export const types = {
  ADD: 'add',
  DEL: 'del'
}

export const actions = {
  reduxAdd(num) {
    return {
      type: types.ADD,
      payload: num,
    }
  },
  reduxDel(num) {
    return {
      type: types.DEL,
      payload: num,
    }
  },
  thunkAPI: () => (dispatch, getState) => {
    //api.then( data => dispatch(action))
  }
}

let initialState = {
  num: 0,
}

//reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD:
      state = { ...state, num: action.payload }
      break
    case types.DEL:
      state = {
        // list: state.list.filter(item => item.id !== action.payload),
      }
      break
    default:
      break
  }
  return state
}
