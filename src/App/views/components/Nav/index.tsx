import React, {FC} from 'react';

import {Link} from "react-router-dom";
import './index.css';

export const Nav: FC = () => {
  return (
    <nav className="Nav">
      <Link to="">Home</Link>
      <span> | </span>
      <Link to="/view-a">View A</Link>
      <span> | </span>
      <Link to="/view-b">View B</Link>
      <span> | </span>
      <Link to="/view-c">View C</Link>
      <span> | </span>
      <Link to="/view-x">View X</Link>
    </nav>
  );
};
