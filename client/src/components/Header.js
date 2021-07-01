import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderStyled>
      <h1>Kultur Notiert</h1>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  background: var(--primary);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  padding: 0.6rem 0;
  text-align: center;
  // 5, 4, 3.3 , 2.5
  letter-spacing: 4px;
  color: var(--grey-lightest);

  /* text-shadow: 0 5.34px 3.56px var(--primary-dark), 0 -0.8px 0.4px white; */

  /* TEST 2 */

  /* text-shadow: -1px -1px 0px var(--primary), 3px 3px 0px var(--primary),
    6px 6px 0px var(--primary-dark); */

  text-shadow: -0.8px -0.8px 0px var(--primary), 2.4px 2.4px 0px var(--primary),
    4.8px 4.8px 0px var(--primary-dark);

  /* text-shadow: -0.66px -0.66px 0px var(--primary), 2px 2px 0px var(--primary),
    4px 4px 0px var(--primary-dark); */

  /* text-shadow: -0.5px -0.5px 0px var(--primary), 1.5px 1.5px 0px var(--primary),
    3px 3px 0px var(--primary-dark); */

  /* text-shadow: -0.4px -0.4px 0px var(--primary), 1.2px 1.2px 0px var(--primary),
    2.4px 2.4px 0px var(--primary-dark); */
`;
