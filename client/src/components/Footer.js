import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import houseIcon from '../images/house.svg';
import notesIcon from '../images/taking-notes.svg';
import bookshelfIcon from '../images/bookshelf.svg';

export default function Footer() {
  return (
    <FooterStyled>
      <Nav>
        <NavLink className="link" exact to="/">
          <img src={houseIcon} alt="Zur Hauptseite gehen" />
        </NavLink>
        <NavLink className="link" to="/watchlist">
          <img src={notesIcon} alt="Zur Merkliste gehen" />
        </NavLink>
        <NavLink className="link" to="/library">
          <img src={bookshelfIcon} alt="Zu Meiner Sammlung gehen" />
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
  z-index: 1000;
`;

const Nav = styled.nav`
  padding: 1rem 0;
  display: flex;
  justify-content: space-around;

  .link {
    opacity: 50%;
    width: 3rem;
    height: 3rem;
  }

  .active {
    opacity: 100%;
  }

  img {
    width: 3rem;
  }
`;
