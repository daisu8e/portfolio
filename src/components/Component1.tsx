import React, {FC} from 'react';

export interface Props {
  count?: number;
  decrement?: () => void;
  increment?: () => void;
  add?: (amount: number) => void;
}

export default (({count = 0, decrement = () => {}, increment = () => {}, add = () => {}}) => (
  <div className="Component1">
    <button onClick={decrement}>-1</button>
    <span>{count}</span>
    <button onClick={increment}>+1</button>
    <button onClick={() => add(10)}>+10</button>
  </div>
)) as FC<Props>;
