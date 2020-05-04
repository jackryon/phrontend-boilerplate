/**
 * AdvisorsPage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAdvisors = state => state.advisors || initialState;

export const advisorsSelector = createSelector(
  selectAdvisors,
  advisorsState => advisorsState.advisors,
);
