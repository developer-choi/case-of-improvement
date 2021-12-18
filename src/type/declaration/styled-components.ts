import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    main: string;
    error: string;
    font: {
      basicNormal: string;
      basicLight: string;
    }
  }
}
