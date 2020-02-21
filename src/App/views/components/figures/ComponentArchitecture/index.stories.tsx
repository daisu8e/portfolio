import React from 'react';

import {ComponentArchitecture} from './index';

export default {title: 'components/figures/ComponentArchitecture'};

export const Default = () => <ComponentArchitecture/>;
export const MaxWidth = () => <div style={{width: '600px'}}><ComponentArchitecture/></div>;
export const MinWidth = () => <div style={{width: (16 * 3) + 248 + (16 * 3) + 'px'}}><ComponentArchitecture/></div>;

