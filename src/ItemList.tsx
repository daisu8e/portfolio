import React, { Component } from 'react';
import Item from './Item';

interface Props {
  title: string;
  items: Item[];
}

class ItemList extends Component<Props> {
  render() {
    const { title, items } = this.props;

    return (
      <div className="ItemList">
        <h1>{title}</h1>
        <ul>
          {items.map(it => (<li key={it.id}>{it.name}</li>))}
        </ul>
      </div>
    );
  }
}

export default ItemList;
