import React, {FC, useEffect} from 'react';

import {Author} from 'App/models/entities/Author';

import {Link} from 'react-router-dom';
import {Name, Menu, Content, GitHub, LinkedIn, Resume} from './index.styled';

interface Props {
  author: Author;
}

export const Cover: FC<Props> = props => {

  const {author} = props;

  function init() {
    window.scrollTo(0, 0);
    document.title = author.name;
  }

  useEffect(init, []);

  return (
    <>
      <Name>
        <h1>Daisuke Katsumata</h1>
        <p>
          Front-end Web Developer
          <span><GitHub/></span>
          <span><LinkedIn/></span>
          <span><Resume/></span>
        </p>
      </Name>
      <Menu>
        <Link to="/about">
          <Content>
            <h2>About</h2>
            <ul>
              <li>Front-end web developer</li>
              <li>Ultimate goal</li>
              <li>Favorite motto</li>
              <li>Strongest skill</li>
              <li>Weak points</li>
            </ul>
          </Content>
        </Link>
        <Link to="/work">
          <Content>
            <h2>Work</h2>
            <ul>
              <li>React App</li>
              <li>AngularJS App</li>
              <li>Tracking Script</li>
              <li>Rails Web API</li>
              <li>Rails App</li>
            </ul>
          </Content>
        </Link>
        <Link to="/theory">
          <Content>
            <h2>Theory</h2>
            <ul>
              <li>Software Architecture</li>
              <li>MVC</li>
              <li>Flux</li>
              <li>M + nested VC</li>
              <li>Component Architecture</li>
            </ul>
          </Content>
        </Link>
        <Link to="/skills">
          <Content>
            <h2>Skills</h2>
            <ul>
              <li>Domain-driven Design</li>
              <li>Object-oriented Programming</li>
              <li>Code Refactoring</li>
              <li>UI/UX Design</li>
              <li>CI/CD</li>
            </ul>
          </Content>
        </Link>
      </Menu>
    </>
  );
};
