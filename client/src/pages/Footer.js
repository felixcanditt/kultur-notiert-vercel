import styled from 'styled-components/macro';

export default function Footer() {
  return <StyledFooter>Navigation Bar</StyledFooter>;
}

const StyledFooter = styled.footer`
  background: hotpink;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  p {
    color: ivory;
  }
`;
