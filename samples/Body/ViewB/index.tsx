import React, {FC, useState} from 'react';

import {ModelB} from 'src/App/models/entities';

import {ComponentB} from 'src/App/views/components';
import './index.css';

export const ViewB: FC = () => {

  const [modelB] = useState(new ModelB('Model B'));
  const [, setTimestamp] = useState(new Date());

  function render() {
    setTimestamp(new Date());
  }

  function update() {
    modelB.update('Model B!');
    render();
  }

  return (
    <section className="ViewB">
      <h1>View B : {modelB.name}</h1>
      <div><button onClick={update}>Update</button></div>
      <ComponentB model={modelB} onUpdate={render} />
    </section>
  );
};
