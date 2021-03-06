import { shade } from 'polished';
import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    font-size: 16px;
    color: ${(props) => props.theme.colors.text};
  }

  body, input, button {
    font-family: Lato, sans-serif;
  }

  a {
    text-decoration: none;
    font-weight: 600;
    color: ${(props) => props.theme.colors.secondary};

    &:hover {
      color: ${(props) => shade(0.2, props.theme.colors.secondary)};
    }
  }

  button {
    cursor: pointer;
  }
`;
