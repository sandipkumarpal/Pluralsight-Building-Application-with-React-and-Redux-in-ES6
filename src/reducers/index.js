import { combineReducers } from 'redux';
import course from './courseReducer';
import service from './serviceReducer';

const rootRedicer = combineReducers({
  course,
  service
});

export default rootRedicer;
