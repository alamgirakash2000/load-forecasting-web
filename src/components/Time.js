import React, { useState } from "react";

export default function Time({ info, setInfo }) {
  const [Year, setYear] = useState("");
  const [Month, setMonth] = useState("");
  const [Day, setDay] = useState("");
  const [Hour, setHour] = useState("");

  const handleClick = () => {
    if (Year < 2015 || Year > 2025) {
      window.alert("Year must be between 2015 to 2025");
      return;
    } else if (Month < 1 || Month > 12) {
      window.alert("Month must be between 1 to 12");
      return;
    } else if (Day < 1 || Day > 31) {
      window.alert("Day must be between 1 to 31");
      return;
    } else if (Hour < 0 || Hour > 23) {
      window.alert("Hour must be between 0 to 23");
      return;
    }

    let time_info = {
      Year,
      Month,
      Day,
      Hour,
    };

    let newInfo = {
      ...info,
      ...time_info,
    };
    setInfo(newInfo);
    console.log(time_info);
  };

  return (
    <div className='time card'>
      <h2 className='text-center'> Time Info</h2>
      <div className='time_input'>
        <label>Year</label>
        <input
          type='number'
          value={Year}
          onChange={(e) => setYear(parseFloat(e.target.value) || 0)}
        />
      </div>
      <div className='time_input'>
        <label>Month</label>
        <input
          type='number'
          value={Month}
          onChange={(e) => setMonth(parseFloat(e.target.value) || 0)}
        />
      </div>
      <div className='time_input'>
        <label>Day</label>
        <input
          type='number'
          value={Day}
          onChange={(e) => setDay(parseFloat(e.target.value) || 0)}
        />
      </div>

      <div className='time_input'>
        <label>Hour</label>
        <input
          type='number'
          value={Hour}
          onChange={(e) => setHour(parseFloat(e.target.value) || 0)}
        />
      </div>
      <button onClick={handleClick} className='btn btn-md btn-primary'>
        Submit
      </button>
    </div>
  );
}
