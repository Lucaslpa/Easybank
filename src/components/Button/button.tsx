import React from 'react';

import {Button} from './style';
type props = {
     text: string
     style?: any
     className?: any
}
const ButtonComponent: React.FC<props> = ({className, text, style}: props) => {
  return (
    <Button className={className} >
      <span > {text} </span>
    </Button>
  );
};

export default ButtonComponent;
