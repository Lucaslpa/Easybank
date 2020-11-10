import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
body { 
     width: 100vw; 
     display: flex;
     flex-direction: column; 
     justify-content: center; 
}
   * { 
        margin:  0 ; 
        box-sizing: border-box; 
        outline: none; 
        padding: 0; 
        font-size: 18px;
   }

 `;
