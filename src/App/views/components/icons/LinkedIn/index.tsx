import React, {FC} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {Root} from './index.styled';

export const LinkedIn: FC = () => {
  return (
    <Root>
      <FontAwesomeIcon icon={faLinkedin}/>
    </Root>
  );
};
