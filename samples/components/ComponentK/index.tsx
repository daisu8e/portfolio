import React, {FC, useState} from 'react';

import {Model} from 'src/App/models/entities';

import styles from './index.module.scss';

interface Props {
  model: Model;
  onUpdate?: () => void;
}

export const ComponentK: FC<Props> = props => {

  const {model, onUpdate} = props;
  const [opacity, setOpacity] = useState(0);

  function update() {
    model.update('Component K');
    setOpacity(1);
    if (onUpdate) onUpdate();
  }

  return (
    <section className={styles.ComponentK}>
      <h1>Component K : {model.name}</h1>
      <div><button onClick={update}>Update</button></div>
      <div className={styles.animation} style={{opacity: opacity}}>{model.name}</div>
    </section>
  );
};
