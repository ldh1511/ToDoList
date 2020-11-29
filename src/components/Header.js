import React, { Component } from 'react';
import img from '../Image.png'
class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-container">
                    <div className="logo">
                        <img src={img} alt="logo"></img>
                    </div>
                    <div className="nav-menu " onClick={()=>{this.props.change()}}>
                        <i class="fas fa-bars"></i>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;