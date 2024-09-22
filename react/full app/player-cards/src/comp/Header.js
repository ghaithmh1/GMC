import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header className="header_class">
            <nav className="nav">
                <Link className="nav_items" to="/">Cards</Link>
                {/* Begin dropdown_element */}
                <div className="dropdown_element">
                    <span className="dropbtn">Admin</span>
                    <div className="dropdown_element_items">
                        <Link className="dropdown_element_item1" to="/add">Add</Link>
                        <Link className="dropdown_element_item2" to="/update">Update</Link>
                        <Link className="dropdown_element_item3" to="/delete">Delete</Link>
                    </div>
                </div>
                {/* End dropdown_element */}
            </nav>
        </header>
    );
}

export default Header;
