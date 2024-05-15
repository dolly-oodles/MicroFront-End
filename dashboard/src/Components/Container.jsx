import React from 'react';
import { GraphsComponent } from "./GraphsComponent";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../css/App.css"
function Container() {
   
  return (
    <>
      <div style={{display:"flex"}}>
        <div style={{width:"20%"}}>  
          <Sidebar />
        </div>
        <div>
          <Navbar />
          <GraphsComponent />
        </div>
      </div>
    </>
  );
}
export default Container;
