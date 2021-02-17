import {businessList,AuthRedux} from './Auth/index';
import { combineReducers } from 'redux'
export const rootReducer = combineReducers({businessList,AuthRedux})