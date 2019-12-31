import React, {FC, useState} from 'react';

import {ModelA} from 'App/models';

import {Nav} from 'App/views/components';
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
      <Nav />
      <h1>Home : {model.name}</h1>
      <div><button onClick={update}>Update</button></div>
    </section>
  );
};
