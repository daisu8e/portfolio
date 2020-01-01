import React, {FC} from 'react';

import {Model} from 'App/models/entities';

import './index.css';

interface Props {
  model: Model;
  onChange?: Function;
}

export const ComponentC: FC<Props> = (props) => {

  function update() {
    props.model.update('Component C');
    if (props.onChange) props.onChange();
  }

  return (
    <section className="ComponentC">
      <h1>Component C : {props.model.name}</h1>
      <div><button onClick={update}>Update</button></div>
    </section>
  );
};
