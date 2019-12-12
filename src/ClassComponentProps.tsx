import React, {Component} from 'react';
import Item from './Item';

interface Props {
  desc: string;
  items: Item[];
}

class ClassComponentProps extends Component<Props> {
  render() {
    const {desc, items} = this.props;
    return (
      <section className="ClassComponentProps">
        <h1>Class Component with Props</h1>
        <p>{desc}</p>
        <ul>
          {items.map(it => (<li key={it.id}>{it.name}</li>))}
        </ul>
      </section>
    );
  }
}

export default ClassComponentProps;
