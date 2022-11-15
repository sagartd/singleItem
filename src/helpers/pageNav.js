import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const PageNav = () => {
  return (
    <WpageNav>
      <p>
        {<NavLink to="/">Home</NavLink>}
        {` > All Industries > Consumer Electronics > Mobile Phone & Accessories > Mobile Phones`}
      </p>
    </WpageNav>
  );
};

export default PageNav;

const WpageNav = styled.section`
  /* margin-top: 9rem;
  padding: 0 5rem; */
  p {
    opacity: 70%;
    font-size: 1.2rem;
  }
`;
