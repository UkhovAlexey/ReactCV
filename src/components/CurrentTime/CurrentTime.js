import React from "react";
import Moment from "react-moment";
import "./style.css";

const CurrentTime = () => {
  return (
    <>
        <Moment format="HH:mm DD.MM.YY" interval={1000} />
    </>
  );
};

export default CurrentTime;
