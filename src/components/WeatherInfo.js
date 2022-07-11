import React, { useState } from "react";
import Time from "./Time";
import Barcelona from "./Barcelona";
import Bilbao from "./Bilbao";
import Madrid from "./Madrid";
import Seville from "./Seville";
import Valencia from "./Valencia";
import Axios from "../Axios";
import ResultModal from "./ResultModal";

export default function WeatherInfo() {
  const [info, setInfo] = useState({});
  const [result, setResult] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    Axios.post("/predict", info).then((res) => setResult(res.data.message));
    setShowModal(true);
  };

  let submitButton;
  if (
    info?.Month &&
    info?.temp_Barcelona &&
    info?.temp_Bilbao &&
    info?.temp_Madrid &&
    info?.temp_Seville &&
    info?.temp_Valencia
  ) {
    submitButton = (
      <button
        onClick={handleClick}
        className='btn btn-lg btn-success forecast__btn my-3'>
        See Forecasted Result
      </button>
    );
  } else {
    submitButton = (
      <button disabled className='btn btn-lg btn-secondary forecast__btn my-3'>
        See Forecasted Result
      </button>
    );
  }

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
      {showModal && <ResultModal result={result} setShowModal={setShowModal} />}
      {submitButton}
    </div>
  );
}
