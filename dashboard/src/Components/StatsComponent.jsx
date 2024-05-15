import { useSelector } from "react-redux"
import "../css/stats.css"
import ZigzagLineChart from "./StatsLineGraph"

export const StatsComponent = ()=>{
    const revenues= useSelector(state=>state.dataReducer.revenueValue);
    const visitors = useSelector(state=>state.dataReducer.visitorValue);
    const transactions = useSelector(state=>state.dataReducer.transactionValue);
    const products = useSelector(state=>state.dataReducer.ProductValue);

    return(
        <div className="stats-container">
            <div className="revenue-section">
            <div className="data-section">
                <h3>Total Revenue</h3>
                <h1>&#36;{revenues}</h1>
                <div className="details">
                <p><span>+12%</span></p>
                <p>VS preview</p>
                <p>28 days</p>
                </div>
                </div>
                <div className="stats-graph">
                   <ZigzagLineChart color={"rgba(4, 153, 4, 0.73)"}/>
                </div>
               
            </div>
            <div className="visitors-section">
            <div className="data-section">
                <h3>Total Visitors</h3>
                <h1>&#36;{visitors}</h1>
                <div className="details">
                <p><span>+4%</span></p>
                <p>VS preview</p>
                <p>28 days</p>
                </div>
                </div>
                <div className="stats-graph">
                <ZigzagLineChart color={"rgba(4, 153, 4, 0.73)"}/>
                </div>
               
            </div>
            <div className="transactions-section">
            <div className="data-section">
                <h3>Total Transactions</h3>
                <h1>&#36;{transactions}</h1>
                <div className="details">
                <p><span>-0.89%</span></p>
                <p>VS preview</p>
                <p>28 days</p>
                </div>
                </div>
                <div className="stats-graph">
                <ZigzagLineChart color={"red"}/>
                </div>
               
            </div>
            <div className="products-section">
            <div className="data-section">
                <h3>Total Products</h3>
                <h1>&#36;{products}</h1>
                <div className="details">
                <p><span>+2%</span></p>
                <p>VS preview</p>
                <p>28 days</p>
                </div>
                </div>
                <div className="stats-graph">
                <ZigzagLineChart color={"rgba(4, 153, 4, 0.73)"}/>
                </div>              
            </div>
        </div>
    )
}