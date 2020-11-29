import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class Menu extends Component {
    render() {
        let content="content-left";
        if(this.props.menu===true){
            content=content+' menu-active'
        }
        return (
            <div className={content}>
                <ul>
                    <NavLink to="/" className="li">
                        <div className="menu-icon">
                            <i className="fas fa-border-all" />
                        </div> All
                    </NavLink>
                    <NavLink to="/today" className="li">
                        <div className="menu-icon">
                            <i className="fas fa-calendar-alt" />
                        </div> Today
                    </NavLink>
                    <NavLink to="/starred" className="li">
                        <div className="menu-icon">
                            <i className="fas fa-star" />
                        </div> Starred
                    </NavLink>
                    <NavLink to="/done" className="li">
                        <div className="menu-icon">
                            <i className="fas fa-clock" />
                        </div> Done
                        </NavLink>
                </ul>
                <h3>Categories</h3>
                <ul>
                    <NavLink to="/home" className="li">
                        <div className="menu-icon">
                            <i className="far fa-circle" />
                        </div> Home
                    </NavLink>
                    <NavLink to="/work" className="li">
                        <div className="menu-icon">
                            <i className="far fa-circle" />
                        </div> Work
                    </NavLink>
                    <NavLink to="/study" className="li">
                        <div className="menu-icon">
                            <i className="far fa-circle" />
                        </div> Study
                    </NavLink>
                    <NavLink to="/other" className="li">
                        <div className="menu-icon">
                            <i className="far fa-circle" />
                        </div> Other
                    </NavLink>
                </ul>
            </div>
        );
    }
}

export default Menu;