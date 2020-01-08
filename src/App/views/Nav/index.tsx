import React, {FC} from 'react';

import {Link} from 'react-router-dom';
import css from './index.module.scss';

export const Nav: FC = () => {
  return (
    <div className={css.root}>
      <div><Link to="">Daisuke Katsumata</Link></div>
      <div><Link to="/about">About</Link></div>
      <div><Link to="/work">Work</Link></div>
      <div><Link to="/theory">Theory</Link></div>
      <div><Link to="/skills">Skills</Link></div>
      <div><a href="https://github.com/daisu8e/" target="_blank">GitHub</a></div>
      <div><a href="https://www.linkedin.com/in/daisu8e/" target="_blank">LinkedIn</a></div>
      <div><a href="/daisuke-katsumata.pdf" target="_blank">Resume</a></div>
    </div>
  );
};
