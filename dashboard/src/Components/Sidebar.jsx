import React from "react";
import { TiMessage } from "react-icons/ti";
import { IoMdNotificationsOutline } from "react-icons/io";
import { SiPlausibleanalytics } from "react-icons/si";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { LuWallet } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
function Sidebar(){
    return(
        <>
            <div style={{height:"100%",borderTopLeftRadius:"25px",backgroundColor:"black", padding:"10px"}}>
              
                <div className="main-icons" style={{ color:"white",display:"flex", flexDirection:"column", justifyContent:"space-around", gap:"2.5rem", alignItems:"center"}}>
                <SiPlausibleanalytics size={"3rem"} />
                <MdOutlineDashboardCustomize size={"1.6rem"}/>
                <LuWallet size={"1.6rem"} />
                <TiMessage size={"1.6rem"} />
                <IoMdNotificationsOutline size={"1.6rem"}/>
                <MdOutlineSettings size={"1.6rem"}/>
                </div>
               
            </div>
        </>
    )
}

export default Sidebar;