import React from 'react';
import _ from 'lodash';

import {MemoryRouter} from 'react-router-dom';
import {MobileNav} from './index';

export default {title: 'components/MobileNav'};

export const Default = () => (
  <MemoryRouter initialEntries={['/']}>
    {_.range(1, 101).map(n => <div key={n}>{n}</div>)}
    <MobileNav location={{pathname: '/about'}}/>
  </MemoryRouter>
);

