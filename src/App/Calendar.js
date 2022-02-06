import React from "react";

const weekPattern = Array(7).fill(null);

export function getMonthData(currentDate) {
  const month = Array.from(
    { length: currentDate.daysInMonth },
    (_, i) => i + 1
  );

  return month.reduce((acc, day) => {
    const date = currentDate.set({ day });
    const key = `${date.year}-${date.weekNumber}`;
    if (!acc[key]) acc[key] = weekPattern;

    return {
      ...acc,
      [key]: acc[key].map((d, i) => (i + 1 === date.weekday ? date.day : d))
    };
  }, {});
}