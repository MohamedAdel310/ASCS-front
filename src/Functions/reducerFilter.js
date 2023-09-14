export default function reducer(state, action) {
  switch (action.type) {
    case "job": {
      const { inputStatus, inputName } = action.payload;
      return {
        ...state,
        filterJob: inputStatus
          ? { ...state.filterJob, [inputName]: 1 }
          : { ...state.filterJob, [inputName]: 0 },
      };
    }
    case "department": {
      const { inputStatus, inputName } = action.payload;
      return {
        ...state,
        filterDepartment: inputStatus
          ? { ...state.filterDepartment, [inputName]: 1 }
          : { ...state.filterDepartment, [inputName]: 0 },
      };
    }
    default:
      throw new Error("Action unkonwn");
  }
}
