import styled from 'styled-components';
const LimeGreen = 'hsl(136, 65%, 51%)';
const BrightCyan = 'hsl(192, 70%, 51%)';
const LimeGreenHover = 'hsl(136, 70%, 60%)';
const BrightCyanHover = 'hsl(192, 70%, 60%)';


export const Button = styled.button` 
   height: 40px;
    border-radius: 20px;
    border: none;
    cursor: pointer; 
    width: 160px;
    background: linear-gradient(90deg, ${LimeGreen} 29%, ${BrightCyan} 100%);
    transition: 0.2s;
     span { 
        height: 20px;
    color: white;
    font-size: 15px;
     }
  :hover{ 
    background: rgb(49,211,92);
background: linear-gradient(90deg, ${LimeGreenHover} 58%, ${BrightCyanHover} 100%);
  }
 
 `;
