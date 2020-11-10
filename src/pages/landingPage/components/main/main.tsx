import React from 'react';

import {Container, PrimaryText, InfosContainer, SecondText, BackgroundIMG, BackgroundIMGMobile, EasyBankPresentetion} from './style';
import backgroundimg from '../../../../publics/bg-intro-desktop.svg';
import Button from '../../../../components/Button/button';
import backgroundimgmobile from '../../../../publics/bg-intro-mobile.svg';
const Main: React.FC = () => {
  return (
    <Container>
      <EasyBankPresentetion>
        <BackgroundIMGMobile src={backgroundimgmobile} />
        <InfosContainer>
          <PrimaryText>
        Next generation <br/> digital banking
          </PrimaryText>
          <SecondText>
        Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
          </SecondText>
          <Button text='Request invite' />
        </InfosContainer>
        <BackgroundIMG src={backgroundimg} />
      </EasyBankPresentetion>
    </Container>
  );
};

export default Main;
