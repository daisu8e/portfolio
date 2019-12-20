import React, {FC} from 'react';

export interface Props {
  count?: number;
}

const range = (n: number) => (n < 0 ? [] : Array.from(Array(n), (_, i) => i));

export default (({count = 0}) => (
  <div className="Component2">
    {range(count).map(i => (<span key={i}>{i + 1} </span>))}
  </div>
)) as FC<Props>;
