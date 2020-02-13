import React from 'react';

import {SourceCodePro} from './index';

export default {title: 'services/fonts/SourceCodePro'};

export const Default = () => (
  <>
    <SourceCodePro/>
    <div style={{fontFamily: 'SourceCodePro'}}>
      I'm Daisuke Katsumata & Aug 22, 1981.
    </div>
  </>
);
