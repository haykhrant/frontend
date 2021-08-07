import React from "react";
import ArrowUp from "../icon/arrow_up.png";

const Bar = ({ setOpenModal, onDeleteAll }) => {
  return (
    <>
      <div className="bar">
        <p className="_title">Eco-Market</p>
        <div>
          <button
            className="_button"
            onClick={() => {
              setOpenModal((prev) => !prev);
            }}
          >
            Registration
          </button>
          <button className="_button" onClick={onDeleteAll}>
            Log in
          </button>
        </div>
        <div className="in_bar">
          <img src={ArrowUp} alt="GO HERE!" className="loading_img small" />
        </div>
      </div>
      <div className="hide">
        <img src={ArrowUp} alt="GO HERE!" className="loading_img small" />
      </div>
    </>
  );
};

export default Bar;
