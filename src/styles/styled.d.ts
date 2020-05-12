import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      danger: string;
      dark: string;
      light: string;
      background: string;
      text: string;
      input: {
        color: string;
        background: string;
      };
    };
  }
}
