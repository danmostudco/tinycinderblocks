import { combineReducers } from 'redux';

import sprockets from './sprockets';
import cogs from './cogs';

const rootReducer = combineReducers({sprockets, cogs});

export default rootReducer;