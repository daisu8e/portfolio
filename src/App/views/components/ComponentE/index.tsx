import React, {FC} from 'react';

import {Model} from 'App/models/entities';

import './index.css';

interface Props {
  model: Model;
  onChange?: Function;
}

export const ComponentE: FC<Props> = (props) => {

  function update() {
    props.model.update('Component E');
    if (props.onChange) props.onChange();
  }

  return (
    <section className="ComponentE">
      <h1>Component E : {props.model.name}</h1>
      <div><button onClick={update}>Update</button></div>
      {props.children}
    </section>
  );
};
