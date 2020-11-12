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

`;


export const ReasonsIMG = styled.img` 
`;


export const ReasonsTitle = styled.strong`
color: ${PrimaryTextColor};
font-family: initial;

`;


export const ReasonsDescriptioon = styled.p` 
text-align: center;
color: ${SecondTextColor}
`;
