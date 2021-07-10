import axios from "axios";

// transform functions
function toNumber(num: string) {
  if (!num || num === "") {
    return null;
  }
  return +num.replace(/[^+\d]/g, "");
}

type TdataNoTransform = { [key: string]: string };

function transorm(country: TdataNoTransform) {
  return {
    activeCases: toNumber(country["Active Cases_text"]),
    country: country.Country_text,
    lastUpdate: country["Last Update"],
    newCases: toNumber(country["New Cases_text"]),
    newDeath: toNumber(country["New Deaths_text"]),
    totalCases: toNumber(country["Total Cases_text"]),
    totalDeath: toNumber(country["Total Deaths_text"]),
    totalRecovered: toNumber(country["Total Recovered_text"]),
  };
}

const instance = axios.create({
  baseURL: "https://covid-19-tracking.p.rapidapi.com/v1",
  headers: {
    "x-rapidapi-key": "4b5ed93cf1msh844210117913291p1496afjsn5b7267b3f533",
    "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com",
    useQueryString: true,
  },
  transformResponse: [
    (data) => {
      return JSON.parse(data).map((i: TdataNoTransform) => transorm(i));
    },
  ],
});

const CountriesApi = {
  getAll() {
    return instance.get("");
  },
};

export default CountriesApi;
