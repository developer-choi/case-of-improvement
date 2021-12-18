import {createGlobalStyle, css} from 'styled-components';
import styledReset from 'styled-reset';
import {myReset} from '@util/style/my-reset';

const reset = css`
  ${styledReset};
  ${myReset};
`;

const font = css`

  // @font-face {
  //   font-family: KoreanFont2;
  //   src: url(...);
  // }

  body {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-size: 15px;
    color: ${props => props.theme.font.basicNormal};
  }
  
  a:hover {
    color: ${props => props.theme.font.basicLight};
  }
`;

const layout = css`
  
  html, body, #__next {
    height: 100%;
  }
  
  body {
    background-color: white;
  }
`;

const toast = css`
  .Toastify__toast {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
  }
  
  .Toastify__toast.Toastify__toast--info {
    background-color: ${props => props.theme.main};
  }
  .Toastify__toast.Toastify__toast--error {
    background-color: ${props => props.theme.error};
  }
`;

export const GlobalStyle = createGlobalStyle`

  ${reset};
  ${font};
  ${layout};
  ${toast};
`;
