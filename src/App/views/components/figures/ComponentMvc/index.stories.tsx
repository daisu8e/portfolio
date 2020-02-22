import React from 'react';

import {ComponentMvc} from './index';

export default {title: 'components/figures/ComponentMvc'};

export const Default = () => <ComponentMvc/>;
export const MaxWidth = () => <div style={{width: '600px'}}><ComponentMvc/></div>;
export const MinWidth = () => <div style={{width: (16 * 3) + 248 + (16 * 3) + 'px'}}><ComponentMvc/></div>;
