import styled from 'styled-components';
const PrimaryTextColor = 'hsl(233, 26%, 24%)';
const SecondTextColor = 'hsl(233, 8%, 62%)';
export const Container = styled.div` 
      display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 240px;
    padding: 20px;

    @media(min-width: 900px) { 
         height: 280px;
         align-items: initial; 
        
    }

`;


export const ReasonsIMG = styled.img` 

@media(min-width: 900px) { 
        
    max-width: 100%;
    max-height: 100%;
    width: 33%;

    }
`;


export const ReasonsTitle = styled.strong`
color: ${PrimaryTextColor};
`;


export const ReasonsDescriptioon = styled.p` 
text-align: center;
font-weight: 100;
color: ${SecondTextColor};
@media(min-width: 900px) { 
         text-align: initial;
         font-weight: 800;
    }

`;
