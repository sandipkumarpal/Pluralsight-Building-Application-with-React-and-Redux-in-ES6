import { LOAD_SERVICES_SUCCESS } from './actionTypes';
import serviceApi from '../api/mockCourseApi';

export function loadServiceSuccess(service) {
  return {
    type: LOAD_SERVICES_SUCCESS,
    service
  };
}

export function loadService() {
  return function(dispatch) {
    return serviceApi.getAllCourses().then(service => {
      dispatch(loadServiceSuccess(service));
    })
    .catch(error => {
      throw(error);
    });
  };
}
