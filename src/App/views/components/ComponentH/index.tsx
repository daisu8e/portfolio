import React, {FC} from 'react';

import {Model} from 'App/models/entities';

import './index.css';

interface Props {
  model: Model;
  onUpdate?: () => void;
}

export const ComponentH: FC<Props> = (props) => {

  const {model, onUpdate} = props;

  function update() {
    model.update('Component H');
    if (onUpdate) onUpdate();
  }

  return (
    <section className="ComponentH">
      <h1>Component H : {model.name}</h1>
      <div><button onClick={update}>Update</button></div>
    </section>
  );
};
