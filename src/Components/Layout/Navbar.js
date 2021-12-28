import React from "react";
import {
  Nav,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/Home" activeStyle>
          <h1>Logo</h1>
          {/* <img src{require('/...')} 
          alt="logo"/> */}
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
          </NavLink>{" "}
          <NavLink to="/Chat" activeStyle>
            Chat
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/signin">Sign in</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default Navbar;
