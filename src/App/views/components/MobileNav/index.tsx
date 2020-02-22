import React, {FC, useState, useEffect, MouseEvent} from 'react';

import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {faFilePdf} from '@fortawesome/free-regular-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {Logo} from 'App/views/components/Logo';
import {Root, Body, Item, Option, Button, Menu} from './index.styled';

export const MobileNav: FC = () => {

//  const [event, setEvent] = useState();
  const [menu, setMenu] = useState(false);

  function init() {
//    window.addEventListener('click', aaa);
//  }

//  function aaa() {
//    console.log(event);
//    console.log(menu);
////      console.log(e.target === event.target);
  }

  function getHereClass(location: string): string {
    return '';
  }

  function switchMenu(event: MouseEvent) {
//    console.log(event.nativeEvent);
//    setEvent(event.nativeEvent);
    setMenu(!menu);
  }

  useEffect(init, []);

  return (
    <Root>
      <Body>
        <Item><Link to=""><Logo/></Link></Item>
        <Item><Link to="/about" className={getHereClass('/about')}>About</Link></Item>
        <Item><Link to="/work" className={getHereClass('/work')}>Work</Link></Item>
        <Item><Link to="/theory" className={getHereClass('/theory')}>Theory</Link></Item>
        <Item><Link to="/skills" className={getHereClass('/skills')}>Skills</Link></Item>
        <Item>
          <Option>
            <Button onClick={switchMenu}><FontAwesomeIcon icon={faEllipsisV}/></Button>
            <Menu open={menu}>
              <div><a href="https://github.com/daisu8e/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a></div>
              <div><a href="https://www.linkedin.com/in/daisu8e/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a></div>
              <div><a href="/daisuke-katsumata.pdf" target="_blank"><FontAwesomeIcon icon={faFilePdf}/></a></div>
            </Menu>
          </Option>
        </Item>
      </Body>
    </Root>
  );
};
