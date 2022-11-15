import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ColoBtn from "./components/coloBtn";
import Itemimg from "./components/itemimg";
import Rating from "./components/rates";
import Storage from "./components/storage";
import PageNav from "./helpers/pageNav";
import { phones } from "./mobiApi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSpeed } from "react-icons/md";
import { ImRocket } from "react-icons/im";

const Product = () => {
  const [mobi, setmobi] = useState(phones[0]?.colors[0]?.photos);

  const [colostate, setColostate] = useState(0);
  const [storage, setstorage] = useState(0);

  const [price, setprice] = useState("75,000");

  const hndlprice = (indx, amt) => {
    setprice(amt);
    setstorage(indx);
  };

  useEffect(() => {
    setmobi(phones[0]?.colors[colostate]?.photos);
  }, [colostate]);

  return (
    <Wproduct>
      <div className="pics">
        <Itemimg phnsphoto={mobi} />
      </div>
      <div className="infos">
        <PageNav />
        <h3>APPLE iPhone 11 Pro</h3>
        <p style={{ opacity: "60%", fontSize: "10px" }}>Product Code: 12034</p>
        <section style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <p>Ratings:</p>
          <Rating />
          <p style={{ opacity: "70%" }}>4.7 (200)</p>
        </section>
        <section className="mobi-colo">
          <p>Colors:</p>
          <ColoBtn
            diffcolo={phones[0]?.colors}
            setColostate={setColostate}
            colostate={colostate}
          />
        </section>
        <section className="dflex">
          <p>Storage:</p>
          <Storage hndlprice={hndlprice} storage={storage} />
        </section>
        <section className="dflex">
          <p>Price:</p>
          <h3>₹ {price}</h3>
        </section>
        <section className="dflex">
          <p>Shipping:</p>
          {[
            { speed: "Free", estimate: "7-10 days", icon: <TbTruckDelivery /> },
            { speed: "Fast", estimate: "4-5 days", icon: <MdSpeed /> },
            { speed: "Rocket", estimate: "1-2 days", icon: <ImRocket /> },
          ].map((elm, idx) => {
            return (
              <h3 className={idx === 2 ? "active-elm" : ""} key={elm.speed}>
                {elm.speed}
                <small> {elm.estimate} </small>
                {elm.icon}
              </h3>
            );
          })}
        </section>
        <NavLink to="/cart">
          <button>Order Now</button>
        </NavLink>
      </div>
    </Wproduct>
  );
};

export default Product;

const Wproduct = styled.div`
  padding: 10rem 15rem;
  display: flex;
  gap: 3rem;
  height: 70rem;

  .pics {
    height: 50rem;
    display: flex;
    gap: 1rem;

    .multipics {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      img {
        width: 75px;
        cursor: pointer;
        border-radius: 5px;
      }

      .active {
        box-shadow: 0 0 1px 1.5px ${({ theme }) => theme.colors.text};
        opacity: 60%;
      }

      .inactive {
        box-shadow: 1px 1px 2px 0 grey;
      }
    }
  }

  .infos {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    padding: 2rem;
    border-radius: 10px;

    button {
      background-color: #c2f2cf;
      border: none;
      cursor: pointer;
      padding: 0.5rem 20rem;
      border-radius: 10px;
      color: #fff;
      box-shadow: 2px 2px 4px grey;
      text-shadow: 1px 1px 2px grey;
      font-size: 20px;
      font-weight: 700;
    }
  }

  .mobi-colo {
    display: flex;
    width: 75%;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      padding: 0.5rem;
      gap: 5px;
      width: 10rem;
      height: 4.5rem;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border-radius: 5px;

      p {
        opacity: 60%;
        text-transform: capitalize;
      }

      .mobi-photo {
        width: 4rem;
        border-radius: 50%;
        border: 1px solid #d3d3d3;
      }
    }

    .active {
      box-shadow: 1px 1px 2px #c0c0c0;
      background-color: #f5f5f5;
      p {
        opacity: 100%;
      }
    }
  }

  .capacity {
    display: flex;
    width: 75%;
    gap: 1rem;
    align-items: center;
  }

  .dflex {
    display: flex;
    gap: 2rem;
    align-items: center;

    h3 {
      cursor: pointer;
      > small {
        font-size: 12px;
        opacity: 60%;
      }
    }
  }

  @media (max-width: 450px) {
    padding: 17rem 20px;
    display: flex;
    gap: 5rem;
    height: 130rem;
    flex-direction: column;
    .pics {
      height: 50rem;
      display: flex;
      flex-direction: column-reverse;
      gap: 2rem;

      .multipics {
        display: flex;
        flex-direction: row;

        img {
          width: 69px;
        }
      }
    }
    .infos {
      gap: 3rem;
      height: 75rem;

      button {
        padding: 0.5rem 4rem;
        font-weight: 200;
      }
    }
  }
`;
