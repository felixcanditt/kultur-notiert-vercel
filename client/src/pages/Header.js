import styled from 'styled-components/macro';

export default function Header() {
  return (
    <styledHeader>
      <h1>Kultur Notiert</h1>
    </styledHeader>
  );
}

const styledHeader = styled.header`
  color: hotpink;
`;
