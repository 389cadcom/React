import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import {rootSaga} from './saga/rootSaga'

const sagaMiddleware = createSagaMiddleware()

export default () => {
  let store = createStore(
    rootReducer,
    applyMiddleware(thunk, sagaMiddleware)
  )

  sagaMiddleware.run(rootSaga)
  return store
}
