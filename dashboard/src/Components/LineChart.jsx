import { Line } from "react-chartjs-2";
import market from "../../images/pie-chart.png";
import prospect from "../../images/prospect.png";
import leads from "../../images/generation.png";
import sales from "../../images/sales.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useSelector } from "react-redux";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Label = () => {
  return (
    <div
      style={{
        display: "block",
      
      }}
    >
     <div
      style={{
        paddingLeft:"20px"
      }}
    >
     <p>Sales Funnel</p>
     </div>
       <div
          style={{
            display: "flex",
            justifyContent:"space-between",
            padding:"0 10px",
            
          }}
        >
        <div style={{
            display: "flex",
            gap:"5px",
           
          }}>
        <img src={market} style={{width:"1.5rem", height:"1.5rem"}}/>
          <p style={{
            fontSize:"15px",
            color:"#aaa"
            
          }}>Total Market</p>
        </div>
        <div style={{
            display: "flex",
            gap:"5px",
            
          }}>
        <img src={prospect} style={{width:"2rem", height:"2rem"}}/>
        <p style={{
            fontSize:"15px",
            color:"#aaa"
            
          }}>Prospects</p>
        </div>
        <div style={{
            display: "flex",
            gap:"5px",
            
          }}>
        <img src={leads} style={{width:"2rem", height:"2rem"}}/>
        <p style={{
            fontSize:"15px",
            color:"#aaa"
            
          }}>Leads</p>
        </div>
         
         <div style={{
            display: "flex",
            gap:"5px",
            
          }}>
         <img src={sales} style={{width:"2rem", height:"2rem"}}/>
         <p style={{
            fontSize:"15px",
            color:"#aaa"
            
          }}>Sales</p>
         </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent:"space-between",
            padding:"0 10px",
            marginTop:"-1.5rem"
          }}
        >
          <h2>&#36;4,562</h2>
          <h2>&#36;2,562</h2>
          <h2>&#36;1,262</h2>
          <h2>&#36;1,000</h2>
        </div>
      </div>

  );
};

export const LineGraph = () => {
  const DATA = useSelector(state => state.dataReducer.lineGraphData)
  const labels = ["", "", "", "", ""];
  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Growth",
        data: DATA,
        borderColor: "#aaa",
        backgroundColor:"#dddddd",
        borderRadius: "2px",
        fill: true,
        tension: 0.4,
        borderDash:[2],
        pointStyle: false,
      },
    ],
  };
  const options = {
    plugins:{
      legend:{
        display:false
      },
    },
    scales: {
      x: {
        grid: {
          drawBorder:false,
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          drawBorder:false,
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <Label />
      <Line options={options} data={data} />
    </div>
  );
};
