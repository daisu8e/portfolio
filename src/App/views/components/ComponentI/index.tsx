import React, {FC} from 'react';

import {Model} from 'App/models/entities';

import styles from './index.module.scss';

interface Props {
  model: Model;
  onUpdate?: () => void;
}

export const ComponentI: FC<Props> = props => {

  const {model, onUpdate} = props;

  function update() {
    model.update('Component I');
    if (onUpdate) onUpdate();
  }

  return (
    <section>
      <h1>Component I : {model.name}</h1>
      <div><button onClick={update}>Update</button></div>
      <div className={styles.a}>aaa</div>
      <div className={styles.b}>bbb</div>
      <div className={styles.c}>ccc</div>
      <div className={[styles.a, styles.b].join(' ')}>ccc</div>
    </section>
  );
};
