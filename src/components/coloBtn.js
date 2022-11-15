import React from "react";

const ColoBtn = ({ diffcolo, setColostate, colostate }) => {
  return (
    <>
      {diffcolo.map((elm, idx) => {
        return (
          <div
            key={idx}
            className={colostate === idx ? "active" : ""}
            onClick={() => setColostate(idx)}
          >
            <img src={elm.photos[1]} alt="black2" className="mobi-photo" />
            <p>{elm.colour}</p>
          </div>
        );
      })}
    </>
  );
};

export default ColoBtn;
