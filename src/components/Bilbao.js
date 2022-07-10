import React, { useState } from "react";

const Bilbao = ({ info, setInfo }) => {
  const [temp_Bilbao, setTemp_Bilbao] = useState("");
  const [pressure_Bilbao, setPressure_Bilbao] = useState("");
  const [humidity_Bilbao, setHumidity_Bilbao] = useState("");
  const [wind_speed_Bilbao, setWind_speed_Bilbao] = useState("");

  const handleClick = () => {
    if (temp_Bilbao < 200 || temp_Bilbao > 350) {
      window.alert(
        " Temperature of Bilbao should be between 200 to 350 Kelvin"
      );
      return;
    } else if (pressure_Bilbao < 500 || pressure_Bilbao > 1200) {
      window.alert(" Pressure of Bilbao should be between 500 to 1200 hPa");
      return;
    } else if (humidity_Bilbao < 5 || humidity_Bilbao > 101) {
      window.alert(" Humidity of Bilbao should be between 5 to 100 %");
      return;
    } else if (wind_speed_Bilbao > 200) {
      window.alert(" Wind Speed of Bilbao should be between 0 to 200 m/s");
      return;
    }

    let city_info = {
      temp_Bilbao,
      pressure_Bilbao,
      humidity_Bilbao,
      wind_speed_Bilbao,
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
      <h2 className='city__title text-center'>Bilbao</h2>

      <div className='city__input'>
        <label>Temperature (K) : </label>
        <input
          type='Number'
          value={temp_Bilbao}
          onChange={(e) => setTemp_Bilbao(parseFloat(e.target.value) || 0)}
        />
      </div>

      <div className='city__input'>
        <label>Pressure (hPa) : </label>
        <input
          type='Number'
          value={pressure_Bilbao}
          onChange={(e) => setPressure_Bilbao(parseFloat(e.target.value) || 0)}
        />
      </div>

      <div className='city__input'>
        <label>Humidity ( % ) : </label>
        <input
          type='Number'
          value={humidity_Bilbao}
          onChange={(e) => setHumidity_Bilbao(parseFloat(e.target.value) || 0)}
        />
      </div>

      <div className='city__input'>
        <label>Wind Speed (m/s)</label>
        <input
          type='Number'
          value={wind_speed_Bilbao}
          onChange={(e) =>
            setWind_speed_Bilbao(parseFloat(e.target.value) || 0)
          }
        />
      </div>

      <button onClick={handleClick} className='btn btn-md btn-primary'>
        Submit
      </button>
    </div>
  );
};

export default Bilbao;
