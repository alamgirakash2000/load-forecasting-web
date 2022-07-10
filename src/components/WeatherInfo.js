import React, { useState } from "react";
import Time from "./Time";
import Barcelona from "./Barcelona";
import Bilbao from "./Bilbao";
import Madrid from "./Madrid";
import Seville from "./Seville";
import Valencia from "./Valencia";
import Axios from "../Axios";

export default function WeatherInfo() {
  const [info, setInfo] = useState({});

  const handleClick = () => {
    // console.log(info);
    Axios.post("/predict", info).then((res) =>
      window.alert(`Predicted Result is ${res.data.message} MW`)
    );
  };

  return (
    <div className='text-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <Time info={info} setInfo={setInfo} />
          </div>
          <div className='col-md-4'>
            <Barcelona info={info} setInfo={setInfo} />
          </div>
          <div className='col-md-4'>
            <Bilbao info={info} setInfo={setInfo} />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-4'>
            <Madrid info={info} setInfo={setInfo} />
          </div>

          <div className='col-md-4'>
            <Seville info={info} setInfo={setInfo} />
          </div>

          <div className='col-md-4'>
            <Valencia info={info} setInfo={setInfo} />
          </div>
        </div>
      </div>

      <button
        onClick={handleClick}
        className='btn btn-lg btn-success forecast__btn my-3'>
        See Forecasted Result
      </button>
    </div>
  );
}
