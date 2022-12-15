import React, { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button, useAccordionButton } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

function ColorSchemesExample() {
  const {
    user,
    setUser,
    isLoggedin,
    setIsLoggedin,
    userDetails,
    setUserDetails,
  } = useContext(AuthContext);

  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedin(false);
    history.push("/admin/signin");
  };

  return (
    <>
      <Navbar
        bg='dark'
        variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>{userDetails}</Nav.Link>
            <Button
              onClick={handleLogout}
              className=' btn-danger'>
              logout
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default ColorSchemesExample;
