import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);
const Label = () =>{
  return(
  <div style={{
    display:"flex", flexDirection:"column",
  }}>
    <div style={{
   lineHeight:"8px"
  }}>
      <h3>Sales by Category</h3> 
      <p>Clothing (25%)</p>
      <p style={{color:"#aaa", fontSize:"0.8rem"}}>1,348 Category Products</p>
      <p>Body Fit (35%)</p>
      <p style={{color:"#aaa", fontSize:"0.8rem"}}>1,348 Category Products</p>
      <p>Sportswear (40%)</p>
      <p style={{color:"#aaa", fontSize:"0.8rem"}}>1,348 Category Products</p>
    </div>
  </div>
  );
}
export const DoughnutGraph = () => {
  const DATA = useSelector(state => state.dataReducer.doughnutGraphData)
  const options = {
    plugins:{
      legend:{
        display:false
      },

    },
  }
  const data = {
    labels: ["Sportswear(40%)", "Body Fit(35%)", "Clothing(25%)"],
    datasets: [
      {
        label: "Sales By Category",
        data: DATA,
        backgroundColor: ["#aaa", "#aaa", "blue"],
        hoverOffset: 5,
        rotation:300
      },
    ],
  };
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
    <Label/>
    <div style={{width:"50%" , padding:"50px"}}>
   <Doughnut data={data} options={options} />
   </div>
   </div>

  );
};
