import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import "./header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [acn1, setAcn1] = useState<string>("active"); // assumes link 1 is default active
  const [acn2, setAcn2] = useState<string>("");
  const [acn3, setAcn3] = useState<string>("");

  const startChangeVis = (id: string): void => {
    setAcn1("");
    setAcn2("");
    setAcn3("");
    if (id === "a") setAcn1("active");
    else if (id === "b") setAcn2("active");
    else setAcn3("active");
  };

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="header">
      <Navbar color="dark" dark expand="md">
        <div className="container">
          <NavbarBrand href="/">COVID-19</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse className="header__collapse" isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link
                  className={`nav-link ${acn1}`}
                  to="/"
                  onClick={() => {
                    startChangeVis("a");
                  }}
                >
                  World
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className={`nav-link ${acn2}`}
                  to="/top10/"
                  onClick={() => {
                    startChangeVis("b");
                  }}
                >
                  Top 10
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className={`nav-link ${acn3}`}
                  to="/countries/"
                  onClick={() => {
                    startChangeVis("c");
                  }}
                >
                  Countries
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
