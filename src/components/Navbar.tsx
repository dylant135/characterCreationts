import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <h1>Character Creation</h1>
            <div className="navContainer">
                <div><NavLink className='navbtns' to='/'>Characters</NavLink></div>
                <div><NavLink className='navbtns' to='/creation'>Character Creation</NavLink></div>
                <div><NavLink className='navbtns' to='/clans'>Clans</NavLink></div>
            </div>
        </nav>
    )
}