import React, { useState } from "react";

const Valencia = ({ info, setInfo }) => {
  const [temp_Valencia, setTemp_Valencia] = useState("");
  const [pressure_Valencia, setPressure_Valencia] = useState("");
  const [humidity_Valencia, setHumidity_Valencia] = useState("");
  const [wind_speed_Valencia, setWind_speed_Valencia] = useState("");

  const handleClick = () => {
    if (temp_Valencia < 200 || temp_Valencia > 350) {
      window.alert(
        " Temperature of Valencia should be between 200 to 350 Kelvin"
      );
      return;
    } else if (pressure_Valencia < 500 || pressure_Valencia > 1200) {
      window.alert(" Pressure of Valencia should be between 500 to 1200 hPa");
      return;
    } else if (humidity_Valencia < 5 || humidity_Valencia > 101) {
      window.alert(" Humidity of Valencia should be between 5 to 100 %");
      return;
    } else if (wind_speed_Valencia > 200) {
      window.alert(" Wind Speed of Valencia should be between 0 to 200 m/s");
      return;
    }

    let city_info = {
      temp_Valencia,
      pressure_Valencia,
      humidity_Valencia,
      wind_speed_Valencia,
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
      <h2 className='city__title text-center'>Valencia</h2>

      <div className='city__input'>
        <label>Temperature (K) : </label>
        <input
          type='Number'
          value={temp_Valencia}
          onChange={(e) => setTemp_Valencia(parseFloat(e.target.value) || 0)}
        />
      </div>

      <div className='city__input'>
        <label>Pressure (hPa) : </label>
        <input
          type='Number'
          value={pressure_Valencia}
          onChange={(e) =>
            setPressure_Valencia(parseFloat(e.target.value) || 0)
          }
        />
      </div>

      <div className='city__input'>
        <label>Humidity ( % ) : </label>
        <input
          type='Number'
          value={humidity_Valencia}
          onChange={(e) =>
            setHumidity_Valencia(parseFloat(e.target.value) || 0)
          }
        />
      </div>

      <div className='city__input'>
        <label>Wind Speed (m/s)</label>
        <input
          type='Number'
          value={wind_speed_Valencia}
          onChange={(e) =>
            setWind_speed_Valencia(parseFloat(e.target.value) || 0)
          }
        />
      </div>

      <button onClick={handleClick} className='btn btn-md btn-primary'>
        Submit
      </button>
    </div>
  );
};

export default Valencia;
