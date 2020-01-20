import React, {FC, useState} from 'react';

import {ModelE} from 'src/App/models/entities';

import {ComponentE, ComponentF, ComponentA} from 'src/App/views/components';
import './index.css';

export const ViewE: FC = () => {

  const [modelE] = useState(new ModelE('Model E'));
  const [, setTimestamp] = useState(new Date());

  function render() {
    setTimestamp(new Date());
  }

  function update() {
    modelE.update('Model E!');
    render();
  }

  return (
    <section className="ViewE">
      <h1>View E : {modelE.name}</h1>
      <div><button onClick={update}>Update</button></div>
      <ComponentE model={modelE} onUpdate={render}>
        <ComponentF model={modelE} onUpdate={render}>
          <ComponentA model={modelE} onUpdate={render} />
        </ComponentF>
      </ComponentE>
    </section>
  );
};
