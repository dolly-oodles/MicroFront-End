import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  scales,
  plugins,
} from "chart.js/auto";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import {useDispatch, useSelector} from "react-redux"

const Label = () =>{

    return(
        <div style={{
            display:"flex", justifyContent:"space-between"
        }}>
            <h3>Total Sales</h3>
            <p style={{
            color:"#aaa"
        }}>Last week</p>
        </div>
    );
};

export const BarGraph = () => {
  const DATA = useSelector(state => state.dataReducer.barGraphData)
 
  const labels = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "",
        data:DATA,
        borderColor: "#aaa",
        backgroundColor: [
          "#aaa",
          "#aaa",
          "#aaa",
          "#aaa",
          "#aaa",
          "#aaa",
          "blue",
          "#aaa",
          "#aaa",
          "#aaa",
          "#aaa",
          "#aaa",
          "#aaa",
        ],
        borderRadius:{
            topLeft:30,
            topRight:30,
            bottomLeft:30,
            bottomRight:30,
        },
        barThickness:15,
        clip:{
            left:5,
            top:1,
            right:-2,
            bottom:-5,
        },
      },
    ],
  };
  const options = {

    scales:{
        x:{
            grid:{
                display:false,
            },
        },
        y:{
            grid:{
                display:false,
            },
        },
    },
    plugins:{
        Tooltip:{
            position:"average",
            yAlign:'bottom',
            backgroundColor:"black",
           
        },
      
          legend:{
            display:false
          },
    },
  };

  return (
    <div style={{width:"90%"}}>
    <Label/>
    <Bar  options={options} data={data} />
  </div>
  );
};
