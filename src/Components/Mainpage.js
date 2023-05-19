import React from "react"
import '../App.css';
import headerimg from '../Images/Shane Yokota Header Image.png'

export default function Mainpage(){
    return(
        <div className="mainparent">
            <div className="sun1"></div>
            <div className="sun2"></div>
            <img className="headerimg" alt="Shane_Header_Logo" src={headerimg}></img>
            <h1 className="mainmyname">SHANE YOKOTA</h1>
            <h1 className="maindescription">STUDENT, SOFTWARE ENGINEER, FULL STACK DEVELOPER</h1>
        </div>
    )
}