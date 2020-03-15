import React, {FC} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {Root} from './index.styled';

export const GitHub: FC = () => {
  return (
    <Root>
      <FontAwesomeIcon icon={faGithub}/>
    </Root>
  );
};
