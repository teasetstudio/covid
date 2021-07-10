import { Tdata } from "types";

const dataHome = (data: Tdata) => {
  const activeCases = data.totalCases - data.totalRecovered - data.totalDeath;
  const labels = [data.totalRecovered, data.totalDeath, activeCases];

  return {
    labels: ["Recovered", "Death", "Current active cases"],
    datasets: [
      {
        label: "Total World Info",
        data: labels,
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
};

export default dataHome;
