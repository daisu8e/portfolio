import React from 'react';

import {GitHub} from './index';

export default {title: 'components/links/GitHub'};

export const Default = () => <GitHub size={50}/>;
export const WithURL = () => <GitHub size={50} url={'https://github.com/daisu8e/'}/>;

