import styled from 'styled-components';
const ColorContainer = 'hsl(0, 0%, 98%)';
const PrimaryTextColor = 'hsl(233, 26%, 24%)';
const SecondTextColor = 'hsl(233, 8%, 62%)';


export const Container = styled.div`  
    height: 100vh;
    overflow: scroll;
    overflow-x: hidden; 
    width: 100%;
 background-color: ${ColorContainer}; 
 @media(min-width: 900px) { 
  height: 100vh;

 }

 ::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${PrimaryTextColor};
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`;

export const EasyBankPresentetion = styled.div`
height: 91vh; 
width: 100vw; 
position: relative;
display: flex;
    align-items: center;
    @media(max-width: 900px) { 
        flex-direction: column; 
        height: 80vh; 
   }

`;

export const InfosContainer = styled.div` 
    width: 40%;  
    margin-left: 11%;
    justify-content: space-evenly;
    height: 350px;
    display: flex;
    flex-direction: column;
    margin-bottom: 9%;
    @media(max-width: 900px) { 
      width: 100%;
    margin-left: 0px;
    top: 36%;
    position: absolute;
    height: 300px;
    -webkit-box-align: center;
    align-items: center;
   }
 `;


export const SecondText = styled.p` 
    width: 70%;
    font-size: 25px;
    color: ${SecondTextColor};
    @media(max-width: 900px) { 
      width: 60%;
          text-align: center;
          font-size: 20px;
        flex-direction: column; 
   }
   @media(max-width: 500px) { 
    width: 90%;
   }
 `;


export const PrimaryText = styled.strong` 
    font-size: 33px;
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
   position: absolute;
    height: 40%;
    width: 100%;
 @media(min-width: 900px) { 
        display: none
   }
 
 `;


export const BackgroundIMGMockups = styled.img`
 position: absolute;
    z-index: 20;
    height: 60vw;
    right: 3%;
    transform: translate(10px, 10px);
     @media(max-width: 900px) { 
      height: 50vh;
      transform: translate(0px, -35%);
      right: initial;
     }
`;

