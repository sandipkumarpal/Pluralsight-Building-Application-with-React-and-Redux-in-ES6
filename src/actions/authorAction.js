import { LOAD_AUTHORS_SUCCESS } from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
  return {
    type: LOAD_AUTHORS_SUCCESS,
    authors
  };
}

export function loadAuthors() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(author => {
      dispatch(loadAuthorsSuccess(author));
    })
    .catch(error => {
      throw(error);
    });
  };
}
