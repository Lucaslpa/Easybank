import styled from 'styled-components';
const ColorContainer = 'hsl(0, 0%, 98%)';
const PrimaryTextColor = 'hsl(233, 26%, 24%)';
const SecondTextColor = 'hsl(233, 8%, 62%)';


export const Container = styled.div`  
    display: flex;
    justify-content: center;
    overflow-x: hidden;
    flex-direction: column;
    height: 100vh;
    width: 100%;
 background-color: ${ColorContainer}; 
`;

export const EasyBankPresentetion = styled.div`
height: 100vh; 
width: 100vw; 
position: relative;
overflow: hidden;
display: flex;
    align-items: center;
    @media(max-width: 900px) { 
        flex-direction: column; 
   }

`;

export const InfosContainer = styled.div` 
    width: 40%;  
    margin-left: 11%;
    justify-content: space-evenly;
    height: 300px;
    display: flex;
    flex-direction: column;
    margin-bottom: 9%;
    @media(max-width: 900px) { 
      width: 100%;
      margin-left:0;
      margin-bottom: 0;       
      height: 250px; 
      align-items: center;
   }
 `;


export const SecondText = styled.p` 
    width: 70%;
    color: ${SecondTextColor};
    @media(max-width: 900px) { 
      width: 60%;
          text-align: center;

        flex-direction: column; 
   }
   @media(max-width: 500px) { 
    width: 90%;
   }
 `;


export const PrimaryText = styled.strong` 
    font-size: 33px;
    font-weight: initial;
    color: ${PrimaryTextColor};
    @media(max-width: 900px) { 
   }
 `;
export const BackgroundIMG = styled.img` 
    width: 70vw;
    height: 120vh;
    position: absolute;
    top: -20%;
    right: -10%;

    @media(max-width: 900px) { 
        display: none
   }
  
 `;

export const BackgroundIMGMobile = styled.img` 
    height: 30%;
    width: 100%;
 @media(min-width: 900px) { 
        display: none
   }
 
 `;

