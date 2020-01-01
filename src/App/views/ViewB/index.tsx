import React, {FC, useState} from 'react';

import {ModelB} from 'App/models/entities';

import {Nav, ComponentB} from 'App/views/components';
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
      <Nav />
      <h1>View B : {modelB.name}</h1>
      <div><button onClick={update}>Update</button></div>
      <ComponentB model={modelB} onChange={render} />
    </section>
  );
};
