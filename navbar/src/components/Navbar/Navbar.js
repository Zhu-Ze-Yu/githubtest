import React, { Component } from 'react';
import { Button } from '../Button';
import { MenuItems } from "./MenuItems"
import './Navbar.css'

class Navbar extends Component {
// this defines the start state of an icon
    state = { clicked: false}
// This for the menu bar to change from bars to x when clicked and vice versa. 
// This says what happens when something is clicked change the state to what
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
// when doing map, it will loop through everything in MenuItems so className must be item.cName and not MenuItems.cName
    render() {
        return(
            <nav className="NavbarItems"> 
                <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                 
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Sign Up</Button>
            </nav>
        )
    }
}

export default Navbar