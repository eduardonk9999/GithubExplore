import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/background.svg';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    background: #F0F0F0 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smooth: antialised;
  }
  body, input, button {
    font-family: 'Roboto', sans-serif;
    font: 16px sans-serif;
  }

  #root{
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button{
    cursor: pointer;
  }
`;
