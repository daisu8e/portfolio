import React, {FC} from 'react';

import {Model} from 'src/App/models/entities';

import './index.css';

interface Props {
  model: Model;
  onUpdate?: () => void;
}

export const ComponentD: FC<Props> = props => {

  const {model, onUpdate, children} = props;

  function update() {
    model.update('Component D');
    if (onUpdate) onUpdate();
  }

  return (
    <section className="ComponentD">
      <h1>Component D : {model.name}</h1>
      <div><button onClick={update}>Update</button></div>
      {children}
    </section>
  );
};
