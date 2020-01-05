import React, {FC, useState} from 'react';

import {ModelK} from 'App/models/entities';

import {Nav, ComponentK} from 'App/views/components';
import styles from './index.module.scss';

export const ViewK: FC = () => {

  const [modelK] = useState(new ModelK('Default K'));
  const [, setTimestamp] = useState(new Date());
  const [opacity, setOpacity] = useState(0);

  function render() {
    setTimestamp(new Date());
  }

  function update() {
    modelK.update('View K!');
    setOpacity(1);
    render();
  }

  return (
    <section className={styles.ViewK}>
      <Nav/>
      <h1>View K : {modelK.name}</h1>
      <div><button onClick={update}>Update</button></div>
      <div className={styles.animation} style={{opacity: opacity}}>
        {modelK.name}
        <ComponentK model={modelK} onUpdate={render}/>
      </div>
    </section>
  );
};
