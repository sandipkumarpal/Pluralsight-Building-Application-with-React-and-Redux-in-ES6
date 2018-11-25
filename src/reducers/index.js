import { combineReducers } from 'redux';
import course from './courseReducer';
import service from './serviceReducer';
import author from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootRedicer = combineReducers({
  course,
  service,
  author,
  ajaxCallsInProgress
});

export default rootRedicer;
