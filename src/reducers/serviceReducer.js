import {
  LOAD_SERVICES_SUCCESS,
  CREATE_AUTHORS_SUCCESS,
  UPDATE_AUTHORS_SUCCESS
} from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state=initialState.courses, action) {
  switch(action.type) {
    case LOAD_SERVICES_SUCCESS:
      return action.service;

    case CREATE_AUTHORS_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.service)
      ];

    case UPDATE_AUTHORS_SUCCESS:
      return [
        ...state.filter(service => service.id !== action.service.id),
        Object.assign({}, action.service)
      ];

    default :
      return state;
  }
}
