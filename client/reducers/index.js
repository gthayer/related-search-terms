import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import search from './search';
import results from './results';

const rootReducer = combineReducers({search, results, routing: routerReducer });

export default rootReducer;
