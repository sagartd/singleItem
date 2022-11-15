import React from "react";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import { phones } from "../mobiApi";

const Rating = () => {
  return (
    <div className="star-icon">
      {[...new Array(5)].map((_, idx) => {
        let num = idx + 0.5;
        return (
          <React.Fragment key={idx}>
            {phones[0].stars >= idx + 1 ? (
              <BsStarFill className="icon" />
            ) : phones[0].stars >= num ? (
              <BsStarHalf className="icon" />
            ) : (
              <BsStar className="icon" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Rating;
