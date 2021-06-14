import { NavLink } from 'react-router-dom';

import styled from 'styled-components/macro';

export default function Footer() {
  return (
    <FooterStyled>
      <Nav>
        <NavLink activeClassName="active" className="link" exact to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" className="link" to="/watchlist">
          Merkliste
        </NavLink>
        <NavLink activeClassName="active" className="link" to="/library">
          Meine Sammlung
        </NavLink>
        <NavLink activeClassName="active" className="link" to="/friends">
          Freund*innen
        </NavLink>
      </Nav>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  background: hotpink;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 0.2rem;
  .link {
    text-decoration: none;
    color: ivory;
  }
  .active {
    color: turquoise;
  }
`;
