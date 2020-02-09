import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const MenuItem = (props) => {

    const { itemText, itemIcon, itemLink } = props;

    return (
        <li className="nav-item">
            <NavLink
                to={itemLink}
                exact
                className="nav-link"
                activeClassName={'active'}
            >
                <FontAwesomeIcon icon={itemIcon} />
                <p>{itemText}</p> 
            </NavLink>
        </li>
    );
}

export default MenuItem;