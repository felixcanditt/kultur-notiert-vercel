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

  text-align: center;
  padding: 0.5rem 0;
  color: var(--grey-lightest);
`;
