import React, {FC} from 'react';

import css from './index.module.scss';

export const Heading4: FC = props => {

  const {children, ...other} = props;

  return (
    <h4 className={css.Heading4} {...other}>{children}</h4>
  );
};
