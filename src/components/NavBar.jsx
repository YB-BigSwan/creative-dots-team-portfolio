import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <>
      <Navbar>
        <Container>
          <Nav className="flex-column">
            <Link to="/members" className="nav-link">
              Members
            </Link>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
