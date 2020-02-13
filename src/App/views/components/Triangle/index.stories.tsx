import React from 'react';

import {Triangle} from './index';

export default {title: 'components/Triangle'};

export const Default = () => <Triangle width={200} height={200} color={'black'}/>;

export const Equilateral = () => <Triangle width={200} color={'black'}/>;

