import React, {FC, useState} from 'react';

const FunctionComponentState: FC = () => {
  const [count, setCount] = useState(123);
  const increment = () => { setCount(count + 1); };
  const decrement = () => { setCount(count - 1); };
  return (
    <section className="FunctionComponentState">
      <h1>Function Component with State</h1>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </section>
  );
};

export default FunctionComponentState;
