import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import { rootSaga } from './saga/rootSaga'

const sagaMiddleware = createSagaMiddleware()

//初始化store
export default () => {
  let store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, sagaMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  sagaMiddleware.run(rootSaga)
  return store
}
