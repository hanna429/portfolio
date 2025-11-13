import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbarr.css';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import { Link } from 'react-router-dom';

function Navbarr() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(expanded ? false : true);
  };

  return (
    <Navbar
      expand="lg"
      data-bs-theme="dark"
      className="bg-black custom-navbar-style fixed-top"
      expanded={expanded}
    >
      {/* ✅ Everything wrapped in one Container */}
      <Container className="mt-2 px-3 d-flex align-items-center justify-content-between">
        
        {/* Brand (Left) */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-white">
          han.
        </Navbar.Brand>

        {/* Center Nav Links */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto text-center">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/work" onClick={() => setExpanded(false)}>
              Work
            </Nav.Link>
            <Nav.Link as={Link} to="/more" onClick={() => setExpanded(false)}>
              More
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* ✅ Custom Icon (Right side, unchanged position) */}
        <div className="custom-toggle" onClick={handleToggle}>
          <BubbleChartIcon
            sx={{
              color: 'white',
              fontSize: '32px',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          />
        </div>

      </Container>
    </Navbar>
  );
}

export default Navbarr;
