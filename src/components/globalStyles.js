import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset};
  select{
    height: 40px;
    font-size: 16px;
  }
  * {
    box-sizing: border-box;
  }
  body{
    font-family: 'Inter', sans-serif;
    line-height: 1.2;
    background: rgba(23, 23, 23, 1);
    color: #eee;
  }
  
  strong{
    font-weight: bold;
  }
  h1,h2,h3,h4,h5,h6{
    margin: 20px 0;
  }
  h1{
    font-size: 3em;
  }
  h2{
    font-size: 2.5em;
  }
  h3{
    font-size: 2em;
  }
  h4{
    font-size: 1.5em;
  }
  h5{
    font-size: 1em;
  }
  h6{
    font-size: 0.75em;
  }
  ul{
    margin-left: 20px;
    >li{
      list-style: disc;
    }
  }
`;
