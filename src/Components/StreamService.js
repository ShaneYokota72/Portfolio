import React from "react";
import '../App.css';

import { Link } from "react-router-dom";

import StreamServiceimg from '../Images/StreamService.png';
import StreamServiceimg2 from '../Images/StreamServicedataset.png';

export default function StreamService(props){
    return(
        <div className="projectpopup">
            <div className="projectpopuptop">
                <h1 className="projectpopuptitle">Streaming Service</h1>
                <div className="worktopics">
                    <p>C++</p>
                    <p>C</p>
                    <p>Json</p>
                    <p>Makefile</p>
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
                    <p className="explanationp">Terminal Image</p>
                    <img src={StreamServiceimg} alt="project explanation" className="explanationimg"></img>
                    <p className="explanationp">Dataset used for output above</p>
                    <img src={StreamServiceimg2} alt="project explanation" className="explanationimg"></img>
                </div>
                <div className="explanationright">
                    <p className="explanationp">This is a Streaming Service with a fictional users and contents(movies, episodes, and series).
                    <br></br>
                    <br></br>
                    With these datasets, the program can do operations such as login, logout, view history, search, watch, review, and suggeset similar content. 
                    <br></br>
                    <br></br>
                    During the suggestion process, the program utilizes bipartite graph created with all users and content data to analyze the user's history and suggest similar content.
                    <br></br>
                    <br></br>
                    View this project on GitHub: <a className="links" href="https://github.com/ShaneYokota72/Streaming-Service" target="_blank">Streaming Service</a>
                    </p>

                </div>
            </div>
        </div>
    )
}