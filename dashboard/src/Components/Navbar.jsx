import React from "react";
import "../css/navbar.css"
import { TiMessage } from "react-icons/ti";
import { IoMdNotificationsOutline } from "react-icons/io";
function Navbar(){
    return(
        <>
            <div className="nav">
                <div className="main">
              <div className="main-left">
              <div className="main_title">
                    <h1>Analytics</h1>
                </div>
                </div>
               <div className="main-right">
               <div className="main_search">
                    <input type="search" name="search" id="search" placeholder="Search"/>
                </div>
                <div className="main-icons">
                <TiMessage size={"25px"}/>
                <IoMdNotificationsOutline size={"25px"}/>
                </div>
               </div>
               </div>
            </div>
        </>
    )
}

export default Navbar;