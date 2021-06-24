import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
  --grey: hsl(330, 10%, 72%);
  --grey-dark: hsl(330, 10%, 25%);
  --grey-darkest: hsl(330, 10%, 10%);
  --grey-light: hsl(330, 10%, 85%);
  --grey-lightest: hsl(330, 10%, 96%);
  --primary: hsl(330,100%,72%);
  --primary-darkest: hsl(330,100%,10%);
  --primary-dark: hsl(330,100%,25%);
  --primary-light: hsl(330,100%,85%);
  --primary-lightest: hsl(330,100%,96%);
  --secondary: hsl(150,100%,72%);
  --secondary-darkest: hsl(150,100%,10%);
  --secondary-dark: hsl(150,100%,25%);
  --secondary-light: hsl(150,100%,85%);
  --secondary-lightest: hsl(150,100%,96%);
 }

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body, 
input, 
select, 
textarea, 
button {
  font-size: 1.25rem;
  font-family: sans-serif;
  color: var(--grey-darkest)
}

body {
  line-height: 1.5;
}

main {
  margin: 5rem 0 7rem 0;
}

h1, 
h2,
h3 {
  line-height: 1.2;
  
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.125rem
}

h3 {
  font-size: 1.375rem;
}

ul {
  list-style: none;
}
`;
