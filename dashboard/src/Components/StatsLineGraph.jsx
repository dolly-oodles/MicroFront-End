
import React from "react";
import { Line } from "react-chartjs-2";

const ZigzagLineChart = ({color}) => {
  const labels = ["", "", "", "", ""];
  const options = {
    plugins:{
      legend:{
        display:false
      },
    },
    scales: {
        x: {
            grid:{
                 display:false,
                 
                 },
                 ticks: {
                  display: false,
                },
          },
          y: {
            grid:{
                 display:false,
                 },
                 ticks: {
                  display: false,
                },
          },
      xAxes: [
        {
            gridLines:{
                display:false
            },
          stacked: true,
          ticks: {
            stepSize: 0.2, 
            display:false,
          },
        },
      ],
      yAxes: [
        {
        
        gridLines:{
            display:false
        },
        stacked: true,
    }
      ],
    },
    elements: {
      line: {
        stepWidth:1, // Adjust stepWidth for desired zig-zag effect
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: "",
        data:[3,150,2,200,10],
        fill: false,
        borderColor:color ,
        // borderColor: "rgba(4, 153, 4, 0.73)",
        tension:0.2,
        pointStyle: false,
      }, 
      
    ],
  };

  return (
    <div style={{width:"100%"}}>
  <Line data={data} options={options} />
  </div>
  );
};

export default ZigzagLineChart;
