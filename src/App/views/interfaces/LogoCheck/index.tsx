import React, {FC} from 'react';

import {Logo} from 'App/views/components';
import css from './index.module.scss';

export const LogoCheck: FC = () => <div className={css.logo}><Logo/></div>;
