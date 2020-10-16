import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }
`;
