import React from 'react'
import './scss/index.css'
import {NavLink} from 'react-router-dom'
import Items from '../items/items'
function Index()
{
    return(
        <div className="index">
            <div className="top">
                <div className="menu">
                    <li><NavLink exact activeClassName="active" to="/">About</NavLink></li>
                    <li><NavLink activeClassName="re" to="/">Services</NavLink></li>
                    <li><NavLink activeClassName="re" to="/">Cuisine</NavLink></li>
                    <li><NavLink activeClassName="re" to="/">Gallery</NavLink></li>
                    <li><NavLink activeClassName="re" to="/">Contact</NavLink></li>
                    <li><NavLink activeClassName="re" to="/">Book</NavLink></li>
                    <div className="cart">
                        <p>
                            Cart
                        </p>
                    </div>
                </div>
                
                <div className="content">
                    <p className="what">
                    What are you having for Lunch?
                    </p>
                    <Items/>
                </div>
                <div className="content-1">
                    <p className="small">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <p className="underline">__________</p>
                </div>
            </div>
           
        </div>
    )
}

export default Index