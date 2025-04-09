import React, { useState, useEffect } from "react";
import "../../styles/colors.css";

const CountdownTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const setTime = (time: any) => {
    setDays(time.days);
    setHours(time.hours);
    setMinutes(time.minutes);
    setSeconds(time.seconds);
  };

  const calculateTimeRemaining = (endDate: Date) => {
    const difference = endDate.getTime() - Date.now();

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });
    } else {
      // Timer expired
      setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  useEffect(() => {
    const endDate = new Date("2025-04-19T09:30:00-07:00"); // Arizona time (MST/PDT)
    const intervalId = setInterval(() => {
      calculateTimeRemaining(endDate);
    }, 1000);

    calculateTimeRemaining(endDate);

    return () => clearInterval(intervalId);
  }, []);

  return (
      <div className="flex   p-2  text-2xl   md:text-7xl flex-row rounded-3xl     space-x-6 "><div className="text-center">
      <div className="  text-[#E066FF] mb-2">{days}</div>
      <div className="text-sm text-white/80">Days</div>
    </div><div className="text-center">
        <div className=" text-[#E066FF] mb-2">{hours}</div>
        <div className="text-sm text-white/80">Hours</div>
      </div><div className="text-center">
        <div className="  text-[#E066FF] mb-2">{minutes}</div>
        <div className="text-sm text-white/80">Minutes</div>
      </div><div className="text-center">
        <div className="  text-[#E066FF] mb-2">{seconds}</div>
        <div className="text-sm text-white/80">Seconds</div>
      </div></div>
  );
};

export default CountdownTimer;
