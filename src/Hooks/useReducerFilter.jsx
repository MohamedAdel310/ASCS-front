import { useReducer } from "react";

const initialState = {
  filterJob: {},
  filterDepartment: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "job": {
      const { inputStatus, inputName } = action.payload;
      return {
        ...state,
        filterJob: inputStatus
          ? { ...state.filterJob, [inputName]: true }
          : { ...state.filterJob, [inputName]: false },
      };
    }
    case "department": {
      const { inputStatus, inputName } = action.payload;
      return {
        ...state,
        filterDepartment: inputStatus
          ? { ...state.filterDepartment, [inputName]: true }
          : { ...state.filterDepartment, [inputName]: false },
      };
    }
    case "reset": {
      return initialState;
    }
    default:
      throw new Error("Action unkonwn");
  }
}

export default function useReducerFilter() {
  const [filter, dispatch] = useReducer(reducer, initialState);

  return [filter, dispatch];
}
