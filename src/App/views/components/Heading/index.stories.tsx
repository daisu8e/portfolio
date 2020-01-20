import React from 'react';

import {Heading1, Heading2, Heading3, Heading4, Heading5, Heading6} from './index';

export default {title: 'components/Heading'};

const text = "I'm Daisuke Katsumata & Aug 22, 1981.";

export const Default = () => (
  <>
    <Heading1>{`<Heading1>${text}</Heading1>`}</Heading1>
    <Heading2>{`<Heading2>${text}</Heading2>`}</Heading2>
    <Heading3>{`<Heading3>${text}</Heading3>`}</Heading3>
    <Heading4>{`<Heading4>${text}</Heading4>`}</Heading4>
    <Heading5>{`<Heading5>${text}</Heading5>`}</Heading5>
    <Heading6>{`<Heading6>${text}</Heading6>`}</Heading6>
  </>
);
