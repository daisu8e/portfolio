import React, {FC} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMobileAlt} from '@fortawesome/free-solid-svg-icons'
import {Root} from './index.styled';

export const Mobile: FC = () => {
  return (
    <Root>
      <FontAwesomeIcon icon={faMobileAlt}/>
    </Root>
  );
};
