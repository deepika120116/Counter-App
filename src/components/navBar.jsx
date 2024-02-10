import React, { Component } from 'react';

//const NavBar = (props) => {to restructure this.props
const NavBar = ({ totalCounters }) => {
    console.log("NavBar component is mounted");
    return (
        <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                {/*Navbar <span className="badge badge-secondary badge-pill">{props.totalCounters}</span>
                replacing "this.props by Destructuring*/}
                Navbar <span className="badge badge-secondary badge-pill">{totalCounters}</span>
                {/*Cannot pass "this" when it is a function and props should be passed via arguments*/}
                </a>
            </nav>
    )
}
export default NavBar;