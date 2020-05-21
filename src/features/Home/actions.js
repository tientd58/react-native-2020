import {HOME} from './actionsType';

export const getTestRequest = (params = {}, cb) => ({
  type: HOME.GET_TEST_REQUEST,
  payload: {params},
  cb,
});

export const getTestSuccess = (payload, cb) => ({
  type: HOME.GET_TEST_SUCCESS,
  payload,
  cb,
});

export const getTestFailure = (error, cb) => ({
  type: HOME.GET_TEST_FAILURE,
  payload: {error},
  cb,
});
