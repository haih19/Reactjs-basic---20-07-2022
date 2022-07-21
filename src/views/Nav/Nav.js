import React from "react";
import './nav.scss';
import { Link, NavLink } from "react-router-dom"


class Nav extends React.Component {



    render() {
        return (
            <div class="topnav">
                <NavLink activeClassName="active" exact={true} to="/">Home</NavLink>
                <NavLink to="/todo">Todos</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        )
    }
}

export default Nav;