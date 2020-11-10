import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './pages/landingPage/landingPage';
import {GlobalStyle} from './globalStyle';
ReactDOM.render(
    <React.StrictMode>
      <LandingPage/>
      <GlobalStyle/>
    </React.StrictMode>,
    document.getElementById('root'),
);


