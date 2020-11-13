import styled from 'styled-components';
const PrimaryTextColor = 'hsl(233, 26%, 24%)';
const SecondTextColor = 'hsl(233, 8%, 62%)';

export const Container = styled.div`
 overflow: hidden;
    display: flex;
    width: 100%;
    border-radius: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    :hover {
     cursor: pointer; 
    }

  .infos { 
    height: auto;
    padding: 20px;
    background: white;
    display: flex;
    background-color: white; 
    flex-direction: column;
    justify-content: space-between;
  }
`;


export const IMG = styled.img` 
    max-width: 100%;
    max-height: 100%;
`;

export const Author = styled.h4`font-size: 13px; 
  color: ${SecondTextColor} 

 `;

export const Title = styled.strong` 
    color: ${PrimaryTextColor};
    margin: 10px 0 ;
 `;

export const Description = styled.p`
 color: ${SecondTextColor}  ;
 font-weight: 800;
  @media(max-width: 900px) { 
    font-weight: 100;
  }
`;
