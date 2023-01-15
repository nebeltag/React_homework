import { getGistsRequest, getGistsSuccess, getGistsFailure }
  from '../store/Api/apiAction.js';
import { API_URL_PUBLIC } from '../components/API/endPoints.js';

export const getAllGists = () => async (dispatch, getState) => {
  dispatch(getGistsRequest(true));
  try {
    const res = await fetch(API_URL_PUBLIC);

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }
    if (res.ok) {
      throw new Error('');
    }

    const result = await res.json();
    dispatch(getGistsSuccess(result));
  } catch (err) {
    dispatch(getGistsFailure(err.message));
    console.log(err)
  } finally {
    dispatch(getGistsRequest(false));
  };
};



