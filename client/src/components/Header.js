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

  text-shadow: -2px 2px 0px var(--primary-light), -4px 4px 0px var(--primary),
    -6px 6px 0px var(--primary-dark);
`;
