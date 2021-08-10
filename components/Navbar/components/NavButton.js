import React from 'react';
import Button from 'react-bootstrap/Button';

const NavButton = () => (
  <a
    className="a"
    href="/register"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button className="btn">
      <div className={`align-self-middle "btnRegisterText"`}>
        Register
      </div>
    </Button> 
  </a>
);
export default NavButton;
