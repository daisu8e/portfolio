import React from 'react';

import {Mvc} from './index';

export default {title: 'components/figures/Mvc'};

export const Default = () => <Mvc/>;
export const MaxWidth = () => <div style={{width: '600px'}}><Mvc/></div>;
export const MinWidth = () => <div style={{width: (16 * 3) + 248 + (16 * 3) + 'px'}}><Mvc/></div>;

