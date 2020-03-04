import React, {FC, useEffect} from 'react';
import _ from 'lodash';

import {Author} from 'App/models/entities/Author';

import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faFilePdf} from '@fortawesome/free-regular-svg-icons';
import {Logo} from 'App/views/components/Logo';
import {Background, Artwork, Title, Contents} from './index.styled';

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
      <Background/>
      <Artwork><Logo/></Artwork>
      <Title>
        <h1>{author.name}</h1>
        <p>
          Front-end Web Developer
          <a href="https://github.com/daisu8e/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
          <a href="https://www.linkedin.com/in/daisu8e/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
          <a href="/daisuke-katsumata.pdf" target="_blank"><FontAwesomeIcon icon={faFilePdf}/></a>
        </p>
      </Title>
      <Contents>
        <Link to="/about">
          <h2>About</h2>
          <ul>
            <li>10-year experience</li>
            <li>Ultimate goal</li>
            <li>Favorite motto</li>
            <li>Strongest skill</li>
            <li>Weak points</li>
          </ul>
        </Link>
        <Link to="/work">
          <h2>Work</h2>
          <ul>
            <li>React App</li>
            <li>AngularJS App</li>
            <li>Tracking Script</li>
            <li>Rails Web API</li>
            <li>Rails App</li>
          </ul>
        </Link>
        <Link to="/theory">
          <h2>Theory</h2>
          <ul>
            <li>Software Architecture</li>
            <li>MVC</li>
            <li>Flux</li>
            <li>M + nested VC</li>
            <li>Component Architecture</li>
          </ul>
        </Link>
        <Link to="/skills">
          <h2>Skills</h2>
          <ul>
            <li>DDD</li>
            <li>OOP</li>
            <li>Code Refactoring</li>
            <li>UI/UX Design</li>
            <li>CI/CD</li>
          </ul>
        </Link>
      </Contents>
      */}
    </>
  );
};
