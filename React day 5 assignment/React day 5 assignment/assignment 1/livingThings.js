import React from 'react';
import { Link, useNavigate } from "react-router-dom";
const LivingThings = ()=> {
    const navigate = useNavigate();
    const handleClick = ()=> navigate("/");

    return(
        <nav className="navbar navbar-inverse">
        <ul className='nav navbar-nav'>
            <li>
                <Link to="/animals">Animal</Link>
            </li>
             <li>
                <Link to="/users">Users</Link>
            </li>
             <li>
                <Link to="/employees">Employees</Link>
            </li>
            <li>
                <Link to="/birds">Birds</Link>
            </li>
             <li>
                <button className='btn' onClick={handleClick}>
                    Home
                </button>
            </li>
        </ul>
        </nav>
    )
}
export default LivingThings;