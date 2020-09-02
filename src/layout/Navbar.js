import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


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
                    <NavLink
                        to={"/"}
                        exact
                        className="nav-link"
                        activeClassName={'active'}
                    >
                        Статистика
                    </NavLink>
                </li>
                <li className="nav-item">
                    <span className="badge badge-large bg-success">1200 руб./день</span>
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
