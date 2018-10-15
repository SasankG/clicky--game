import React from "react";

const NavBar = (props) => (

    <nav className="navbar navbar-inverse">
        <span className='navbar-brand'> Clicky Game</span>
        <span className="text-center">{props.message}</span>
        <span className = "navbar-text">
            Score: <span>{props.correct}</span>
        </span>
    </nav>

)

export default NavBar;