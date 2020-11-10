import React from 'react';

import {Logo} from './style';

type props = {
     url?: string
     img?: any
}


const LogoComponent: React.FC<props> = ({img, url}:props) => {
  return <Logo src={ img || url} alt='imagem do logo'/>;
};

export default LogoComponent;
