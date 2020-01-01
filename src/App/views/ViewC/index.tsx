import React, {FC, useState} from 'react';

import {ModelC} from 'App/models/entities';

import {Nav, ComponentC} from 'App/views/components';
import './index.css';

export const ViewC: FC = () => {

  const [modelC] = useState(new ModelC('Model C'));
  const [, setTimestamp] = useState(new Date());

  function render() {
    setTimestamp(new Date());
  }

  function update() {
    modelC.update('Model C!');
    render();
  }

  return (
    <section className="ViewC">
      <Nav />
      <h1>View C : {modelC.name}</h1>
      <div><button onClick={update}>Update</button></div>
      <ComponentC model={modelC} onChange={render} />
    </section>
  );
};
