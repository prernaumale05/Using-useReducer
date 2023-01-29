import React, { useReducer } from "react";
import "./styles.css";

const initialState = 0;

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "ADD") {
    return state + 1;
  }
  if (state > 0 && action.type === "SUB") {
    return state - 1;
  }

  // if (action.type === "SUB") {
  //   return state - 1;
  // }
  if (action.type === "MUL") {
    return state * 2;
  }
  if (action.type === "DIV") {
    return state / 2;
  }
  if (action.type === "SQUARE") {
    return state ** 2;
  }
  if (action.type === "MODULE") {
    return state % 2;
  }
  return state;
};
const UseReducer = () => {
  const [state, Dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>{state}</h1>
      <div className="button">
        <button onClick={() => Dispatch({ type: "ADD" })}>INCREMENT</button>
        <button onClick={() => Dispatch({ type: "SUB" })}>DECREMENT</button>
        <button onClick={() => Dispatch({ type: "MUL" })}>MULTIPLY</button>
        <button onClick={() => Dispatch({ type: "DIV" })}>DIVISION</button>
        <button onClick={() => Dispatch({ type: "SQUARE" })}>SQUARE</button>
        <button onClick={() => Dispatch({ type: "MODULE" })}>MODULE</button>
      </div>
    </>
  );
};
export default UseReducer;
