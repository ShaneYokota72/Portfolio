import React from "react";
import '../App.css';

import { Link } from "react-router-dom";

import mazesearchimg from '../Images/mazesearchres.png';

export default function MazeSearch(props){
    return(
        <div className="projectpopup">
            <div className="projectpopuptop">
                <h1 className="projectpopuptitle">Maze Search</h1>
                <div className="worktopics">
                    <p>C++</p>
                    <p>JavaScript</p>
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
                    <p className="explanationp">Leftside is the maze and the rightside is the fastest route. "*" is the fastest route taken.
                    <br></br>
                    <br></br>
                    S: start position
                    <br></br>
                    F: finish position
                    <br></br>
                    #: wall
                    <br></br>
                    . : open space
                    <br></br>
                    * : open space
                    </p>
                    <img src={mazesearchimg} alt="project explanation" className="explanationimg"></img>
                </div>
                <div className="explanationright">
                    <p className="explanationp">
                    This C++ program solves mazes by finding the fastest possible route from the start position to the end position. The program utilize a Breath First Search algorithm to traverse the maze and ensures the fastest path.
                    <br></br>
                    <br></br>
                    View this project on GitHub: <a className="links" href="https://github.com/ShaneYokota72/Maze-Solver" target="_blank" rel="noreferrer">Maze Search</a>
                    </p>

                </div>
            </div>
        </div>
    )
}