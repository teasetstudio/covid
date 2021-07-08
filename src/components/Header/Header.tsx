import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md">
      <div className="container">
        <NavbarBrand tag={RRNavLink} to="/">
          COVID-19
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                className="nav-link"
                tag={RRNavLink}
                exact
                path="/"
                to="/"
                activeClassName="active"
              >
                World
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link"
                tag={RRNavLink}
                to="/top10"
                activeClassName="active"
              >
                Top 10
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link"
                tag={RRNavLink}
                to="/countries"
                activeClassName="active"
              >
                Countries
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
