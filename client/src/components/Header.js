import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderStyled>
      <h1>Kultur Notiert</h1>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  background: hotpink;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  text-align: center;
  h1 {
    color: ivory;
  }
`;
