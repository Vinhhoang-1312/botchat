import React from "react";
import {
  Nav,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLink,
} from "./NavbarElements";

const index = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/Home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/About" activeStyle>
            About
          </NavLink>
          <NavLink to="/Profile" activeStyle>
            Profile
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/signin">Sign in</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default index;
