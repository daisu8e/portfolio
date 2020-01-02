import React, {FC} from 'react';

import {Model} from 'App/models/entities';

import './index.css';

interface Props {
  model: Model;
  onUpdate?: () => void;
}

export const ComponentF: FC<Props> = (props) => {

  const {model, onUpdate, children} = props;

  function update() {
    model.update('Component F');
    if (onUpdate) onUpdate();
  }

  return (
    <section className="ComponentF">
      <h1>Component F : {model.name}</h1>
      <div><button onClick={update}>Update</button></div>
      {children}
    </section>
  );
};
