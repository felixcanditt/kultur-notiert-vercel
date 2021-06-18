import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

//__________BASIC CSS RESET

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-size: 1.25rem;
  font-family: sans-serif;
  line-height: 1.5;
}

main {
  margin: 5rem 0;
}

h1,
h3 {
  line-height: 1.2;
  
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.2;
  font-size: 2.125rem
}

h3 {
  font-size: 1.375rem;
}

ul {
  list-style: none;
}
`;
