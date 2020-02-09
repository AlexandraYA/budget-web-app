import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';


const Layout = (props) => {

    const [isCollapsed, setIsCollapsed] = useState();

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={"wrapper " + (isCollapsed ? "sidebar-toggle" : "")}>
            <Navbar setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed} />
            <Sidebar />
            {props.children}
            {isCollapsed && (<div onClick={() => toggleSidebar()} className="sidebar-overlay"></div>)}
        </div>
    );
};

export default Layout;
