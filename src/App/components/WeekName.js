import React from 'react';

const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

export default function WeekName() {
  return (
    <thead className="nameDays">
      <tr>
        {weekDays.map((name) => (
          <th>{name}</th>
        ))}
      </tr>
    </thead>
  );
}