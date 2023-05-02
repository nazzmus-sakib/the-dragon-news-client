import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";

const NavigationBar = () => {
  const { logOut, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => console.log(err.message));
  };
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex justify-content-center align-items-center">
            <Link className="text-secondary text-decoration-none me-3" to="/">
              Home
            </Link>
            <Link className="text-secondary text-decoration-none me-3">
              About
            </Link>
            <Link className="text-secondary text-decoration-none">Career</Link>
          </Nav>
          <Nav className="ms-auto d-flex justify-content-center align-items-center">
            {user && (
              <p>
                <Nav.Link href="#home" style={{ fontSize: "40px" }}>
                  <FaUserCircle></FaUserCircle>
                </Nav.Link>
              </p>
            )}
            <p>
              <Nav.Link>
                {user ? (
                  <Button variant="secondary" onClick={handleLogOut}>
                    Logout
                  </Button>
                ) : (
                  <Link to="/login">
                    <Button variant="secondary">Login</Button>
                  </Link>
                )}
              </Nav.Link>
            </p>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
