import React from 'react';

import {LayeredArchitecture} from './index';

export default {title: 'components/figures/LayeredArchitecture'};

export const Default = () => <LayeredArchitecture/>;
export const MaxWidth = () => <div style={{width: '600px'}}><LayeredArchitecture/></div>;
export const MinWidth = () => <div style={{width: '288px'}}><LayeredArchitecture/></div>;

