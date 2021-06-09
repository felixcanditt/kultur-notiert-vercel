import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

//__________BASIC CSS RESET
// fehlt was?

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 2px red solid
}

body {
  font-size: 1.25 rem;
  font-family: sans-serif;
  line-height: 1.5;
}

h1,
h2,
h3 {
  line-height: 1.2;
}

ul,
ul li {
  list-style: none;
}
`;
