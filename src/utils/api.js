import axios from "axios";

const api = axios.create({
  baseURL: "https://covid-19-statistics.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "6286d2c783msh15f1145015e6321p1d97dejsn9a7781ea9c2e",
    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
  },
});

export default api;
