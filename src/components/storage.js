import React from "react";
import { phones } from "../mobiApi";

const Storage = ({ hndlprice, storage}) => {

  return (
    <>
      {phones[0].amount.map((elm, idx) => {
        return (
          <div
            style={{ display: "flex", gap: "3px", cursor: "pointer" }}
            onClick={()=>hndlprice(idx, elm.price)}
            className={storage === idx ? "active-elm" : ""}
            key={idx}
          >
            <h3>{elm.memory}</h3>
            <sub style={{ marginTop: "8px" }}>GB</sub>
          </div>
        );
      })}
    </>
  );
};

export default Storage;
