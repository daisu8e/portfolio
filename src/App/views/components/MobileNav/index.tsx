import React, {FC, useState, MouseEvent} from 'react';

import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {faFilePdf} from '@fortawesome/free-regular-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {Root, Body, Menu} from './index.styled';

interface Props {
  location: {pathname: string};
}

export const MobileNav: FC<Props> = props => {

  const {location} = props;
  const [menu, setMenu] = useState(false);

  function here(pathname: string): string {
    return location.pathname === pathname ? 'here' : '';
  }

  function switchMenu() {
    setMenu(!menu);
  }

  return (
    <Root>
      <Body>
        <div><Link to="/about" className={here('/about')}>About</Link></div>
        <div><Link to="/work" className={here('/work')}>Work</Link></div>
        <div><Link to="/theory" className={here('/theory')}>Theory</Link></div>
        <div><Link to="/skills" className={here('/skills')}>Skills</Link></div>
        <div>
          <button onClick={switchMenu}><FontAwesomeIcon icon={faEllipsisV}/></button>
          <Menu open={menu}>
            <div><a href="https://github.com/daisu8e/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a></div>
            <div><a href="https://www.linkedin.com/in/daisu8e/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a></div>
            <div><a href="/daisuke-katsumata.pdf" target="_blank"><FontAwesomeIcon icon={faFilePdf}/></a></div>
          </Menu>
        </div>
      </Body>
    </Root>
  );
};
