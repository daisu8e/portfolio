import React, {FC} from 'react';

import css from './index.module.scss';

export const Heading3: FC = props => {

  const {children, ...other} = props;

  return (
    <h3 className={css.Heading3} {...other}>{children}</h3>
  );
};
