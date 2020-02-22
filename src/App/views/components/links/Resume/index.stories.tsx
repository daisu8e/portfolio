import React from 'react';

import {Resume} from './index';

export default {title: 'components/links/Resume'};

export const Default = () => <Resume size={50}/>;
export const WithURL = () => <Resume size={50} url={'/daisuke-katsumata.pdf'}/>;

