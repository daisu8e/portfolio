import React, {FC, useState} from 'react';

import {ModelJ} from 'src/App/models/entities';

import {ComponentJ} from 'src/App/views/components';
import styles from './index.module.scss';

export const ViewJ: FC = () => {

  const [modelJ] = useState(new ModelJ('Default J'));
  const [, setTimestamp] = useState(new Date());
  const [color, setColor] = useState('red');

  function render() {
    setTimestamp(new Date());
  }

  function update() {
    modelJ.update('View J');
    setColor('blue');
    render();
  }

  return (
    <section className={styles.ViewJ} style={{backgroundColor: color}}>
      <h1>View J : {modelJ.name}</h1>
      <div><button onClick={update}>Update</button></div>
      <ComponentJ model={modelJ} onUpdate={render}/>
    </section>
  );
};