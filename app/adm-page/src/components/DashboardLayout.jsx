import React, { useState } from "react";
import SideBar from "./SideBar";
import "../styles/dashboardLayout.css";

const DashboardLayout = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={`dashboard-layout ${isExpanded ? "expanded" : "collapsed"}`}>
      <SideBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div className="main-content">{children}</div>
    </div>
  );
};

export default DashboardLayout;
