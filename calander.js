"use client";
// src/Calendar.js
import React, { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  addMonths,
  subMonths,
} from "date-fns";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(null); 
   
  const [currentDate, setCurrentDate] = useState(new Date());

  const startOfMonthDate = startOfMonth(currentDate);
  const endOfMonthDate = endOfMonth(currentDate);
  const startOfWeekDate = startOfWeek(startOfMonthDate);
  const endOfWeekDate = endOfWeek(endOfMonthDate);

  const days = eachDayOfInterval({
    start: startOfWeekDate,
    end: endOfWeekDate,
  });

  const nextMonth = () => {
    setCurrentDate((prevDate) => addMonths(prevDate, 1));
  };

  const prevMonth = () => {
    setCurrentDate((prevDate) => subMonths(prevDate, 1));
  };

// hanlde click
  const handleDayClick = (day) => {
   
    setSelectedDate(format(day, 'yyyy-MM-dd'));
    console.log('Selected Date:', format(day, 'yyyy-MM-dd')); 
  };
  return (
    <div>
      <div className="flex justify-between  mb-3">
        <button onClick={prevMonth}>
          <IoIosArrowBack />
        </button>
      <p className="text-center">{format(currentDate, "MMMM yyyy")}</p>

        <button onClick={nextMonth}>
          <IoIosArrowForward />
        </button>
      </div>
      <div className="calendar grid grid-cols-7 gap-3 bg-white p-3 cursor-pointer">
        {days.map((day, index) => (
          <div  key={index}  
          className={`calendar-day ${format(day, 'yyyy-MM-dd') === selectedDate ? 'bg-teal-400 text-white' : ''}  flex justify-center px-1 rounded-sm`} 
          onClick={() => handleDayClick(day)}>
            {format(day, "d")}
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default Calendar;
