import React from "react";
import '../App.css';

import { Link } from "react-router-dom";

import DevMeshDemo1 from '../Images/DevMeshDemo1.png';
import DevMeshDemo2 from '../Images/DevMeshDemo2.png';

export default function DevMesh(props){
    return(
        <div className="projectpopup">
            <div className="projectpopuptop">
                <h1 className="projectpopuptitle">DevMesh</h1>
                <div className="worktopics">
                    <p>React</p>
                    <p>Node.js</p>
                    <p>Express.js</p>
                    <p>MongoDB</p>
                    <p>Socket.IO</p>
                    <p>AWS</p>
                </div>
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="popupX" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </Link>
            </div>
            <div className="explanation">
                <div className="explanationleft">
                    <img src={DevMeshDemo1} alt="project explanation" className="explanationimg"></img>
                    <br></br>
                    <br></br>ß
                    <img src={DevMeshDemo2} alt="project explanation" className="explanationimg"></img>
                </div>
                <div className="explanationright">
                    <p className="explanationp">
                    Devmesh is a Collaborative cloud platform for all developers. It features such as collaborative room create/join, reamtime code editing/messaging, public/private room setting, and free code storage. It is a full stack application built with React, Node.js, Express.js, MongoDB, and Socket.IO, and it is hosted on Vercel and AWS-EC2.
                    <br></br>
                    <br></br>
                    Visit DevMesh: <a className="links" href="https://devmesh.vercel.app/" target="_blank" rel="noreferrer">DevMesh</a>
                    <br></br>
                    View this project on GitHub: <a className="links" href="https://github.com/ShaneYokota72/DevMesh-FrontEnd" target="_blank" rel="noreferrer">DevMesh-Github</a>
                    </p>

                </div>
            </div>
        </div>
    )
}