import React, { useState } from "react";

const Itemimg = ({ phnsphoto }) => {
  const [photostate, setphotostate] = useState(0);

  return (
    <>
      <section className="multipics">
        {phnsphoto?.map((elm, idx) => (
          <img
            src={elm}
            alt={elm}
            key={idx}
            className={photostate === idx ? "active" : "inactive"}
            onClick={() => setphotostate(idx)}
            // onMouseLeave={() => setstate("")}
          />
        ))}
      </section>
      <img src={phnsphoto[photostate]} alt="black1" className="main-img" />
    </>
  );
};

export default Itemimg;
