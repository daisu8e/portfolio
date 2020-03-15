import React, {FC} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {Root} from './index.styled';

export const Email: FC = () => {
  return (
    <Root>
      <FontAwesomeIcon icon={faEnvelope}/>
    </Root>
  );
};
