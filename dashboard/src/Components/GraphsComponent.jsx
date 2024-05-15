import React from 'react';
import { BarGraph } from "./BarChart"
import { StatsComponent } from "./StatsComponent"
import {LineGraph} from "./LineChart";
import "../css/graphsComp.css";
import { DoughnutGraph } from "./DoughnutGraph";

export const GraphsComponent=()=>{
    return(
       <div className="grid-container">
        <div className="bargraph-section">
        <BarGraph/>
        </div>
        <div className="stats-section">
        <StatsComponent/>
        </div>
        <div className="linegraph-section">
        <LineGraph/>
        </div>
        <div className="doughnutgraph-section">
            <DoughnutGraph/>
        </div>
        </div>
    )
}