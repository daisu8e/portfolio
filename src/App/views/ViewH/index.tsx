import React, {FC, useState} from 'react';

import {ModelH} from 'App/models/entities';

import {Nav, ComponentH} from 'App/views/components';
import './index.css';

export const ViewH: FC = () => {

  const [modelH] = useState(new ModelH('View H'));
  const [, setTimestamp] = useState(new Date());

  function render() {
    setTimestamp(new Date());
  }

  function update() {
    modelH.update('View H!');
    render();
  }

  return (
    <section className="ViewH">
      <Nav/>
      <h1>View H : {modelH.name}</h1>
      <div><button onClick={update}>Update</button></div>
      <ComponentH model={modelH} onUpdate={render} />
    </section>
  );
};
