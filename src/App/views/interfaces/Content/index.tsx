import React, {FC} from 'react';

import {Author} from 'App/models/entities/Author';

import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {faFilePdf} from '@fortawesome/free-regular-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {MobileNav} from 'App/views/components/MobileNav';
import {Triangle} from 'App/views/components/Triangle';
import {Logo} from 'App/views/components/Logo';
import {About} from './About';
import {Work} from './Work';
import {Theory} from './Theory';
import {Skills} from './Skills';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Menu, Sns, Header, Body, WideWindow, NarrowWindow} from './index.styled';

interface Props {
  author: Author;
  location: {pathname: string};
}

export const Content: FC<Props> = props => {

  const {author} = props;

  function getHereClass(location: string): string {
    return props.location.pathname === location ? 'here' : '';
  }

  return (
    <>
      <WideWindow>
        <Header>
          <Link to="">
            <div><Logo/></div>
            <div>{author.name} <div>Front-end Web Developer</div></div>
          </Link>
        </Header>
        <Menu>
          <Link to="/about" className={getHereClass('/about')}>About</Link>
          <Link to="/work" className={getHereClass('/work')}>Work</Link>
          <Link to="/theory" className={getHereClass('/theory')}>Theory</Link>
          <Link to="/skills" className={getHereClass('/skills')}>Skills</Link>
        </Menu>
        <Sns>
          <a href="https://github.com/daisu8e/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
          <a href="https://www.linkedin.com/in/daisu8e/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
          <a href="/daisuke-katsumata.pdf" target="_blank"><FontAwesomeIcon icon={faFilePdf}/></a>
        </Sns>
      </WideWindow>
      {/*

      <Name>
        <Link to="">{author.name}</Link>
      </Name>
      <Menu>
        <Link to="/about" className={getHereClass('/about')}>About</Link>
        <Link to="/work" className={getHereClass('/work')}>Work</Link>
        <Link to="/theory" className={getHereClass('/theory')}>Theory</Link>
        <Link to="/skills" className={getHereClass('/skills')}>Skills</Link>
      </Menu>
      <Sns>
        <a href="https://github.com/daisu8e/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
        <a href="https://www.linkedin.com/in/daisu8e/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
        <a href="/daisuke-katsumata.pdf" target="_blank"><FontAwesomeIcon icon={faFilePdf}/></a>
      </Sns>
      */}
      <Body>
        <Switch>
          <Route path="/about" render={p => <About {...p} author={author}/>}/>
          <Route path="/work" render={p => <Work {...p} author={author}/>}/>
          <Route path="/theory" render={p => <Theory {...p} author={author}/>}/>
          <Route path="/skills" render={p => <Skills {...p} author={author}/>}/>
          <Redirect to=""/>
        </Switch>
      </Body>
      <NarrowWindow><MobileNav/></NarrowWindow>
    </>
  );
};
