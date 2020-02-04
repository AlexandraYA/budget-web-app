import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';


const Layout = (props) => {

    const [isCollapsed, setIsCollapsed] = useState();


    return (
        <div className={"wrapper " + (isCollapsed ? "sidebar-collapse" : "")}>
            <Navbar setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed} />
            <Sidebar />
            <Dashboard />
            <div className="sidebar-overlay"></div>
        </div>
    );
};

export default Layout;
