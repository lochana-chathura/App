import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header className="header">
        <h1 className="header__title">Projects</h1>
        <div >
            <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
            <NavLink to="/menuitem1" activeClassName="is-active" exact={true}>Menu Item1</NavLink>
            <NavLink to="/menuitem2" activeClassName="is-active" exact={true}>Menu Item2</NavLink>
            <NavLink to="/menuitem3" activeClassName="is-active" exact={true}>Menu Item3</NavLink>
            </div>
    </header>
);

export default Header;