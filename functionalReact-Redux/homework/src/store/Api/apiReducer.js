import { STATUSES } from '../Statuses/statuses.js';
import { GET_GISTS_REQUEST, GET_GISTS_SUCCESS, GET_GISTS_FAILURE }
  from './apiAction.js'

const initialState = {
  gists: [],
  request: STATUSES.IDLE,
  error: null,
  loading: true
};
const gistsReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_GISTS_REQUEST:
      return {
        ...state,
        request: STATUSES.REQUEST,
        loading: action.payload,
      };

    case GET_GISTS_SUCCESS:
      return {
        ...state,
        articles: action.payload,
        request: STATUSES.SUCCESS,

      };

    case GET_GISTS_FAILURE:
      return {
        ...state,
        request: STATUSES.FAILURE,
        error: action.payload,
      };

    default:
      return state;

  }
};

export default gistsReducer;