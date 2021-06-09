import styled from 'styled-components/macro';

export default function Footer() {
  return (
    <StyledFooter>
      <p>Navigation Bar</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  p {
    color: hotpink;
  }
`;
