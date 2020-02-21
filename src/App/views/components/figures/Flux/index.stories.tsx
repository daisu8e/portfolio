import React from 'react';

import {Flux} from './index';

export default {title: 'components/figures/Flux'};

export const Default = () => <Flux/>;
export const MaxWidth = () => <div style={{width: '600px'}}><Flux/></div>;
export const MinWidth = () => <div style={{width: (16 * 3) + 248 + (16 * 3) + 'px'}}><Flux/></div>;

