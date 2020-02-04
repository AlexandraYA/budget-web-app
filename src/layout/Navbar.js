import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faThLarge } from '@fortawesome/free-solid-svg-icons';


const Navbar = (props) => {
    
    const toggleSidebar = () => {
        props.setIsCollapsed(!props.isCollapsed );
    };


    return (
        <div className="main-header navbar navbar-white">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" onClick={() => toggleSidebar()} href="#"><FontAwesomeIcon icon={faBars} /></a>
                </li>
                <li className="nav-item">
                    <a href="index3.html" className="nav-link">Статистика</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Доходы</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Расходы</a>
                </li>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#"><FontAwesomeIcon icon={faThLarge} /></a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
