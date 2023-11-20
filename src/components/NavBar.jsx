import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Nav className="navbar-nav custom-nav">
            <NavLink
              to="/members"
              className="nav-link"
              activeClassName="active"
            >
              Members
            </NavLink>

            <NavLink
              to="/projects"
              className="nav-link"
              activeClassName="active"
            >
              Projects
            </NavLink>
            <NavLink
              to="/storyboard"
              className="nav-link"
              activeClassName="active"
            >
              Storyboard
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
