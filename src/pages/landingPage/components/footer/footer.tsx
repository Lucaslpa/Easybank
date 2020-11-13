import React from 'react';
import Logo from '../../../../components/logo/logo';
import {Container, LogoAndSocialMedias, SocialMedias, RequestAndRights, Infos} from './style';
import logoimg from '../../../../publics/logoWhite.svg';
import {facebookimg, youtubeimg, twitterimg, instagramimg, pinterestimg} from '../../../../publics';
import Button from '../../../../components/Button/button';
const Footer: React.FC = () => {
  const socialMedias = [facebookimg, youtubeimg, twitterimg, instagramimg, pinterestimg];
  const infosarray = ['About us', 'Contact', 'Blog', 'Careers', 'Support', 'Privary Policy'];
  return (
    <Container>
      <LogoAndSocialMedias>
        <Logo img={logoimg} />
        <SocialMedias>
          {socialMedias.map((img, index) => <img key={index} src={img}/>)}
        </SocialMedias>
      </LogoAndSocialMedias>
      <Infos>
        {infosarray.map((info, index) => <span key={index} >{info}</span>)}
      </Infos>
      <RequestAndRights>
        <Button text='Request invite'/>
        <h6 style={{fontSize: 15}} >© Easybank. All Rights Reserved</h6>
        <h6 style={{textAlign: 'center', fontWeight: 100}} >Challenge by Frontend Mentor. Coded by <h6 style={{color: 'rgb(49, 211, 92)', fontWeight: 100}} > Lucas Pereira </h6></h6>
      </RequestAndRights>
    </Container>
  );
};

export default Footer;
