import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  body {
    font: 500 16px 'quicksand', sans-serif;
    font-style: normal;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;
