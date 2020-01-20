import React, {FC} from 'react';

import css from './index.module.scss';

export const Heading1: FC = props => {

  const {children, ...other} = props;

  return (
    <h1 className={css.Heading1} {...other}>{children}</h1>
  );
};
