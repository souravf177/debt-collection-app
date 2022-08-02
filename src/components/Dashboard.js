import React from "react";

import { Bar } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { webVitals } from "..";

const Dashboard = () => {
  console.log(webVitals);
  console.log(webVitals?.map((_) => _.value));
  return (
    <>
      <div>Dashborad</div>
      <Bar
        data={{
          labels: webVitals?.map((_) => _.name),
          datasets: [
            {
              label: "Core Web Vitals",
              data: webVitals?.map((_) => _.value),
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
              borderColor: "black",
              borderWidth: 2,
            },
          ],
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        }}
        width={600}
        options={{
          maintainAspectRatio: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </>
  );
};

export default Dashboard;
