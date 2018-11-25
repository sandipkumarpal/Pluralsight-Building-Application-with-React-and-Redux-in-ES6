import {
  LOAD_SERVICES_SUCCESS,
  CREATE_AUTHORS_SUCCESS,
  UPDATE_AUTHORS_SUCCESS
} from './actionTypes';
import serviceApi from '../api/mockCourseApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadServiceSuccess(service) {
  return {
    type: LOAD_SERVICES_SUCCESS,
    service
  };
}

export function updateServiceSuccess(service) {
  return {
    type: UPDATE_AUTHORS_SUCCESS,
    service
  };
}

export function createServiceSuccess(service) {
  return {
    type: CREATE_AUTHORS_SUCCESS,
    service
  };
}

export function loadService() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return serviceApi.getAllCourses().then(service => {
      dispatch(loadServiceSuccess(service));
    })
    .catch(error => {
      throw(error);
    });
  };
}

export function saveService(service) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return serviceApi.saveCourse(service).then(service => {
      service.id ? dispatch(updateServiceSuccess(service)) :
        dispatch(createServiceSuccess(service));
    })
    .catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
