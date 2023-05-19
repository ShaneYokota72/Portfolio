import React from "react";
import '../App.css';
import Shaneimg from '../Images/ShaneYokota.png'

export default function Aboutme(){
    return(
        <div className="aboutmeparent" id="aboutme">
            <div style={{width: '45vw'}}>
                <h1 className="aboutmetext">About Me</h1>
                <img src={Shaneimg} alt="Shane_Image" className="shaneimg"></img>
            </div>
            <div style={{width: '45vw'}}>
                <p className="aboutmedescription">I'm Shane. Currently a Sophomore at the University of Southern California studying Computer Science. <br></br><br></br>My interests include software design and development, web development, artificial intelligence, and machine learning.
                <br></br><br></br>
                I'm passionate about problem-solving and coding, always up for the adventure of tackling complex issues and exploring new technologies. With my adaptability and drive, I confidently take on diverse projects, making meaningful contributions along the way.</p>
            </div>
        </div>
    )
}