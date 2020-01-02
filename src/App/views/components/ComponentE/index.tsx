import React, {FC} from 'react';

import {Model} from 'App/models/entities';

import './index.css';

interface Props {
  model: Model;
  onUpdate?: () => void;
}

export const ComponentE: FC<Props> = props => {

  const {model, onUpdate, children} = props;

  function update() {
    model.update('Component E');
    if (onUpdate) onUpdate();
  }

  return (
    <section className="ComponentE">
      <h1>Component E : {model.name}</h1>
      <div><button onClick={update}>Update</button></div>
      {children}
    </section>
  );
};
