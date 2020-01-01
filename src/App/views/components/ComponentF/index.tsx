import React, {FC} from 'react';

import {Model} from 'App/models/entities';

import './index.css';

interface Props {
  model: Model;
  onChange?: Function;
}

export const ComponentF: FC<Props> = (props) => {

  function update() {
    props.model.update('Component F');
    if (props.onChange) props.onChange();
  }

  return (
    <section className="ComponentF">
      <h1>Component F : {props.model.name}</h1>
      <div><button onClick={update}>Update</button></div>
      {props.children}
    </section>
  );
};
