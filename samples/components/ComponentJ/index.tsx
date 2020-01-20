import React, {FC, useState} from 'react';

import {Model} from 'src/App/models/entities';

import styles from './index.module.scss';

interface Props {
  model: Model;
  onUpdate?: () => void;
}

export const ComponentJ: FC<Props> = props => {

  const {model, onUpdate} = props;
  const [color, setColor] = useState('yellow');

  function update() {
    model.update('Component J');
    setColor('green');
    if (onUpdate) onUpdate();
  }

  return (
    <section className={styles.ComponentJ} style={{backgroundColor: color}}>
      <h1>Component J : {model.name}</h1>
      <div><button onClick={update}>Update</button></div>
    </section>
  );
};
