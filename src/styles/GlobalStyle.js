import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    font-family: 'Lato', sans-serif;
}
li{
    list-style: none;
}
a{
    text-decoration: none;
    color: black;
}
`;

export default GlobalStyle;