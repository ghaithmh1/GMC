import React from 'react';
import './App.css';

const Header = () => {
    return (
        <header className="header_class">
            <img className="FullLogo" src="./icons/FullLogo.png" alt="Logo1" />
            <nav className="nav">
                <a style={{ color: 'rgb(67, 191, 165)' }} className="nav_items" href="#AboutUs">About us</a>
                <a className="nav_items" href="#Carrer">Career</a>
                {/* Begin dropdown_element */}
                <div className="dropdown_element">
                    <a className="dropbtn" href="#Departments">Departments</a>
                    <div className="dropdown_element_items">
                        <a className="dropdown_element_item1" href="#">Marketing & PR</a>
                        <a className="dropdown_element_item2" href="#">Customer Success & Sales</a>
                        <a className="dropdown_element_item3" href="#">IT, Product, Data</a>
                        <a className="dropdown_element_item4" href="#">Finance & Administration</a>
                        <a className="dropdown_element_item5" href="#">HR & More</a>
                    </div>
                </div>
                {/* End dropdown_element */}
            </nav>
        </header>
    );
}

export default Header;
