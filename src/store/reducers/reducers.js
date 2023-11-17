/* eslint-disable default-param-last */
import { ADD_TODO, ADD_USER } from "../actions/types/types";

const initialFitness = {
  todo: {},
  user: {},
};

function fitnessReducer(state = initialFitness, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { todo } = action.payload;

      return {
        ...state,
        todo,
      };
    }

    case ADD_USER: {
      const { user } = action.payload;

      return {
        ...state,
        user,
      };
    }

    default:
      return state;
  }
}

export default fitnessReducer;
