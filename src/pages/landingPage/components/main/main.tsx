import React from 'react';

import {Container, PrimaryText, InfosContainer, SecondText, BackgroundIMG, BackgroundIMGMobile, EasyBankPresentetion, BackgroundIMGMockups} from './style';
import {WhyEasyBank, ComplementsInfo, Title, Description, ReasonsContainer} from './whyEasyBank';
import {LatestArticles, TitleLatestArticles, ArticlesContainer} from './latestArticles';
import backgroundimg from '../../../../publics/bg-intro-desktop.svg';
import Button from '../../../../components/Button/button';
import backgroundimgmobile from '../../../../publics/bg-intro-mobile.svg';
import Reasons from '../../../../components/reasons/reasons';
import Articles from '../../../../components/articles/articles';
import apiimg from '../../../../publics/icon-api.svg';
import onlineimg from '../../../../publics/icon-online.svg';
import budgetingimg from '../../../../publics/icon-budgeting.svg';
import onboardingimg from '../../../../publics/icon-onboarding.svg';
import conffetiimg from '../../../../publics/image-confetti.jpg';
import currencyimg from '../../../../publics/image-currency.jpg';
import planeimg from '../../../../publics/image-plane.jpg';
import restaurantimg from '../../../../publics/image-restaurant.jpg';
import mockupsimg from '../../../../publics/image-mockups.png';
import Footer from '../footer/footer';
const Main: React.FC = () => {
  return (
    <Container>
      <EasyBankPresentetion>
        <BackgroundIMGMockups src={mockupsimg} />
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
          <Title>Why choose  EasyBank?</Title>
          <Description>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before</Description>
        </ComplementsInfo>
        <ReasonsContainer>
          <Reasons img={onlineimg} Title='Online Banking' description='Our modern web and mobile applications allow you to keep track of you finances wherever you are in the world.'/>
          <Reasons img={budgetingimg} Title="Simple Budgeting" description="See exactly where you money goes each month. Receive notifications when you'are close to your hitting limits."/>
          <Reasons img={onboardingimg} Title="Fast Onboarding" description="We don't do branches. Open your account in minutes online and start taking control of your finance right away."/>
          <Reasons img={apiimg} Title="Open API" description="Manage your savings. Investiments, pension, and much more from one account. Tracking your money has never been easier."/>
        </ReasonsContainer>
      </WhyEasyBank>
      <LatestArticles>
        <TitleLatestArticles>Latest Articles</TitleLatestArticles>
        <ArticlesContainer>
          <Articles img={currencyimg} author='Claire Robinson' title='Receive money in  any currency with no fees' description="The world is getting smaller and we'are becoming more mobile. So why should you be forced to only receive money in a single..."/>
          <Articles img={restaurantimg} author='Wilsons Hutton' title='Treat yourself without worrying about money' description="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..."/>
          <Articles img={planeimg} author='Wilsons Hutton' title='Take your Easybank card wherever you go' description="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"/>
          <Articles img={conffetiimg} author='Claire Robinson' title='Our invite-only Beta accounts are now live!' description="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."/>
        </ArticlesContainer>
      </LatestArticles>
      <Footer/>
    </Container>
  );
};

export default Main;
