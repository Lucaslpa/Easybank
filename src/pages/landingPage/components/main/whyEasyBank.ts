import styled from 'styled-components';
const whyEasyBanKBGcolor = 'hsl(220, 16%, 96%)';
const PrimaryTextColor = 'hsl(233, 26%, 24%)';
const SecondTextColor = 'hsl(233, 8%, 62%)';
export const WhyEasyBank = styled.div`   
      height: auto;
      background-color: ${whyEasyBanKBGcolor};
      padding: 20px;   
      @media(min-width: 900px) { 
         padding: 100px
    }
`;


export const ComplementsInfo = styled.div`
    display: flex;
    height: 200px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    @media(min-width: 900px) { 
        padding: 30px;
        align-items: initial;
    }
`;


export const Title = styled.strong` 
color: ${PrimaryTextColor};
text-align: initial;
font-size: 35px; 
 @media(max-width: 900px) { 
    font-size: 30px;
    width: 200px;
    text-align: center;
 }
`;

export const Description = styled.p`
text-align: center;
color: ${SecondTextColor};
font-size: 20px;
@media(min-width: 900px) { 
        text-align: initial;
        width: 60%;
        font-size: 25px;
    }
`;


export const ReasonsContainer = styled.div`
 height: auto; 
 @media(min-width: 900px) { 
    display: flex; 
    }
`;
