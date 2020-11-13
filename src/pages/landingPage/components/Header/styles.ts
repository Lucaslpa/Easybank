import styled from 'styled-components';
const DarkBlue = 'hsl(233, 26%, 24%)';
const DarkBlueOpacity = 'rgba(19, 17, 77, 0.2)';
const LimeGreen = 'hsl(136, 65%, 51%)';
const MenuOptionColor = 'hsl(233, 8%, 62%)';
import Button from '../../../../components/Button/button';


export const Container = styled.div` 
  display: flex;
  overflow: hidden;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    height: 70px;
    width: 100%; 
 `;


export const Menu = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    width: 30%;
    height: 100%;
  @media(max-width: 900px) { 
        display: none
   }
`;


export const OptionMenu = styled.li`
display: flex;
height: 100%;
cursor: pointer; 
    align-items: center;
    border-bottom: solid 3px transparent;
    transition: 0.2s;
    color: ${MenuOptionColor};
    :hover{border-bottom: solid 3px ${LimeGreen};}
 `;

export const ModalMenuMobile = styled.div`
    background-color: ${DarkBlueOpacity};
    position: absolute;
    top: 100%;
    z-index: 20;
    width: 100%;
    height: 100vh;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 20px;
    @media(min-width: 900px) { 
        display: none
   }
`;

export const MenuMobile = styled.ul`
background-color: white;
    height: 250px;
    flex-direction: column;
    border-radius: 10px;
    padding: 20px;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    width: 70vh;
 
`;

export const OptionMenuMobile = styled.li`
    display: flex;
    height: 100%;
    cursor: pointer;
    -webkit-box-align: center;
    align-items: center;
    border-bottom: 3px solid transparent;
    transition: all 0.2s ease 0s;
    color: ${DarkBlue};
 `;

export const HamburguerMenu = styled.img` 
width: 20px; 
height: 20px;
@media(min-width: 900px) { 
        display: none
   }
 `;

export const ButtonEdited = styled(Button)` 
  @media(max-width: 999px) { 
        display: none
   }
`;
