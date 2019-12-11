import React, { FC } from 'react';
import Item from './Item';

interface Props {
  title: string;
  items: Item[];
}

const ItemListFC: FC<Props> = ({title, items}) => (
  <div className="ItemList">
    <h1>{title}</h1>
    <ul>
      {items.map(it => (<li key={it.id}>{it.name}</li>))}
    </ul>
  </div>
);

export default ItemListFC;
