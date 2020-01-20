import React, {FC} from 'react';

import {Model} from 'src/App/models/entities';

import styles from './index.module.scss';

interface Props {
  model: Model;
  onUpdate?: () => void;
}

export const ComponentL: FC<Props> = props => {

  const {model, onUpdate} = props;

  function update() {
    model.update('Component L');
    if (onUpdate) onUpdate();
  }

  return (
    <section className={styles.ComponentL}>
      <h1>Component L : {model.name}</h1>
      <div><button onClick={update}>Update</button></div>
    </section>
  );
};
