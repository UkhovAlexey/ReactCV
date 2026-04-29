import { useEffect, useState } from "react";
import "./currentTime.css";

const formatTime = (date, timeZone) => {
  const time = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);

  const weekday = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "long",
  }).format(date);

  return `${time} • ${weekday}`;
};

const CurrentTime = ({ timeZone, city }) => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="currentTime text-normal">
      <div>{city}</div>
      <div>{formatTime(now, timeZone)}</div>
    </div>
  );
};

export default CurrentTime;
