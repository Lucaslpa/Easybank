
import React from 'react';

import {Container, ReasonsDescriptioon, ReasonsIMG, ReasonsTitle} from './style';

type props = {
     img?: any;
     imgUrl?: string ;
     Title: string ;
     description: string;
}

const Reasons: React.FC<props> = (props: props) => {
  return (
    <Container>
      <ReasonsIMG src={props.img || props.img} />
      <ReasonsTitle>{props.Title}</ReasonsTitle>
      <ReasonsDescriptioon>{props.description}</ReasonsDescriptioon>
    </Container>
  );
};

export default Reasons;
