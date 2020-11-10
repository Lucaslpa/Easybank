import React from 'react';
import {Container} from './style';
import Header from './components/Header/Header';
import Main from './components/main/main';
const LandingPage: React.FC = () => {
  return <Container >
    <Header/>
    <Main/>
  </Container>;
};

export default LandingPage
;
