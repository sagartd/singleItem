import React from "react";
import styled from "styled-components";
import Navbar from "./navbar";
import { NavLink } from "react-router-dom";
import Searchbar from "./searchbar";
import { FcShop } from "react-icons/fc";

const Header = () => {
  return (
    <Sheader>
      <NavLink to="/">
        <FcShop className="logo" />
      </NavLink>
      <Searchbar />
      <Navbar />
    </Sheader>
  );
};

export default Header;

const Sheader = styled.header`
  padding: 0 4.8rem;
  height: 7rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  border-bottom: 1px solid rgba(236, 236, 236, 1);

  .logo {
    font-size: 3.5rem;
  }
`;
