import React, {FC, useEffect} from 'react';

import css from './index.module.scss';

export const Skills: FC = () => {

  function init() {
    window.scrollTo(0, 0);
    document.title = 'Skills of Daisuke Katsumata';
  }

  useEffect(init, []);

  return (
    <div className={css.body}>
      <h1>Skills</h1>
      <h2>Software Development</h2>
      <ul>
        <li>Domain Driven Design</li>
        <li>Object Oriented Programming</li>
        <li>Component Oriented Programming</li>
        <li>Design Patterns</li>
        <li>Unit Testing</li>
        <li>Beautiful Code</li>
        <li>Code Organization</li>
        <li>Agile</li>
      </ul>
      <h2>Front-end Web Development</h2>
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Angular 1.x</li>
        <li>lodash</li>
        <li>jQuery</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Sass</li>
        <li>Bootstrap</li>
      </ul>
      <h2>Back-end Web Development</h2>
      <ul>
        <li>Ruby</li>
        <li>Ruby on Rails</li>
        <li>MySQL</li>
      </ul>
      <h2>Infrastructure</h2>
      <ul>
        <li>AWS</li>
        <li>Ansible</li>
        <li>Terraform</li>
      </ul>
      <h2>CI / CD</h2>
      <ul>
        <li>Jenkins</li>
        <li>CircleCI</li>
      </ul>
    </div>
  );
};
