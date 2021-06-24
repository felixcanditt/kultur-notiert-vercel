import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

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
      </Nav>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  background: var(--primary);

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Nav = styled.nav`
  padding: 0.5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  text-align: center;

  .link {
    text-decoration: none;
    color: var(--grey-dark);
  }

  .active {
    color: var(--grey-lightest);
  }
`;
