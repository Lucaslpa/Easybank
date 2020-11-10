import React from 'react';
import {Container, OptionMenu, Menu, MenuMobile, HamburguerMenu, OptionMenuMobile, ModalMenuMobile, ButtonEdited} from './styles';
import Logo from '../../../../components/logo/logo';
import LogoIMG from '../../../../publics/logo.svg';
import hamburgermenuimg from '../../../../publics/icon-hamburger.svg';
import close from '../../../../publics/icon-close.svg';

const Header: React.FC = () => {
  const [openMenuMobile, setOpenMenuMobile] = React.useState(false);


  return <Container>
    <Logo img={LogoIMG} />
    <Menu>
      <OptionMenu>Home</OptionMenu>
      <OptionMenu>About</OptionMenu>
      <OptionMenu>Contact</OptionMenu>
      <OptionMenu>Blog</OptionMenu>
      <OptionMenu>Carrers</OptionMenu>
    </Menu>
    {openMenuMobile && (<ModalMenuMobile>
      <MenuMobile>
        <OptionMenuMobile>Home</OptionMenuMobile>
        <OptionMenuMobile>About</OptionMenuMobile>
        <OptionMenuMobile>Contact</OptionMenuMobile>
        <OptionMenuMobile>Blog</OptionMenuMobile>
        <OptionMenuMobile>Carrers</OptionMenuMobile>
      </MenuMobile>
    </ModalMenuMobile>)}
    <HamburguerMenu onClick={ (e) => setOpenMenuMobile(!openMenuMobile)} src={openMenuMobile ? close : hamburgermenuimg} />
    <ButtonEdited text='Request invites' />
  </Container>;
};

export default Header;
