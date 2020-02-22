import React, {FC} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {Root} from './index.styled';

interface Props {
  size: number;
  url?: string;
}

export const LinkedIn: FC<Props> = props => {

  const {size, url = 'https://www.linkedin.com/in/daisu8e/'} = props;

  return (
    <Root size={size}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin}/>
      </a>
    </Root>
  );
};
