import React from 'react';

import {Code} from './index';

export default {title: 'components/Code'};

const text = "I'm Daisuke Katsumata & Aug 22, 1981.";

export const Default = () => (
  <>
    <Code>{`<Code>${text}</Code>`}</Code>
  </>
);
