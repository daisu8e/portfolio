import React, {FC} from 'react';

import css from './index.module.scss';

export const Heading2: FC = props => {

  const {children, ...other} = props;

  return (
    <h2 className={css.Heading2} {...other}>{children}</h2>
  );
};
