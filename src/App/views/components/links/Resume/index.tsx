import React, {FC} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFilePdf} from '@fortawesome/free-regular-svg-icons'
import {Root} from './index.styled';

interface Props {
  size: number;
  url?: string;
}

export const Resume: FC<Props> = props => {

  const {size, url = '/daisuke-katsumata.pdf'} = props;

  return (
    <Root size={size}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFilePdf}/>
      </a>
    </Root>
  );
};
