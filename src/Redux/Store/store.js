import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import {rootReducer} from '../Reducers/rootReducer';
export const store = createStore(rootReducer,
    applyMiddleware(thunk,logger),
  )
