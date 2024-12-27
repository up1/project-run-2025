import React from 'react';

interface MonthFilterProps {
  selectedMonth: number;
  onMonthChange: (month: number) => void;
}

export function MonthFilter({ selectedMonth, onMonthChange }: MonthFilterProps) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <select
      value={selectedMonth}
      onChange={(e) => onMonthChange(Number(e.target.value))}
      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {months.map((month, index) => (
        <option key={month} value={index}>
          {month}
        </option>
      ))}
    </select>
  );
}