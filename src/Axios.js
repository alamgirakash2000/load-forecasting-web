import axios from "axios";
const instance = axios.create({
  baseURL: "https://load-consumption-forecasting.herokuapp.com",
});
export default instance;
