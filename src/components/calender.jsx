import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

const Calendar = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  // Get present date
  const today = new Date();

  const handleDateClick = (day) => {
    const date = new Date(year, month, day);

    // Check if the clicked date is already selected
    if (selectedDates.some((d) => d.getTime() === date.getTime())) {
      // If it is selected, remove it
      setSelectedDates(selectedDates.filter((d) => d.getTime() !== date.getTime()));
    } else {
      // If it is not selected, add it
      setSelectedDates([...selectedDates, date]);

      // If there's already a start date selected, select all dates in between
      if (selectedDates.length > 0) {
        const startDate = selectedDates[selectedDates.length - 1];
        const endDate = date;

        const datesInBetween = [];
        const currentDate = new Date(startDate);

        while (currentDate <= endDate) {
          datesInBetween.push(new Date(currentDate));
          currentDate.setDate(currentDate.getDate() + 1);
        }

        setSelectedDates([...new Set([...selectedDates, ...datesInBetween])]);
      }
    }
  };

  const handleSetRange = () => {
    if (selectedDates.length > 0) {
      const startDate = new Date(Math.min(...selectedDates.map(date => date.getTime())));
      const endDate = new Date(Math.max(...selectedDates.map(date => date.getTime())));
      alert(`Date Range: ${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`);
    }
  };

  const handleMonthChange = (event) => {
    setMonth(parseInt(event.target.value));
  };
  const handleYearChange = (event) => {
    setYear(parseInt(event.target.value));
  };

  const handleMonthNav = (direction) => {
    setMonth((month + direction) % 12);
  };

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md">
      {/* Month and Year Selector */}

      <div className="flex justify-between mb-4">
        <button onClick={() => handleMonthNav(-1)} className="p-2 hover:bg-gray-200 rounded-l-md">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <select onChange={handleMonthChange} value={month} className="border rounded-md p-2">
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={i}>
              {new Date(year, i).toLocaleString('default', { month: 'long' })}
            </option>
          ))}
        </select>
        <select onChange={handleYearChange} value={year} className="border rounded-md p-2">
          {Array.from({ length: 10 }, (_, i) => (
            <option key={i} value={year - 5 + i}>
              {year - 5 + i}
            </option>
          ))}
        </select>
        <button onClick={() => handleMonthNav(1)} className="p-2 hover:bg-gray-200 rounded-r-md">
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>




      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 text-center">
        <div className="font-bold">Sun</div>
        <div className="font-bold">Mon</div>
        <div className="font-bold">Tue</div>
        <div className="font-bold">Wed</div>
        <div className="font-bold">Thu</div>
        <div className="font-bold">Fri</div>
        <div className="font-bold">Sat</div>

        {/* Empty days before the first day of the month */}
        {Array.from({ length: firstDay }, (_, i) => (
          <div key={`empty-${i}`} className="opacity-50"></div>
        ))}

        {/* Calendar Days */}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const date = new Date(year, month, day);
          const isSelected = selectedDates.some((d) => d.getTime() === date.getTime());
          const isToday = today.toDateString() === date.toDateString();

          return (
            <div
              key={day}
              className={`cursor-pointer p-2 rounded-lg relative ${
                isSelected ? 'bg-green-200' : 'hover:bg-gray-200'
              }`}
              onClick={() => handleDateClick(day)}
            >
              {day}
              {isToday && (
                <div className="absolute left-0 right-0 bottom-0 h-1 bg-green-500" />
              )}
              {isSelected && (
                <div className="absolute left-0 right-0 bottom-0 h-1 bg-green-500" />
              )}
            </div>
          );
        })}
      </div>

      {/* Set Range Button */}
      <div className="mt-4">
        <button
          onClick={handleSetRange}
          className="w-full bg-teal-500 text-white rounded-md p-2 hover:bg-teal-600"
        >
          Set Range
        </button>
      </div>
    </div>
  );
};

export default Calendar;

