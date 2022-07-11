import { useState } from "react";
import "./App.scss";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [info, setInfo] = useState({});

  return (
    <div className='App'>
      <div className='app__overlay'>
        <div className='d-none'>
          <img src='%PUBLIC_URL%/bg.jpg' alt='Load Consumption Forecasting' />
        </div>
        <h1 className='text-center py-4'>
          Hourly Load Consumption Forecasting Using Weather and Time info
        </h1>
        <WeatherInfo info={info} setInfo={setInfo} />
      </div>
    </div>
  );
}

export default App;
