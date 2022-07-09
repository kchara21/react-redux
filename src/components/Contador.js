import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "../reducers/contadorSlice";
import {
  increment_5,
  decremented_5,
  incremented,
  decremented,
  reset,
} from "../reducers/contadorSlice";
const Contador = () => {
  const state = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(5);
  const [drecementAmount, setDrecementAmount] = useState(5);


  return (
    <div>
      <h2>Contador REDUX</h2>
      <nav>
        <button onClick={() => dispatch(increment_5(incrementAmount))}>+5</button>
        <button onClick={() => dispatch(incremented())}>+1</button>
        <button onClick={() => dispatch(reset())}>0</button>
        <button onClick={() => dispatch(decremented())}>-1</button>
        <button onClick={() => dispatch(decremented_5(drecementAmount))}>-5</button>
      </nav>
      <h3>ESTADO: {state}</h3>
    </div>
  );
};

export default Contador;
