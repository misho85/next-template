import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
 ${normalize}
 
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
