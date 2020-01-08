import React, {FC, useState, useEffect} from 'react';

import {ModelHRepository} from 'App/models/repositories';
import {Model, ModelH} from 'App/models/entities';

import {ComponentH} from 'App/views/components';
import './index.css';

export const ViewH: FC = () => {

  const [modelH, setModelH] = useState<Model>(new ModelH());

  function init() {
    ModelHRepository.read(1).then(it => setModelH(it));
  }

  function update() {
    ModelHRepository.read(2).then(it => setModelH(it));
  }

  useEffect(init, []);

  return (
    <section className="ViewH">
      <h1>View H : {modelH.name}</h1>
      <div><button onClick={update}>Update</button></div>
      <ComponentH model={modelH} onUpdate={setModelH} />
    </section>
  );
};
