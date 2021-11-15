import React from "react";
import s from "./Counter.module.css";

const Value = ({ value = 0 }) => (
  <span className={s.Counter__value}>{value}</span>
);

export default Value;
