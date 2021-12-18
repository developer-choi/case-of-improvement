import {css} from 'styled-components';

const font = css`
  body, input, textarea, button, a {
    font-size: 13px;
  }
`;

export const myReset = css`
  ${font};
  
  * {
    padding: 0;
    border: none;
    background-color: transparent;
    box-sizing: border-box;
    margin: 0;
  }
  
  a {
    //NextJS에서는 Link로 링크를 만드는경우, a태그에 href속성이 전달되지않아 cursor가 pointer로 되지않더라
    cursor: pointer;
  }

  b, h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: inherit; //이거 안하면 크롬에서 방문한링크 보라색나오고 방문안한거 파란색으로 나옴
  }

  button, select {
    cursor: pointer;
  }

  input, button {
    &:disabled {
      cursor: not-allowed;
    }
  }

  textarea {
    resize: none;
  }
`;
