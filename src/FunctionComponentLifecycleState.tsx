import React, {FC, useState, useEffect} from 'react';

const FunctionComponentLifecycleState: FC = () => {
  const [count, setCount] = useState(123);
  const increment = () => { setCount(count + 1); };
  const decrement = () => { setCount(count - 1); };
  useEffect(() => {
    console.log('FunctionComponentLifecycleState.componentDidMount');
  }, []);
  useEffect(() => {
    return () => {
      console.log('FunctionComponentLifecycleState.shouldComponentUpdate');
      console.log(count);
    }
  }, [count]);
  useEffect(() => {
    console.log('FunctionComponentLifecycleState.componentDidUpdate');
    console.log(count);
  }, [count]);
  useEffect(() => {
    return () => console.log('FunctionComponentLifecycleState.componentWillUnmount');
  }, []);
  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  );
};

export default FunctionComponentLifecycleState;
