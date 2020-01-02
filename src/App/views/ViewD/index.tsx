import React, {FC, useState} from 'react';

import {ModelD} from 'App/models/entities';

import {Nav, ComponentD, ComponentE, ComponentF, ComponentA} from 'App/views/components';
import './index.css';

export const ViewD: FC = () => {

  const [modelD] = useState(new ModelD('Model D'));
  const [, setTimestamp] = useState(new Date());

  function render() {
    setTimestamp(new Date());
  }

  function update() {
    modelD.update('Model D!');
    render();
  }

  return (
    <section className="ViewD">
      <Nav />
      <h1>View D : {modelD.name}</h1>
      <div><button onClick={update}>Update</button></div>
      <ComponentD model={modelD} onUpdate={render}>
        <ComponentE model={modelD} onUpdate={render}>
          <ComponentF model={modelD} onUpdate={render}>
            <ComponentA model={modelD} onUpdate={render} />
          </ComponentF>
        </ComponentE>
      </ComponentD>
    </section>
  );
};
