import { combineReducers } from 'redux';
import course from './courseReducer';

const rootRedicer = combineReducers({
  course
});

export default rootRedicer;
