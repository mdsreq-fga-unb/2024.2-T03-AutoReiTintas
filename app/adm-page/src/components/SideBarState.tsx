import React, { useState } from "react";
import seta from '../assets/images/seta.png';
import SideBar from "./SideBar";

const SideBarState = () =>{
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    
    
    return(
        <div style={{display: 'flex', position: 'fixed'}}>
            {sidebar && <SideBar active={setSidebar}/>}
            <div className="seta-container">
            <img src={seta} className="seta" style={{ transform: `scaleX(${sidebar ? 1 : -1})` }} onClick={showSidebar}/>
            </div>
        </div>
    );

}

export default SideBarState