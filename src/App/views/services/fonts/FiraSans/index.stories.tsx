import React from 'react';

import {FiraSans} from './index';

export default {title: 'services/fonts/FiraSans'};

export const Default = () => (
  <>
    <FiraSans/>
    <div style={{fontFamily: 'FiraSans'}}>
      I'm Daisuke Katsumata & Aug 22, 1981.
    </div>
  </>
);
