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

  letter-spacing: 4px;
  color: var(--grey-lightest);

  text-shadow: -0.8px -0.8px 0px var(--primary), 2.4px 2.4px 0px var(--primary),
    4.8px 4.8px 0px var(--primary-dark);
`;
