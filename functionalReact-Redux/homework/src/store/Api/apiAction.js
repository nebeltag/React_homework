export const GET_GISTS_REQUEST = "GISTS::GET_GISTS_REQUEST";
export const GET_GISTS_SUCCESS = "GISTS::GET_GISTS_SUCCESS";
export const GET_GISTS_FAILURE = "GISTS::GET_GISTS_FAILURE";



export const getGistsRequest = (load) => ({
  type: GET_GISTS_REQUEST,
  payload: load,

});

export const getGistsSuccess = (data) => ({
  type: GET_GISTS_SUCCESS,
  payload: data,
});

export const getGistsFailure = (err) => ({
  type: GET_GISTS_FAILURE,
  payload: err,
});



