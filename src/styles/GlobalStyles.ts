import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    padding:0;
    margin:0;
    box-sizing: border-box;
    color: var(--white);
}

html, body, #root {
    max-width: 100vw;
    max-height: 100vh;

    width: 100%;
    height: 100%;

}

*, button, input {
    border:0;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

html {
    background: var(--background);
}

:root {
    --background: #555555;
    --primary:#000;
    --secondary:#15181C;
    --search:#202327;
    --white:#D9D9D9;
    --gray:#7A7A7A;
}`;
