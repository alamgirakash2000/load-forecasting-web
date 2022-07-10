import { useState } from "react";
import "./App.scss";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [info, setInfo] = useState({});

  return (
    <div className='App'>
      <h1 className='text-center py-4'>
        Hourly Load Consumption Forecasting Using Weather and Time info
      </h1>
      <WeatherInfo info={info} setInfo={setInfo} />
    </div>
  );
}

export default App;
