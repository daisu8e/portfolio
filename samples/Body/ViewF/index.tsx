import React, {FC, useState} from 'react';

import {ModelF} from 'src/App/models/entities';

import {ComponentF, ComponentA} from 'src/App/views/components';
import './index.css';

export const ViewF: FC = () => {

  const [modelF] = useState(new ModelF('Model F'));
  const [, setTimestamp] = useState(new Date());

  function render() {
    setTimestamp(new Date());
  }

  function update() {
    modelF.update('Model F!');
    render();
  }

  return (
    <section className="ViewF">
      <h1>View F : {modelF.name}</h1>
      <div><button onClick={update}>Update</button></div>
      <ComponentF model={modelF} onUpdate={render}>
        <ComponentA model={modelF} onUpdate={render} />
      </ComponentF>
    </section>
  );
};