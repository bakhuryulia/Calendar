const weekPattern = Array(7).fill(null);

// eslint-disable-next-line import/prefer-default-export
export function getMonthData(currentDate) {
  if (!currentDate) {
    return null;
  }

  const month = Array.from(
    { length: currentDate.daysInMonth },
    (_, i) => i + 1,
  );

  return month.reduce((acc, day) => {
    const date = currentDate.set({ day });
    const key = `${date.year}-${date.weekNumber}`;
    if (!acc[key]) acc[key] = weekPattern;

    return {
      ...acc,
      [key]: acc[key].map((d, i) => (i + 1 === date.weekday ? date.day : d)),
    };
  }, {});
}