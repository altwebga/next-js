import React, { useState, useEffect } from 'react';

export const TimePassed = ({ fromDate }) => {
  const [time, setTime] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const from = new Date(fromDate);
      const diff = Math.abs(now - from);

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 365);
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);

      setTime({
        years: years,
        days: days,
        hours: hours,
        minutes: minutes,
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [fromDate]);

  return (
    <div>
      <p>Лет: {time.years}</p>
      <p>Дней: {time.days}</p>
      <p>Часов: {time.hours}</p>
      <p>Минут: {time.minutes}</p>
    </div>
  );
};
