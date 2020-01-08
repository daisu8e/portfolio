import React, {FC, useState} from 'react';

import {ModelI} from 'App/models/entities';

import {ComponentI} from 'App/views/components';
import styles from './index.module.scss';

export const ViewI: FC = () => {

  const [modelI] = useState(new ModelI('Model I'));
  const [, setTimestamp] = useState(new Date());

  function render() {
    setTimestamp(new Date());
  }

  function update() {
    modelI.update('Model I!');
    render();
  }

  return (
    <section>
      <h1>View I : {modelI.name}</h1>
      <div><button onClick={update}>Update</button></div>
      <div className={styles.a}>aaa</div>
      <div className={styles.b}>bbb</div>
      <div className={styles.c}>ccc</div>
      <div className={[styles.a, styles.b].join(' ')}>ccc</div>
      <ComponentI model={modelI} onUpdate={render}/>
    </section>
  );
};
