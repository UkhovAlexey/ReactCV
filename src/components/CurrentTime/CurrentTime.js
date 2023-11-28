import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import "./currentTime.css";

const CurrentTime = ({ timeZone, city }) => {
  return (
      <div className="currentTime text-normal">
        <div> {city}</div>
        <div>
          <Moment tz={timeZone} format="HH:mm • dddd" interval={1000} />
        </div>
      </div>
  );
};

export default CurrentTime;
