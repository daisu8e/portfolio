import React, {FC, useState} from 'react';

import {ModelA} from 'src/App/models/entities';

import {ComponentA} from 'src/App/views/components';
import './index.css';

export const ViewA: FC = () => {

  const [modelA] = useState(new ModelA('Model A'));
  const [, setTimestamp] = useState(new Date());

  function render() {
    setTimestamp(new Date());
  }

  function update() {
    modelA.update('Model A!');
    render();
  }

  return (
    <section className="ViewA">
      <h1>View A : {modelA.name}</h1>
      <div><button onClick={update}>Update</button></div>
      <ComponentA model={modelA} onUpdate={render} />
    </section>
  );
};
