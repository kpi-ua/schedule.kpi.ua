import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
  }
  
  html {
      line-height: 1.43;
      font-size: 0.875rem;
      letter-spacing: 0.01071em;
      font-weight: 400;
      -webkit-font-smoothing: antialiased;
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
