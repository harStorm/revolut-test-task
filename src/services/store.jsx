//@flow
//$FlowFixMe
import { createStore, applyMiddleware } from 'redux';
//$FlowFixMe
import thunkMiddleware from 'redux-thunk';
import rootReducer from './api/reducer';

export default function configureStore(preloadedState: any) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware),
  )
}