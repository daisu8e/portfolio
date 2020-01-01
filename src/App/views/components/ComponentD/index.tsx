import React, {FC} from 'react';

import {Model} from 'App/models/entities';

import './index.css';

interface Props {
  model: Model;
  onChange?: Function;
}

export const ComponentD: FC<Props> = (props) => {

  function update() {
    props.model.update('Component D');
    if (props.onChange) props.onChange();
  }

  return (
    <section className="ComponentD">
      <h1>Component D : {props.model.name}</h1>
      <div><button onClick={update}>Update</button></div>
      {props.children}
    </section>
  );
};
