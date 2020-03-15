import React, {FC} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFilePdf} from '@fortawesome/free-regular-svg-icons'
import {Root} from './index.styled';

export const Resume: FC = () => {
  return (
    <Root>
      <FontAwesomeIcon icon={faFilePdf}/>
    </Root>
  );
};
