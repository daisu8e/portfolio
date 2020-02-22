import React, {FC} from 'react';

import {Author} from 'App/models/entities/Author';

import {Switch, Route, Redirect} from 'react-router-dom';
import {MobileNav} from 'App/views/components/MobileNav';
import {About} from './About';
import {Work} from './Work';
import {Theory} from './Theory';
import {Skills} from './Skills';
import {Body, Mobile} from './index.styled';

interface Props {
  author: Author;
  location: {pathname: string};
}

export const Content: FC<Props> = props => {

  const {author} = props;

  return (
    <>
      <Body>
        <Switch>
          <Route path="/about" render={p => <About {...p} author={author}/>}/>
          <Route path="/work" render={p => <Work {...p} author={author}/>}/>
          <Route path="/theory" render={p => <Theory {...p} author={author}/>}/>
          <Route path="/skills" render={p => <Skills {...p} author={author}/>}/>
          <Redirect to=""/>
        </Switch>
      </Body>
      <Mobile><MobileNav/></Mobile>
    </>
  );
};
