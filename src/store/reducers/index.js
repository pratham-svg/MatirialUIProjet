// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import User from './User';
// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu , User });

export default reducers;
