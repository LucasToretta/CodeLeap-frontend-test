import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        background: #DDDDDD;
        color: #000000;
    }

    button,
    input,
    textarea {
        font: inherit;
    }

    button {
        cursor: pointer;
    }

    textarea {
        resize: none;
    }
    `