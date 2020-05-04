import produce from 'immer';
import * as actions from './constants';
import { ADVISOR_DATA } from './data';

// The initial state of the App
export const initialState = {
  advisors: ADVISOR_DATA,
};

/* eslint-disable default-case, no-param-reassign */
const advisorsReducer = (state = initialState, action) =>

  produce(state, draft => {
    switch (action.type) {
      case actions.EXAMPLE_ACTION:
        // NO-OP
        break;
    }
  });

export default advisorsReducer;
