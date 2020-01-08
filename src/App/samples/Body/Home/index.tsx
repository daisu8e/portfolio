import React, {FC, useState} from 'react';

import {ModelA} from 'App/models/entities';

import './index.css';

export const Home: FC = () => {

  const [model] = useState(new ModelA('Model A'));
  const [, setTimestamp] = useState(new Date());

  function render() {
    setTimestamp(new Date());
  }

  function update() {
    model.update('Model A!');
    render();
  }

  return (
    <section className="Home">
      <h1>Home : {model.name}</h1>
      <div><button onClick={update}>Update</button></div>
    </section>
  );
};
