import { getGistsRequest, getGistsSuccess, getGistsFailure, getToggleSwitch }
  from '../store/Api/apiAction.js';
import { API_URL_PUBLIC } from '../components/API/endPoints.js';

export const getAllGists = () => async (dispatch) => {
  dispatch(getToggleSwitch(true));
  dispatch(getGistsFailure(''));
  dispatch(getGistsRequest());
  try {
    const res = await fetch(API_URL_PUBLIC);

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const result = await res.json();
    dispatch(getGistsSuccess(result));

  } catch (err) {
    dispatch(getGistsFailure(err.message));
    console.log(err)
  } finally {
    dispatch(getToggleSwitch(false));
  };
};



