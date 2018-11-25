import { combineReducers } from 'redux';
import course from './courseReducer';
import service from './serviceReducer';
import author from './authorReducer';

const rootRedicer = combineReducers({
  course,
  service,
  author
});

export default rootRedicer;
