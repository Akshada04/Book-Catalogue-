import React, { Component } from 'react';
import '../Header/appHeader.css';
import {Link} from 'react-router-dom'
class Header extends Component {
    render() { 
        return ( 
            <header className="header">
                <div className="headerTitle">
                    <p>Book Catalogue App</p>
                </div>
                <nav className="nav">
                    <ul>
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/Favorites">Favorites</Link></li>
                        <li><Link to="/Classifications">Classification</Link></li>
                    </ul>
                </nav>
            </header>
         );
    }
}
 
export default Header;