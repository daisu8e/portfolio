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
      <ComponentD model={modelD} onChange={render}>
        <ComponentE model={modelD} onChange={render}>
          <ComponentF model={modelD} onChange={render}>
            <ComponentA model={modelD} onChange={render} />
          </ComponentF>
        </ComponentE>
      </ComponentD>
    </section>
  );
};
