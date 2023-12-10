'use client';

import { useEffect, useState } from 'react';

export default function WeekType() {
  const [weekType, setWeekType] = useState('on 1');

  useEffect(() => {
    const currentDate = new Date();
    const weekNumber = getISOWeekNumber(currentDate);
    const weekType = weekNumber % 2 === 0 ? 'on 2' : 'on 1';
    setWeekType(weekType);
  }, []);

  const getISOWeekNumber = (d: Date) => {
    const date = new Date(d.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
    const week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
  };

  return (
    <h1 className="text-3xl font-bold">
      Salsa Astoria: This week we dance <span className="weekType text-red-500">{weekType}</span>.
    </h1>
  );
}
