import React from 'react';
import {Container, Description, Title, Author, IMG} from './style';


type props = {
  img?: any ;
  urlIMG?: string;
  author: string
  title: string
  description: string
}


const Articles: React.FC<props> = (props: props) => {
  return (
    <Container>
      <IMG src={props.img || props.img} />
      <div className='infos'>
        <Author>by {props.author}</Author>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </div>
    </Container>
  );
};

export default Articles;
