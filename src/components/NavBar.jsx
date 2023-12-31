import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import Logo from "./Logo";


function NavBar() {
  return (
    <>
      <header>
        <Link to="/" className="logo-link">
          <Logo />
        </Link>

        <h2 className="tagline">Connecting the dots to success</h2>
      </header>
      
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

              <NavLink
                to="/prototype1"
                className="nav-link"
                activeClassName="active"
              >
                Prototype V1
              </NavLink>

              <NavLink
                to="/usability-testing"
                className="nav-link"
                activeClassName="active"
              >
                Testing
              </NavLink>

              <NavLink
                to="/prototype2"
                className="nav-link"
                activeClassName="active"
              >
                Prototype V2
              </NavLink>
            </Nav>
          </Container>
        </div>

        <NavDropdown
          title="Menu"
          className="navbar-nav custom-nav dropdown-nav"
        >
          <NavLink to="/members" className="nav-link" activeClassName="active">
            Members
          </NavLink>
          <NavLink to="/projects" className="nav-link" activeClassName="active">
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

          <NavLink
                to="/prototype1"
                className="nav-link"
                activeClassName="active"
              >
                Prototype V1
              </NavLink>

              <NavLink
                to="/usability-testing"
                className="nav-link"
                activeClassName="active"
              >
                Testing
              </NavLink>

              <NavLink
                to="/prototype2"
                className="nav-link"
                activeClassName="active"
              >
                Prototype V2
              </NavLink>
        </NavDropdown>
      </Navbar>
    </>
  );
}

export default NavBar;
