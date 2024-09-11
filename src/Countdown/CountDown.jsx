import React, { useState, useEffect } from "react";
const CountDown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const timeLeft = targetDate - now;
    return {
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
    };
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  return (
    <div className="mt-2 flex gap-2 flex-wrap items-center justify-center">
      <div className="w-16 items-center rounded border py-1 shadow-lg flex flex-col leading-5">
        <span className="text-sm font-semibold">{timeLeft.days}</span>
        <span className="text-sm">Days</span>
      </div>
      <div className="w-16 items-center rounded border py-1 shadow-lg flex flex-col leading-5">
        <span className="text-sm font-semibold">{timeLeft.hours}</span>
        <span className="text-sm">Hours</span>
      </div>
      <div className="w-16 items-center rounded border py-1 shadow-lg flex flex-col leading-5">
        <span className="text-sm font-semibold">{timeLeft.minutes}</span>
        <span className="text-sm">Minutes</span>
      </div>
      <div className="w-16 items-center rounded border py-1 shadow-lg flex flex-col leading-5">
        <span className="text-sm font-semibold">{timeLeft.seconds}</span>
        <span className="text-sm">Seconds</span>
      </div>
    </div>
  );
};
export default CountDown;
