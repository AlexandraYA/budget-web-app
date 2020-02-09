import React from 'react';
import MenuItem from './menuItem';


const Menu = (props) => {

    const { menuClass, menuItems } = props;

    return (
        <ul className={menuClass} role="menu">
            {menuItems.map(menuItem => {
                return (
                    <MenuItem
                        key={menuItem.key}
                        itemText={menuItem.text}
                        itemIcon={menuItem.icon}
                        itemLink={menuItem.link}
                    />
                );
            })}
        </ul>
    );
}

export default Menu;