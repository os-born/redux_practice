import React from "react";
import s from "./Counter.module.css";

const Controls = ({ step = 1, onIncrement, onDecrement }) => (
  <div className={s.Counter__controls}>
    <button type="button" onClick={onDecrement}>
      Уменьшить на {step}
    </button>
    <button type="button" onClick={onIncrement}>
      Увеличить на {step}
    </button>
  </div>
);

export default Controls;
