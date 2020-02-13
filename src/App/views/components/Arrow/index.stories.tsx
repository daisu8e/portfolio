import React from 'react';

import {Arrow} from './index';

export default {title: 'components/Arrow'};

export const Default = () => <Arrow length={200} point={50} color={'black'}/>;

export const Rotated = () => <Arrow length={200} point={50} color={'black'} angle={45}/>;
