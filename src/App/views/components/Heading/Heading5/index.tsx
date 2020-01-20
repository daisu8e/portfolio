import React, {FC} from 'react';

import css from './index.module.scss';

export const Heading5: FC = props => {

  const {children, ...other} = props;

  return (
    <h5 className={css.Heading5} {...other}>{children}</h5>
  );
};
