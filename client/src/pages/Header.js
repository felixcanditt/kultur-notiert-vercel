import styled from 'styled-components/macro';

export default function Header() {
  return (
    <StyledHeader>
      <h1>Kultur Notiert</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: hotpink;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  // evtl z-index später

  text-align: center;
  h1 {
    color: ivory;
  }
`;
