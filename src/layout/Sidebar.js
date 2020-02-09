import React from 'react';
import Menu from '../components/menu';
import { faCreditCard, faCalendar, faDonate, faWallet, faBoxes } from '@fortawesome/free-solid-svg-icons';

import Logo from '../assets/img/Logo.png';

const menuItems = [
    {
        key: "incomes",
        text: "Доходы",
        icon: faCreditCard,
        link: "/incomes"
    },
    {
        key: "expenses",
        text: "Расходы",
        icon: faDonate,
        link: "/expenses"
    },
    {
        key: "plans",
        text: "Планирование",
        icon: faCalendar,
        link: "/plans"
    },
    {
        key: "categories",
        text: "Категории",
        icon: faBoxes,
        link: "/categories"
    },
    {
        key: "budgetaday",
        text: "Бюджет на день",
        icon: faWallet,
        link: "/budgetaday"
    }
];

const Sidebar = (props) => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a className="brand-link">
                <img src={Logo} alt="Logo" className="brand-image img-circle elevation-3" />
                <span className="brand-text">DayBudget</span>
            </a> 
            <div className="sidebar">
                <nav className="mt-2">
                    <Menu menuClass={"nav nav-sidebar"} menuItems={menuItems} />
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
