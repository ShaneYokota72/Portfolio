import React from "react";
import '../App.css';

import { Link } from "react-router-dom";

import taskclear2 from '../Images/taskclear2.png';
import taskclear3 from '../Images/taskclear3.png';

export default function Taskclear(props){
    return(
        <div className="projectpopup">
            <div className="projectpopuptop">
                <h1 className="projectpopuptitle">task.clear</h1>
                <div className="worktopics">
                    <p>React.js</p>
                    <p>Firebase</p>
                    <p>Python</p>
                    <p>JavaScript</p>
                    <p>HTML</p>
                    <p>CSS</p>
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
                    <img src={taskclear2} style={{borderRadius:"1vw", marginBottom:"2vh"}} alt="project explanation" className="explanationimg"></img>
                    <img src={taskclear3} style={{borderRadius:"1vw"}} alt="project explanation" className="explanationimg"></img>
                </div>
                <div className="explanationright">
                    <p className="explanationp">
                        This is to-do app with several other features that helps the user clear out their task faster and more efficiently made for all USC Students to use.
                        The aim of the app is to Maximize the user's potential and minimize the user's workload.
                    <br></br>
                    <br></br>
                        To do this, the app has several features that help the user clear out their tasks faster.
                    <br></br>
                    <br></br>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-1-square" viewBox="0 0 16 16">
                        <path d="M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"/>
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z"/>
                        </svg> The timer feature allows the user to set a timer for each task and the app will keep track of the time spent on each task to provide a detailed analysis.
                    <br></br>
                    <br></br>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-2-square" viewBox="0 0 16 16">
                        <path d="M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z"/>
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z"/>
                        </svg> The analytics feature allows the user to see how much time they have spent on each class tasks and how much time they have spent studying for the past 7 days.
                    <br></br>
                    <br></br>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-3-square" viewBox="0 0 16 16">
                        <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z"/>
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z"/>
                        </svg> The collaboration feature allows the user to share their tasks with other users and work on the same task together.
                    <br></br>
                    <br></br>
                    Visit task.clear: <a className="links" href="https://taskclear.vercel.app" target="_blank" rel="noreferrer">task.clear</a>
                    <br></br>
                    View this project on GitHub: <a className="links" href="https://github.com/ShaneYokota72/task.clear" target="_blank" rel="noreferrer">task.clear</a>
                    </p>

                </div>
            </div>
        </div>
    )
}