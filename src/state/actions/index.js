const addNumber = (amount) => {
  return { type: "add", value: amount };
};

const subtractNumber = (amount) => {
  return { type: "subtract", value: amount };
};

const multiplyNumber = (amount) => {
  return { type: "multiply", value: amount };
};

const divideNumber = (amount) => {
  return { type: "divide", value: amount };
};

export { addNumber, subtractNumber, multiplyNumber, divideNumber };
