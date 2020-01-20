import React, {FC} from 'react';

import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {About} from './About';
import {Work} from './Work';
import {Theory} from './Theory';
import {Skills} from './Skills';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faFilePdf} from '@fortawesome/free-regular-svg-icons'
import css from './index.module.scss';

export const Content: FC = props => {
  return (
    <>
      <div className={css.name}>
        <Link to="">Daisuke Katsumata</Link>
      </div>
      <div className={css.menu}>
        {/*
        <div><Link to="/about">A.</Link></div>
        <div><Link to="/work">W.</Link></div>
        <div><Link to="/theory">T.</Link></div>
        <div><Link to="/skills">S.</Link></div>
        */}
        <div><Link to="/about">About</Link></div>
        <div><Link to="/work">Work</Link></div>
        <div><Link to="/theory">Theory</Link></div>
        <div><Link to="/skills">Skills</Link></div>
      </div>
      <div className={css.sns}>
        <div><a href="https://github.com/daisu8e/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a></div>
        <div><a href="https://www.linkedin.com/in/daisu8e/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a></div>
        <div><a href="/daisuke-katsumata.pdf" target="_blank"><FontAwesomeIcon icon={faFilePdf}/></a></div>
      </div>
      {/*
      */}
      <div className={css.body}>
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/work" component={Work}/>
          <Route path="/theory" component={Theory}/>
          <Route path="/skills" component={Skills}/>
          <Redirect to=""/>
        </Switch>
      </div>
    </>
  );
};











//<div><Link to="/style-guide">Style Guide</Link></div>


