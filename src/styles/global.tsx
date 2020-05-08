import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`

  :root {
    --color-primary: rgb(86, 204, 242);
    --color-secondary:   rgb(47, 128, 237);

    --color-dark: #212121;
    --color-grey-light: #FDFDFD;


    --color-grey-dark-1: #2F353A;
    --color-grey-dark-2: #2C3036;
    --color-grey-dark-3: #22252A;

    --color-grey-1: #303234;
    --color-grey-2: #7F8489;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smothing: antialiased;
    background: linear-gradient(0.14deg, #26282c 0.35%, #35373b 192.77%);
    font-size: 16px;
  }

  body, input, button {
    font-family: Lato, sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
