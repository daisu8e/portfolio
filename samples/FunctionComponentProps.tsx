import React, {FC} from 'react';
import Item from './Item';

interface Props {
  desc: string;
  items: Item[];
}

const FunctionComponentProps: FC<Props> = ({desc, items}) => (
  <section className="FunctionComponentProps">
    <h1>Function Component with Props</h1>
    <p>{desc}</p>
    <ul>
      {items.map(it => (<li key={it.id}>{it.name}</li>))}
    </ul>
  </section>
);

export default FunctionComponentProps;
