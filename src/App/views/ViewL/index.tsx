import React, {FC, useState} from 'react';

import {ModelL} from 'App/models/entities';

import {Nav, ComponentL} from 'App/views/components';
import styles from './index.module.scss';

export const ViewL: FC = () => {

  const [modelL] = useState(new ModelL('Default L'));
  const [, setTimestamp] = useState(new Date());

  function render() {
    setTimestamp(new Date());
  }

  function update() {
    modelL.update('View L');
    render();
  }

  return (
    <section className={styles.ViewL}>
      <Nav/>
      <h1>View L : {modelL.name}</h1>
      <div><button onClick={update}>Update</button></div>
      <ComponentL model={modelL} onUpdate={render}/>
    </section>
  );
};
