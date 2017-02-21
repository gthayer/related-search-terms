import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import search from './search';
import results from './results';
import download from './download';

const rootReducer = combineReducers({search, results, download, routing: routerReducer });

export default rootReducer;
