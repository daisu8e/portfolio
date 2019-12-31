import React, {FC} from 'react';

import {Model} from 'App/models';

import {ComponentC} from 'App/views/components';
import './index.css';

interface Props {
  model: Model;
  onChange?: Function;
}

export const ComponentB: FC<Props> = (props) => {

  function update() {
    props.model.update('Component B');
    if (props.onChange) props.onChange();
  }

  return (
    <section className="ComponentB">
      <h1>Component B : {props.model.name}</h1>
      <div><button onClick={update}>Update</button></div>
      <ComponentC model={props.model} onChange={props.onChange} />
    </section>
  );
};
