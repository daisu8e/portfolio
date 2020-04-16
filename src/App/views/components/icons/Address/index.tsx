import React, {FC} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import {Root} from './index.styled';

export const Address: FC = () => {
  return (
    <Root>
      <FontAwesomeIcon icon={faMapMarkerAlt}/>
    </Root>
  );
};
