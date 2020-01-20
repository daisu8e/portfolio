import React, {FC, useEffect} from 'react';

import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faFilePdf} from '@fortawesome/free-regular-svg-icons'
import css from './index.module.scss';

export const Cover: FC = () => {

  function init() {
    window.scrollTo(0, 0);
    document.title = 'Daisuke Katsumata';
  }

  useEffect(init, []);

  return (
    <>
      <div className={css.name}>
        <h1>Daisuke Katsumata</h1>
        <br/>
        <p>Front-end Web Developer</p>
      </div>
      <div className={css.menu}>
        <div className={css.content}>
          <h2><Link to="/about">About</Link></h2>
          <br/>
          <p>Divide and Conquer is my motto.</p>
        </div>
        <div className={css.content}>
          <h2><Link to="/work">Work</Link></h2>
          <br/>
          <p>There are React App, Angular App, Rails JSON API, etc...</p>
        </div>
        <div className={css.content}>
          <h2><Link to="/theory">Theory</Link></h2>
          <br/>
          <p>Do you prefer Flux rather than MVC?</p>
        </div>
        <div className={css.content}>
          <h2><Link to="/skills">Skills</Link></h2>
          <br/>
          <p>My best skill is Refactoring.</p>
        </div>
      </div>
      <div className={css.sns}>
        <a href="https://github.com/daisu8e/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
        <a href="https://www.linkedin.com/in/daisu8e/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
        <a href="/daisuke-katsumata.pdf" target="_blank"><FontAwesomeIcon icon={faFilePdf}/></a>
      </div>
    </>
  );
};
