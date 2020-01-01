import React, {FC} from 'react';

import {Model} from 'App/models/entities';

import {ComponentB} from 'App/views/components';
import './index.css';

interface Props {
  model: Model;
  onChange?: Function;
}

export const ComponentA: FC<Props> = (props) => {

  function update() {
    props.model.update('Component A');
    if (props.onChange) props.onChange();
  }

  return (
    <section className="ComponentA">
      <h1>Component A : {props.model.name}</h1>
      <div><button onClick={update}>Update</button></div>
      <ComponentB model={props.model} onChange={props.onChange} />
    </section>
  );
};
