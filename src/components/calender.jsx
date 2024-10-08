import { ChevronLeft, ChevronRight, Clock4, Search, X } from "lucide-react";
import React, { useState } from "react";

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
      setSelectedDates(
        selectedDates.filter((d) => d.getTime() !== date.getTime())
      );
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
      const startDate = new Date(
        Math.min(...selectedDates.map((date) => date.getTime()))
      );
      const endDate = new Date(
        Math.max(...selectedDates.map((date) => date.getTime()))
      );
      alert(
        `Date Range: ${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
      );
    }
  };

  const handleMonthChange = (event) => {
    setMonth(parseInt(event.target.value));
  };

  const handleYearChange = (event) => {
    setYear(parseInt(event.target.value));
  };

  const handleMonthNav = (direction) => {
    let newMonth = month + direction;
    let newYear = year;

    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }

    setMonth(newMonth);
    setYear(newYear);
  };

  // Compute startDate for displaying selected range
  const startDate =
    selectedDates.length > 0
      ? new Date(Math.min(...selectedDates.map((date) => date.getTime())))
      : null;

  return (
    <div className="w-full h-full p-4 bg-white rounded-lg">
      <div className=" h-[60vh]">
        {" "}
        {/* Month and Year Selector */}
        <form method="dialog">
          <div className="flex justify-between mb-3 text-black">
            <h3 className="font-semibold text-2xl">Set Time Frame</h3>
            <button className="btn btn-sm btn-circle btn-ghost">
              <X />
            </button>
          </div>
        </form>
        <div className="flex justify-between mb-4">
          <button
            onClick={() => handleMonthNav(-1)}
            className="p-2 hover:bg-gray-200 rounded-l-md"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <select
            onChange={handleMonthChange}
            value={month}
            className=" rounded-md p-2 text-xl bg-transparent text-black"
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={i}>
                {new Date(year, i).toLocaleString("default", { month: "long" })}
              </option>
            ))}
          </select>
          <select
            onChange={handleYearChange}
            value={year}
            className="bg-transparent rounded-md p-2 text-xl text-black"
          >
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i} value={year - 5 + i}>
                {year - 5 + i}
              </option>
            ))}
          </select>
          <button
            onClick={() => handleMonthNav(1)}
            className="p-2 hover:bg-gray-200 rounded-r-md"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-y-2 text-center text-xl text-black">
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
            const isSelected = selectedDates.some(
              (d) => d.getTime() === date.getTime()
            );
            const isToday = today.toDateString() === date.toDateString();

            return (
              <div
                key={day}
                className={`cursor-pointer p-2 relative text-xl text-black  ${
                  isSelected ? "bg-green-200" : "hover:bg-gray-200"
                }`}
                onClick={() => handleDateClick(day)}
              >
                {day}
                {isToday && (
                  <div className="absolute left-3 w-8 right-0 bottom-0 h-1 bg-green-500" />
                )}
                {/* {isSelected && (
                <div className="absolute left-0 right-0 bottom-0 h-1 bg-green-500" />
              )} */}
              </div>
            );
          })}
        </div>
        <div className="divider"></div>
        <div className="w-full h-24  flex flex-col justify-center">
          <p className="text-xl text-black flex justify-around">
            <span>
              {selectedDates.length > 0
                ? ` ${startDate.toLocaleDateString()}`
                : "no date selected"}
            </span>
            -
            <span>
              {selectedDates.length > 0
                ? ` ${new Date(
                    Math.max(...selectedDates.map((date) => date.getTime()))
                  ).toLocaleDateString()}`
                : "no date selected"}
            </span>
          </p>
          <p className="text-xl mt-2 text-black flex justify-around items-center">
            <div className="flex w-36 px-2  h-10 items-center border-2 border-gray-300 rounded-md ">
              {/* Icon */}

              {/* Input Box */}
              <input
                type="time"
                // value={inputValue}
                // onChange={handleChange}
                className=" w-full h-full bg-transparent  border-none focus:ring-0 outline-none"
                placeholder="Search..."
              />
              <Clock4 className="size-8 text-gray-500" />
            </div>
            to
            <div className="flex w-36 px-2  h-10 items-center border-2 border-gray-300 rounded-md ">
              {/* Icon */}

              {/* Input Box */}
              <input
                type="time"
                // value={inputValue}
                // onChange={handleChange}
                className=" w-full h-full bg-transparent  border-none focus:ring-0 outline-none"
                placeholder="Search..."
              />
              <Clock4 className="size-8 text-gray-500" />
            </div>
          </p>
        </div>
      </div>

      <div className="divider"></div>

      <div className="mt-4">
        <button
          onClick={handleSetRange}
          className="w-full bg-teal-500 text-white rounded-md p-2 hover:bg-teal-600 text-xl"
        >
          Set Range
        </button>
      </div>
    </div>
  );
};

export default Calendar;
