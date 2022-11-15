import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
//import { HiOutlineShoppingBag } from "react-icons/hi";

const Navbar = () => {
  const [hamMenu, sethamMenu] = useState(false);
  //console.log(hamMenu);
  return (
    <Enav>
      <div className={hamMenu ? "navbar active" : "navbar"}>
        <ul className="navbar-list">
          {["services", "orders", "account"].map((elm, idx) => {
            return (
              <li key={idx}>
                <NavLink
                  to={`/${elm}`}
                  className="navbar-link"
                  onClick={() => sethamMenu(false)}
                >
                  {elm}
                </NavLink>
              </li>
            );
          })}
          <li>
            <NavLink
              to="/cart"
              className="navbar-link cart-trolly-link"
              onClick={() => sethamMenu(false)}
            >
              <img src="./frame29.svg" alt="frame" className="cart-trolly"/>
              {/* <HiOutlineShoppingBag className="cart-trolly" /> */}
              <span className="cart-total-item">2</span>
            </NavLink>
          </li>
          <li className="off">
            <Eham>
              <button
                className={`${hamMenu ? "ham active" : "ham"}`}
                onClick={() => sethamMenu(!hamMenu)}
              ></button>
            </Eham>
          </li>
        </ul>
        <div className="mobile-nav-btn">
          <Eham>
            <button
              className={`${
                hamMenu
                  ? "ham active mobile-nav-icon close-outline"
                  : "ham mobile-nav-icon "
              }`}
              name={hamMenu ? "close-outline" : "menu-outline"}
              onClick={() => sethamMenu(!hamMenu)}
            ></button>
          </Eham>
        </div>
      </div>
    </Enav>
  );
};

export default Navbar;

const Enav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 4.8rem;
    align-items: center;

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.7rem;
        font-weight: 500;
        text-transform: capitalize;
        color: black;
        transition: color 0.3 linear;
      }
      &:hover,
      &:active {
        color: blue;
      }
    }
  }

  .mobile-nav-btn {
    /* display: flex;
    justify-content: center;
    padding: 0 7%;
    padding-top: 10px; */
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }

  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }

  .close-outline {
    display: none;
  }

  .cart-trolly-link {
    position: relative;

    .cart-trolly {
      position: relative;
      width: 3rem;
    }
    .cart-total-item {
      width: 1.9rem;
      height: 1.9rem;
      position: absolute;
      background-color: #e52b50;
      color: white;
      border-radius: 50%;
      display: grid;
      font-size: 1rem;
      place-items: center;
      top: -8%;
      left: 65%;
      box-shadow: -2px 5px 15px #e32636;
    }
  }
  .user-login-name {
    text-transform: capitalize;
  }
  .user-logout,
  .user-login {
    font-size: 1.4rem;
    padding: 0.8rem 1.4rem;
  }

  @media (max-width: 450px) {
    .mobile-nav-btn {
      display: inline-block;
      z-index: -9999;
      border: black;

      .mobile-nav-icon {
        font-size: 2.4rem;
        color: black;
      }
    }

    .off {
      display: none;
    }
    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 28%;
      right: 12%;
      color: #000;
      z-index: 9999;
    }

    .active .close-outline {
      display: inline-block;
    }

    .navbar-list {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);
    }

    .active .navbar-list {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
      transform-origin: right;


      .nabar-link {
        font-size: 2rem;
      }
    }

    .cart-trolly-link {
      position: relative;

      .cart-trolly {
        position: relative;
        width: 4rem;
      }

      .cart-total-item {
        width: 2.2rem;
        height: 2.2rem;
        font-size: 1.4rem;
      }
    }

    .user-logout,
    .user-login {
      font-size: 2.2rem;
      padding: 0.8rem 1.4rem;
    }
  }


`;

const Eham = styled.div`
  padding-top: 2rem;
  .ham {
    display: flex;
    outline: none;
    height: 20px;
    width: 15px;
    border: 0px;
    padding: 0px;
    background: transparent;
    transition: all 250ms ease-out;
    cursor: pointer;

    &:before,
    &:after {
      content: "";
      width: 30px;
      height: 1.5px;
      position: absolute;
      background: #1a1a1a;
      transition: all 250ms ease-out;
      will-change: transform;
    }

    &:before {
      transform: translateY(-4px);
    }

    &:after {
      transform: translateY(3px);
    }

    &.active:before {
      transform: translateY(0) rotate(45deg);
    }

    &.active:after {
      transform: translateY(0) rotate(-45deg);
    }
  }
`;





// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { CgMenu, CgClose } from "react-icons/cg";

// const Navbar = () => {
//   const [hamMenu, sethamMenu] = useState();

//   return (
//     <Enav>
//       <div className={hamMenu ? "navbar active" : "navbar"}>
//         <ul className="navbar-list">
//           <li>
//             <NavLink
//               to="/"
//               className="navbar-link"
//               onClick={() => sethamMenu(false)}
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/about"
//               className="navbar-link"
//               onClick={() => sethamMenu(false)}
//             >
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/product"
//               className="navbar-link"
//               onClick={() => sethamMenu(false)}
//             >
//               Products
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/contact"
//               className="navbar-link"
//               onClick={() => sethamMenu(false)}
//             >
//               Contact
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/cart"
//               className="navbar-link cart-trolly-link"
//               onClick={() => sethamMenu(false)}
//             >
//               <AiOutlineShoppingCart className="cart-trolly" />
//               <span className="cart-total-item">7</span>
//             </NavLink>
//           </li>
//         </ul>

//         <div className="mobile-nav-btn ">
//           <CgMenu
//             name="menu-outline"
//             className="mobile-nav-icon"
//             onClick={() => sethamMenu(true)}
//           />
//           <CgClose
//             name="close-outline"
//             className="mobile-nav-icon close-outline"
//             onClick={() => sethamMenu(false)}
//           />
//         </div>
//       </div>
//     </Enav>
//   );
// };

// export default Navbar;

// const Enav = styled.nav`
//   .navbar-list {
//     display: flex;
//     gap: 4.8rem;
//     align-items: center;

//     .navbar-link {
//       &:link,
//       &:visited {
//         display: inline-block;
//         text-decoration: none;
//         font-size: 1.5rem;
//         font-weight: 500;
//         text-transform: uppercase;
//         color: black;
//         transition: color 0.3 linear;
//       }
//       &:hover,
//       &:active {
//         color: blue;
//       }
//     }
//   }

//   .mobile-nav-btn {
//     display: none;
//     background-color: transparent;
//     cursor: pointer;
//     border: none;
//   }

//   .mobile-nav-icon[name="close-outline"] {
//     display: none;
//   }

//   .close-outline {
//     display: none;
//   }

//   .cart-trolly-link {
//     position: relative;

//     .cart-trolly {
//       position: relative;
//       font-size: 3.2rem;
//     }
//     .cart-total-item {
//       width: 2.4rem;
//       height: 2.4rem;
//       position: absolute;
//       background-color: yellow;
//       color: #000;
//       border-radius: 50%;
//       display: grid;
//       place-items: center;
//       top: -20%;
//       left: 70%;
//     }
//   }
//   .user-login-name {
//     text-transform: capitalize;
//   }
//   .user-logout,
//   .user-login {
//     font-size: 1.4rem;
//     padding: 0.8rem 1.4rem;
//   }

//   @media (max-width: 450px) {
//     .mobile-nav-btn {
//       display: inline-block;
//       z-index: 9999;
//       border: black;

//       .mobile-nav-icon {
//         font-size: 2.4rem;
//         color: black;
//       }
//     }
//     .active .mobile-nav-icon {
//       display: none;
//       font-size: 4.2rem;
//       position: absolute;
//       top: 30%;
//       right: 10%;
//       color: #000;
//       z-index: 9999;
//     }

//     .active .close-outline {
//       display: inline-block;
//     }

//     .navbar-list {
//       width: 100vw;
//       height: 100vh;
//       position: absolute;
//       top: 0;
//       left: 0;
//       background-color: #fff;

//       display: flex;
//       justify-content: center;
//       align-items: center;
//       flex-direction: column;

//       visibility: hidden;
//       opacity: 0;
//       transform: translateX(100%);
//       transition: all 0.3s linear;
//     }

//     .active .navbar-list {
//       visibility: visible;
//       opacity: 1;
//       transform: translateX(0);
//       z-index: 999;
//       transform-origin: right;
//       transition: all 0.3s linear;

//       .nabar-link {
//         font-size: 4.2rem;
//       }
//     }

//     .cart-trolly-link {
//       position: relative;

//       .cart-trolly {
//         position: relative;
//         font-size: 5.2rem;
//       }

//       .cart-total-item {
//         width: 4.2rem;
//         height: 4.2rem;
//         font-size: 2rem;
//       }
//     }

//     .user-logout,
//     .user-login {
//       font-size: 2.2rem;
//       padding: 0.8rem 1.4rem;
//     }
//   }
// `;
