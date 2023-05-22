import React from "react";
import '../App.css';

import { Link } from "react-router-dom";

import SocioMedia1 from '../Images/SocioMedia1.jpg';
import SocioMedia2 from '../Images/SocioMedia2.png';

export default function SMProjectpopup(props){
    return(
        <div className="projectpopup">
            <div className="projectpopuptop">
                <h1 className="projectpopuptitle">Socio-Media</h1>
                <div className="worktopics">
                    <p>AWS</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JS</p>
                    <p>React</p>
                    <p>DynamoDB</p>
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
                    <img src={SocioMedia2} alt="project explanation" className="explanationimg"></img>
                    <br></br>
                    <img src={SocioMedia1} alt="project explanation" className="explanationimg"></img>
                </div>
                <div className="explanationright">
                    <p className="explanationp">This is a Social Media web application created using the React.js. It is a full stack application that allows users to do basic media operation such as create accounts, post, comment, and like posts.
                    <br></br>
                    <br></br>
                    In addition to the basic functionalities, this application also has several features that removes emotions from the application such as minimalistic design and emotion removal from posts and comments.This is done to prevent reality and fantasy unbalance shown in every social media these days.
                    <br></br>
                    <br></br>
                    View this project on GitHub: <a className="links" href="https://github.com/td-usc/socio-media" target="_blank" rel="noreferrer">Socio-Media</a>
                    <br></br>
                    Visit Socio-Media: <a className="links" href="https://socio-media.netlify.app/" target="_blank" rel="noreferrer">Socio-Media</a>
                    </p>

                </div>
            </div>
        </div>
    )
}