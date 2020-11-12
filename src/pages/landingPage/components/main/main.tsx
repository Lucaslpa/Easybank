import React from 'react';

import {Container, PrimaryText, InfosContainer, SecondText, BackgroundIMG, BackgroundIMGMobile, EasyBankPresentetion} from './style';
import {WhyEasyBank, ComplementsInfo, Title, Description} from './whyEasyBank';
import backgroundimg from '../../../../publics/bg-intro-desktop.svg';
import Button from '../../../../components/Button/button';
import backgroundimgmobile from '../../../../publics/bg-intro-mobile.svg';
import Reasons from '../../../../components/reasons/reasons';
import apiimg from '../../../../publics/icon-api.svg';
import onlineimg from '../../../../publics/icon-online.svg';
import budgetingimg from '../../../../publics/icon-budgeting.svg';
import onboardingimg from '../../../../publics/icon-onboarding.svg';


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
      <WhyEasyBank>
        <ComplementsInfo>
          <Title>Why choose <br/> EasyBank?</Title>
          <Description>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before</Description>
        </ComplementsInfo>
        <Reasons img={onlineimg} Title='Online Banking' description='Our modern web and mobile applications allow you to keep track of you finances wherever you are in the world.'/>
        <Reasons img={budgetingimg} Title="Simple Budgeting" description="See exactly where you money goes each month. Receive notifications when you'are close to your hitting limits."/>
        <Reasons img={onboardingimg} Title="Fast Onboarding" description="We don't do branches. Open your account in minutes online and start taking control of your finance right away."/>
        <Reasons img={apiimg} Title="Open API" description="Manage your savings. Investiments, pension, and much more from one account. Tracking your money has never been easier."/>
      </WhyEasyBank>

    </Container>
  );
};

export default Main;
