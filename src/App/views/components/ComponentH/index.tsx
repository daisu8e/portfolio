import React, {FC} from 'react';

import {ModelHRepository} from 'App/models/repositories';
import {Model} from 'App/models/entities';

import './index.css';

interface Props {
  model: Model;
  onUpdate?: (model: Model) => void;
}

export const ComponentH: FC<Props> = props => {

  const {model, onUpdate = () => {}} = props;

  function update() {
    ModelHRepository.read(3).then(it => onUpdate(it));
  }

  return (
    <section className="ComponentH">
      <h1>Component H : {model.name}</h1>
      <div><button onClick={update}>Update</button></div>
    </section>
  );
};
