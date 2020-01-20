import React, {FC} from 'react';

import {Model} from 'src/App/models/entities';

import './index.css';

interface Props {
  model: Model;
  onUpdate?: () => void;
}

export const ComponentC: FC<Props> = props => {

  const {model, onUpdate} = props;

  function update() {
    model.update('Component C');
    if (onUpdate) onUpdate();
  }

  return (
    <section className="ComponentC">
      <h1>Component C : {model.name}</h1>
      <div><button onClick={update}>Update</button></div>
    </section>
  );
};
