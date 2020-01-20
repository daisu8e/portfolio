import React, {FC} from 'react';

import {Link} from 'react-router-dom';
import styles from './index.module.scss';

export const Nav: FC = () => {
  return (
    <nav className={styles.Nav}>
      <Link to="">Home</Link>
      <span> | </span>
      <Link to="/view-a">View A</Link>
      <span> , </span>
      <Link to="/view-b">View B</Link>
      <span> , </span>
      <Link to="/view-c">View C</Link>
      <span> | </span>
      <Link to="/view-d">View D</Link>
      <span> , </span>
      <Link to="/view-e">View E</Link>
      <span> , </span>
      <Link to="/view-f">View F</Link>
      <span> | </span>
      <Link to="/view-g">View G</Link>
      <span> | </span>
      <Link to="/view-h">View H</Link>
      <span> | </span>
      <Link to="/view-i">View I</Link>
      <span> | </span>
      <Link to="/view-j">View J</Link>
      <span> | </span>
      <Link to="/view-k">View K</Link>
      <span> | </span>
      <Link to="/view-l">View L</Link>
      <span> | </span>
      <Link to="/view-x">View X</Link>
    </nav>
  );
};