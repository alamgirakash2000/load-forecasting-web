import React, { useState } from "react";

const Barcelona = ({ info, setInfo }) => {
  const [temp_Barcelona, setTemp_Barcelona] = useState("");
  const [pressure_Barcelona, setPressure_Barcelona] = useState("");
  const [humidity_Barcelona, setHumidity_Barcelona] = useState("");
  const [wind_speed_Barcelona, setWind_speed_Barcelona] = useState("");

  const handleClick = () => {
    if (temp_Barcelona < 200 || temp_Barcelona > 350) {
      window.alert(
        " Temperature of Barcelona should be between 200 to 350 Kelvin"
      );
      return;
    } else if (pressure_Barcelona < 500 || pressure_Barcelona > 1200) {
      window.alert(" Pressure of Barcelona should be between 500 to 1200 hPa");
      return;
    } else if (humidity_Barcelona < 5 || humidity_Barcelona > 101) {
      window.alert(" Humidity of Barcelona should be between 5 to 100 %");
      return;
    } else if (wind_speed_Barcelona > 200) {
      window.alert(" Wind Speed of Barcelona should be between 0 to 200 m/s");
      return;
    }

    let city_info = {
      temp_Barcelona,
      pressure_Barcelona,
      humidity_Barcelona,
      wind_speed_Barcelona,
    };

    let newInfo = {
      ...info,
      ...city_info,
    };
    setInfo(newInfo);
    console.log(city_info);
  };

  return (
    <div className='city card'>
      <h2 className='city__title text-center'>Barcelona</h2>

      <div className='city__input'>
        <label>Temperature (K) : </label>
        <input
          type='Number'
          value={temp_Barcelona}
          onChange={(e) => setTemp_Barcelona(parseFloat(e.target.value) || 0)}
        />
      </div>

      <div className='city__input'>
        <label>Pressure (hPa) : </label>
        <input
          type='Number'
          value={pressure_Barcelona}
          onChange={(e) =>
            setPressure_Barcelona(parseFloat(e.target.value) || 0)
          }
        />
      </div>

      <div className='city__input'>
        <label>Humidity ( % ) : </label>
        <input
          type='Number'
          value={humidity_Barcelona}
          onChange={(e) =>
            setHumidity_Barcelona(parseFloat(e.target.value) || 0)
          }
        />
      </div>

      <div className='city__input'>
        <label>Wind Speed (m/s)</label>
        <input
          type='Number'
          value={wind_speed_Barcelona}
          onChange={(e) =>
            setWind_speed_Barcelona(parseFloat(e.target.value) || 0)
          }
        />
      </div>

      <button onClick={handleClick} className='btn btn-md btn-primary'>
        Submit
      </button>
    </div>
  );
};

export default Barcelona;
