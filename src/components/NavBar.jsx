import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <>
      <Navbar className="navbar" expand="lg">
        <div className="navbarWide">
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
                Project
              </NavLink>
              <NavLink
                to="/storyboard"
                className="nav-link"
                activeClassName="active"
              >
                Storyboard
              </NavLink>
              <NavLink
                to="/journeymapping"
                className="nav-link"
                activeClassName="active"
              >
                Journey mapping
              </NavLink>
            </Nav>
        </Container>
        </div>
      
        <NavDropdown title="Menu" className="navbar-nav custom-nav dropdown-nav">
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
          <NavLink
            to="/journeymapping"
            className="nav-link"
            activeClassName="active"
          >
            Journey mapping
          </NavLink>
        </NavDropdown>
      

      </Navbar>

    </>
  );
}

export default NavBar;
