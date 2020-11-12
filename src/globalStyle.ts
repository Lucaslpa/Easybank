import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
body { 
     width: 100vw; 
     display: flex;
     height: 100vh; 
     flex-direction: column; 
     overflow: hidden; 
}
   * { 
        margin:  0 ; 
        box-sizing: border-box; 
        outline: none; 
        padding: 0; 
        font-size: 18px;
   }

 `;
