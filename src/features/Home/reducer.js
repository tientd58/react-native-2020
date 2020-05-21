import {HOME} from './actionsType';

const INITIAL_STATE = {
  list: [],
};

const HomeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HOME.GET_TEST_REQUEST:
      return state;
    case HOME.GET_TEST_SUCCESS: {
      return {...state, list: action.payload};
    }
    case HOME.GET_TEST_FAILURE:
      return state;
    default:
      return state;
  }
};

export default HomeReducer;
