import React, {FC} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserCircle} from '@fortawesome/free-solid-svg-icons'
import {Root} from './index.styled';

export const Portfolio: FC = () => {
  return (
    <Root>
      <FontAwesomeIcon icon={faUserCircle}/>
    </Root>
  );
};
