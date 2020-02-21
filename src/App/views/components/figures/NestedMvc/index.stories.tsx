import React from 'react';

import {NestedMvc} from './index';

export default {title: 'components/figures/NestedMvc'};

export const Default = () => <NestedMvc/>;
export const MaxWidth = () => <div style={{width: '600px'}}><NestedMvc/></div>;
export const MinWidth = () => <div style={{width: (16 * 3) + 248 + (16 * 3) + 'px'}}><NestedMvc/></div>;

