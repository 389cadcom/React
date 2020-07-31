import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import { rootSaga } from './saga/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const logger = ({getState, dispatch}) => next => action =>{
  console.log('执行-dispatch:', action)
  let result = next(action)                       //等待下一个中间件执行
  console.log('执行值-getState:', getState())

  return result
}

//初始化store
export default () => {
  let store = createStore(
    rootReducer,
    {
      appReducer:{num: 2}
    },
    //中间件
    compose(
      applyMiddleware(logger),
      // applyMiddleware(thunk, sagaMiddleware, logger),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  // sagaMiddleware.run(rootSaga)
  return store
}

/*
(...middlewares) => createStore => (rootReducer, initState) => {}

store = compose(
  applyMiddleware(logger)
)(createStore)(rootReducer, initState = {})

//createStore:
retrun enhancer(createStore)(reducer, preloadedState)
*/
