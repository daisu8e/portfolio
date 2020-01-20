import React, {FC} from 'react';

import css from './index.module.scss';

export const Heading6: FC = props => {

  const {children, ...other} = props;

  return (
    <h6 className={css.Heading6} {...other}>{children}</h6>
  );
};
