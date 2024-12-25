import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
      box-sizing: border-box;
      font-family: 'Exo 2', sans-serif;
  }
  
  html {
      line-height: 1.43;
  }

  body {
      width: 100%;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
      margin: 0;
  }
`;

export default GlobalStyles;
