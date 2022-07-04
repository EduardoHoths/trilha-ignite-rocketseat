import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;

    --shape: #FFFFFF;

    --green: #33CC95;
    --red: #E62E4D;
    --blue: #5429CC;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB2;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body{
    background-color: var(--background);
    --webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  body::-webkit-scrollbar {
    width: 0.5rem;
  }
  
  body::-webkit-scrollbar-track {
    background-color: var(--background);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: var(--blue-light);
    border-radius: 2rem;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) {
      align-items: flex-end;
    }
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background-color: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
    
    @media (max-width: 600px) {
      padding: 1.714rem;
      border-radius: 1.143rem 1.143rem 0 0 ;
    }
  }

  .react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background-color: transparent;
    transition: filter 0.2s;
    
    &:hover{
      filter: brightness(0.8);
    }
  }
`;
