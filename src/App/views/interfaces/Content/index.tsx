import React, {FC} from 'react';

import {Author} from 'App/models/entities/Author';

import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {faFilePdf} from '@fortawesome/free-regular-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {MobileNav} from 'App/views/components/MobileNav';
import {SimpleLogo} from 'App/views/components/logos/SimpleLogo';
import {About} from './About';
import {Work} from './Work';
import {Theory} from './Theory';
import {Skills} from './Skills';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Menu, Sns, Header, MobileHeader, Body, WideWindow, NarrowWindow} from './index.styled';

interface Props {
  author: Author;
  location: {pathname: string};
}

export const Content: FC<Props> = props => {

  const {author, location} = props;

  function here(pathname: string): string {
    return location.pathname === pathname ? 'here' : '';
  }

  return (
    <>
      <WideWindow>
        <Header>
          <Link to="">
            <div><SimpleLogo/></div>
            <div>{author.name} <small>Front-end Web Developer</small></div>
          </Link>
        </Header>
        <Menu>
          <Link to="/about" className={here('/about')}>About</Link>
          <Link to="/work" className={here('/work')}>Work</Link>
          <Link to="/theory" className={here('/theory')}>Theory</Link>
          <Link to="/skills" className={here('/skills')}>Skills</Link>
        </Menu>
        <Sns>
          <a href="https://github.com/daisu8e/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
          <a href="https://www.linkedin.com/in/daisu8e/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
          <a href="/daisuke-katsumata.pdf" target="_blank"><FontAwesomeIcon icon={faFilePdf}/></a>
        </Sns>
      </WideWindow>
      <NarrowWindow>
        <MobileHeader>
          <div>
            <Link to="">
              <div><SimpleLogo/></div>
            </Link>
          </div>
        </MobileHeader>
      </NarrowWindow>
      <Body>
        <Switch>
          <Route path="/about" render={p => <About {...p} author={author}/>}/>
          <Route path="/work" render={p => <Work {...p} author={author}/>}/>
          <Route path="/theory" render={p => <Theory {...p} author={author}/>}/>
          <Route path="/skills" render={p => <Skills {...p} author={author}/>}/>
          <Redirect to=""/>
        </Switch>
      </Body>
      <NarrowWindow><MobileNav location={location}/></NarrowWindow>
    </>
  );
};
