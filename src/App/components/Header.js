import React from 'react';

function prevMonth(prevDate) {
  return prevDate.minus({ month: 1 });
}

function nextMonth(prevDate) {
  return prevDate.plus({ month: 1 });
}

export default function Header({ setCurrentDate, currentDate }) {
  return (
    <header className="headerCalendar">
      <button
        type="button"
        className="buttonBack"
        onClick={() => setCurrentDate(prevMonth)}
      >
        &lt;
      </button>
      <div>
        {currentDate.monthLong}
      </div>
      <div>
        {currentDate.year}
      </div>
      <button
        type="button"
        className="buttonNext"
        onClick={() => setCurrentDate(nextMonth)}
      >
        &gt;
      </button>
    </header>
  );
}