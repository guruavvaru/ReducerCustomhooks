const { useReducer } = require("react");

const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const initialState = { count: 0 };

const ReducerCounter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <>
      {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
};
export default ReducerCounter;
