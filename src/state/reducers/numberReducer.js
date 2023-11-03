const numberReducer = (state = 100, action) => {
  switch (action.type) {
    case "add":
      return state + action.value;

    case "subtract":
      return state - action.value;

    case "multiply":
      return state * action.value;

    case "divide":
      return state / action.value;

    default:
      return state;
  }
};

export default numberReducer;
