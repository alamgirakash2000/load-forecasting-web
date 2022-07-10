import React, { useState } from "react";

const Seville = ({ info, setInfo }) => {
  const [temp_Seville, setTemp_Seville] = useState("");
  const [pressure_Seville, setPressure_Seville] = useState("");
  const [humidity_Seville, setHumidity_Seville] = useState("");
  const [wind_speed_Seville, setWind_speed_Seville] = useState("");

  const handleClick = () => {
    if (temp_Seville < 200 || temp_Seville > 350) {
      window.alert(
        " Temperature of Seville should be between 200 to 350 Kelvin"
      );
      return;
    } else if (pressure_Seville < 500 || pressure_Seville > 1200) {
      window.alert(" Pressure of Seville should be between 500 to 1200 hPa");
      return;
    } else if (humidity_Seville < 5 || humidity_Seville > 101) {
      window.alert(" Humidity of Seville should be between 5 to 100 %");
      return;
    } else if (wind_speed_Seville > 200) {
      window.alert(" Wind Speed of Seville should be between 0 to 200 m/s");
      return;
    }

    let city_info = {
      temp_Seville,
      pressure_Seville,
      humidity_Seville,
      wind_speed_Seville,
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
      <h2 className='city__title text-center'>Seville</h2>

      <div className='city__input'>
        <label>Temperature (K) : </label>
        <input
          type='Number'
          value={temp_Seville}
          onChange={(e) => setTemp_Seville(parseFloat(e.target.value) || 0)}
        />
      </div>

      <div className='city__input'>
        <label>Pressure (hPa) : </label>
        <input
          type='Number'
          value={pressure_Seville}
          onChange={(e) => setPressure_Seville(parseFloat(e.target.value) || 0)}
        />
      </div>

      <div className='city__input'>
        <label>Humidity ( % ) : </label>
        <input
          type='Number'
          value={humidity_Seville}
          onChange={(e) => setHumidity_Seville(parseFloat(e.target.value) || 0)}
        />
      </div>

      <div className='city__input'>
        <label>Wind Speed (m/s)</label>
        <input
          type='Number'
          value={wind_speed_Seville}
          onChange={(e) =>
            setWind_speed_Seville(parseFloat(e.target.value) || 0)
          }
        />
      </div>

      <button onClick={handleClick} className='btn btn-md btn-primary'>
        Submit
      </button>
    </div>
  );
};

export default Seville;
