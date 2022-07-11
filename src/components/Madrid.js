import React, { useState } from "react";

const Madrid = ({ info, setInfo }) => {
  const [temp_Madrid, setTemp_Madrid] = useState("");
  const [pressure_Madrid, setPressure_Madrid] = useState("");
  const [humidity_Madrid, setHumidity_Madrid] = useState("");
  const [wind_speed_Madrid, setWind_speed_Madrid] = useState("");

  const handleClick = () => {
    if (temp_Madrid < 200 || temp_Madrid > 350) {
      window.alert(
        " Temperature of Madrid should be between 200 to 350 Kelvin"
      );
      return;
    } else if (pressure_Madrid < 500 || pressure_Madrid > 1200) {
      window.alert(" Pressure of Madrid should be between 500 to 1200 hPa");
      return;
    } else if (humidity_Madrid < 5 || humidity_Madrid > 101) {
      window.alert(" Humidity of Madrid should be between 5 to 100 %");
      return;
    } else if (wind_speed_Madrid > 200) {
      window.alert(" Wind Speed of Madrid should be between 0 to 200 m/s");
      return;
    }

    let city_info = {
      temp_Madrid,
      pressure_Madrid,
      humidity_Madrid,
      wind_speed_Madrid,
    };

    let newInfo = {
      ...info,
      ...city_info,
    };
    setInfo(newInfo);
    console.log(city_info);
  };

  // Setting Button
  let button;
  if (
    info?.temp_Madrid === temp_Madrid &&
    info?.pressure_Madrid === pressure_Madrid &&
    info?.humidity_Madrid === humidity_Madrid &&
    info?.wind_speed_Madrid === wind_speed_Madrid
  ) {
    button = (
      <button disabled className='btn btn-md btn-secondary'>
        SUBMITTED
      </button>
    );
  } else {
    button = (
      <button onClick={handleClick} className='btn btn-md btn-primary'>
        SUBMIT
      </button>
    );
  }

  return (
    <div className='city card'>
      <h2 className='city__title text-center'>Madrid</h2>

      <div className='city__input'>
        <label>Temperature (K) : </label>
        <input
          type='Number'
          value={temp_Madrid}
          onChange={(e) => setTemp_Madrid(parseFloat(e.target.value) || 0)}
        />
      </div>

      <div className='city__input'>
        <label>Pressure (hPa) : </label>
        <input
          type='Number'
          value={pressure_Madrid}
          onChange={(e) => setPressure_Madrid(parseFloat(e.target.value) || 0)}
        />
      </div>

      <div className='city__input'>
        <label>Humidity ( % ) : </label>
        <input
          type='Number'
          value={humidity_Madrid}
          onChange={(e) => setHumidity_Madrid(parseFloat(e.target.value) || 0)}
        />
      </div>

      <div className='city__input'>
        <label>Wind Speed (m/s)</label>
        <input
          type='Number'
          value={wind_speed_Madrid}
          onChange={(e) =>
            setWind_speed_Madrid(parseFloat(e.target.value) || 0)
          }
        />
      </div>

      {button}
    </div>
  );
};

export default Madrid;
