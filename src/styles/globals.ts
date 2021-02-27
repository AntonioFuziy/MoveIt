import { createGlobalStyle } from 'styled-components';

import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font: 400 16px "Roboto", sans-serif;
    background: var(--background);
    color: var(--text);
  }

  body, input, textarea, button{
    font: 400 16px "Inter", sans-serif;
  }

  button{
    cursor: pointer;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  :root{
    --red: #E83F58;
    --white: #fff;
    --background: #212121;
    --background-box: #121212;
    --gray-line: #dcdde0;
    --text: #dbdbdb;
    --title: #f7f7f7;
    --green: #4cd62b;
    --blue: #5965e0;
    --blue-dark: #4953b8;
    --blue-twitter: #2aa9e0;
  }

  @media(max-width: 1080px){
    html{
      font-size: 93.75%;
    }
  }
  
  @media(max-width: 720px){
    html{
      font-size: 87.5%;
    }
  }
`;