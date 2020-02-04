import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCalendar, faChartPie } from '@fortawesome/free-solid-svg-icons';


const Sidebar = (props) => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a className="brand-link">
                <img src="assets/img/AdminLTELogo.png" alt="Logo" class="brand-image img-circle elevation-3" />
                <span class="brand-text">AdminLTE 3</span>
            </a>
            <div className="sidebar">
                <nav className="mt-2">
                    <ul className="nav nav-sidebar" role="menu">
                        
                <li className="nav-item">                            
                                    <a href="#" className="nav-link active">
                                <FontAwesomeIcon icon={faCircle} />
                                        <p>Доходы</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                <FontAwesomeIcon icon={faCircle} />
                                        <p>Расходы</p>
                                    </a>
                                </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                                <FontAwesomeIcon icon={faCalendar} />
                            <p>Планирование</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                                <FontAwesomeIcon icon={faChartPie} />
                            <p>Категории</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                                <FontAwesomeIcon icon={faCalendar} />
                            <p>Бюджет на день</p>
                        </a>
                    </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
