import React from 'react'
import './scss/header.css'
import {NavLink} from 'react-router-dom'
import {GrApps, GrClose } from "react-icons/gr";

function Header()
{
    
    return(
        <div className="header">
            <div className="lorem">
                <p className="ipsum">
                Lorem Ipsum
                </p>
            </div>
        </div>
    )
}

export default Header