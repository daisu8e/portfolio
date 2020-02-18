import React, {FC} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {Root} from './index.styled';

interface Props {
  size: number;
  url?: string;
}

export const GitHub: FC<Props> = props => {

  const {size, url = 'https://github.com/daisu8e/'} = props;

  return (
    <Root size={size}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub}/>
      </a>
    </Root>
  );
};
