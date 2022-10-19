import { useContext } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "./AuthContext";

const Layout = ({ children }) => {
  const { user, logout } = useContext(AuthContext);
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand as={Link} to="/">
          JWT HTTP-Only Cookie
        </Navbar.Brand>
        <Nav>
          {user && (
            <Nav.Link as={Link} to="/movies">
              Movies
            </Nav.Link>
          )}
        </Nav>
        <Nav className="ms-auto">
          {user && <Nav.Link>{user?.email}</Nav.Link>}
          {!user && (
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          )}
        </Nav>
        {user && (
          <Button variant="outline-success" type="button" onClick={() => {logout()}}>
            Logout
          </Button>
        )}
      </Navbar>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
