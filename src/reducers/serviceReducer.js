import {LOAD_SERVICES_SUCCESS} from '../actions/actionTypes';

export default function courseReducer(state=[], action) {
  switch(action.type) {
    case LOAD_SERVICES_SUCCESS:
      return action.service;

    default :
      return state;
  }
}
