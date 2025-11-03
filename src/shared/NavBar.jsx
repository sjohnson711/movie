import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 10px 0;
  width: auto;
  background: #ccccff;
`;

const Nav = styled.nav`
  gap: 20px;
  display: flex;
  justify-content: space-evenly;
  font-size: 22px;
  width: auto;

  :hover {
    color: red;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;

export default function NavBar() {
  return (
    <Header>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/about">About</Link>
      </Nav>
    </Header>
  );
}
