import {createSelector} from 'reselect';

const getHome = state => state.homeReducer.list;

export const getHomeState = createSelector(
  [getHome],
  list => list,
);
