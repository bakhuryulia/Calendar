import React, { useState } from 'react';

import WeekName from './WeekName';
import Header from './Header';
import Days from './Days';

const { DateTime } = require('luxon');

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(DateTime.now().reconfigure({ locale: 'en-GB' }));

  return (
    <div className="calendar">
      <Header setCurrentDate={setCurrentDate} currentDate={currentDate} />
      <table className="days">
        <WeekName />
        <Days currentDate={currentDate} />
      </table>
    </div>
  );
}
