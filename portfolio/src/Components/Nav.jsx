import React from 'react'
import {Link } from "react-router-dom";

const Nav = () => {

    return (
        <div className="navBar">
            <div className="homeButton">
            <Link to = "/">Mumtaz Fatima</Link>
            </div>

            <div className="navOptions">
                <a href = "#intro">About</a>
                <a href = "#experience">Experience</a>
                <a href = "#blog">Blog</a>
                <a href = "#contact">Contact</a>
            </div>

        </div>
    )
  }
  
  export default Nav