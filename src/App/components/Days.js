import React from 'react';
import { getMonthData } from '../calendar';

export default function Days({ currentDate }) {
  return (
    <tbody>
      {Object.values(getMonthData(currentDate)).map((week) => (
        <tr className="week">
          {week.map((date) => (date ? (
            <td>
              {date}
            </td>
          ) : (
            <td />
          )))}
        </tr>
      ))}
    </tbody>
  );
}