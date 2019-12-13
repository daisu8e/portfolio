import React, {FC, useState} from 'react';
import FunctionComponentLifecycleState from './FunctionComponentLifecycleState';

const FunctionComponentLifecycle: FC = () => {
  const [visible, setVisible] = useState(true);
  const hide = () => { setVisible(false); };
  const show = () => { setVisible(true); };
  return (
    <section className="FunctionComponentLifecycle">
      <h1>Function Component with Lifecycle</h1>
      <div>
        <button onClick={hide}>hide</button>
        <button onClick={show}>show</button>
      </div>
      {visible && <FunctionComponentLifecycleState />}
    </section>
  );
};

export default FunctionComponentLifecycle;
