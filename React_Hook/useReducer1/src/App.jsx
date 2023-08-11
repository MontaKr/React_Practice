import React, { useState, useReducer } from "react";

//usereducer - updating state
//dispatch - demanding for updating state
//action - detail of demand

const App = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "deposit":
        return state + action.payload;
      case "withdrawl":
        return state - action.payload;
      default:
        return state;
    }
  };

  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>Welcome to useReducer Bank</h2>
      <p>balance : {money}$</p>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ type: "deposit", payload: number });
        }}
      >
        deposit
      </button>
      <button
        onClick={() => {
          dispatch({ type: "withdrawl", payload: number });
        }}
      >
        withrawl
      </button>
    </div>
  );
};

export default App;
