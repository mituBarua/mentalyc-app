import React from "react";
import {Container,Navbar} from 'react-bootstrap';
import logo from "../assets/Vector.png";
export default function Navigation() {
  return (
    <div>
     
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
          <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        
        </Container>
      </Navbar>
    </div>
  );
}
