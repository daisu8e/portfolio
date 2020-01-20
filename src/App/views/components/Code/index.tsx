import React, {FC} from 'react';

import css from './index.module.scss';

export const Code: FC = props => {

  const {children, ...other} = props;

  return (
    <code className={css.Code} {...other}>{children}</code>
  );
};
