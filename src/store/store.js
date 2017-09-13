import { createStore, applyMiddleware, compose } from 'redux'
import 'rxjs'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from './epic'
import rootReducer from './reducer'
import booted from './bootstrap'
import initialDispatch from './initialDispatch'

export const history = createHistory()

const epicMiddleware = createEpicMiddleware(rootEpic)

const initialState = booted
const enhancers = []
const middleware = [
  routerMiddleware(history),
  epicMiddleware
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(rootReducer)
    })
  }
}

initialDispatch(store.dispatch)

export default store
