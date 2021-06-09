import styled from 'styled-components/macro';

export default function Footer() {
  return (
    <StyledFooter>
      <p>Navigation Bar</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background: hotpink;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  // evtl z-index später

  display: flex;
  justify-content: center;
  p {
    color: ivory;
  }
`;
