import React from "react";
import '../App.css';

import { Link } from "react-router-dom";

import SportsBetting1 from '../Images/SportsBetting1.png'
import SportsBetting2 from '../Images/SportsBetting2.png'
import LeBronres from '../Images/SportsBettingLeBronres.png'
import Nikolares from '../Images/SportsBettingNikolares.png'

export default function SBProjectpopup(props){
    return(
        <div className="projectpopup">
            <div className="projectpopuptop">
                <h1 className="projectpopuptitle">Sports Betting Helper</h1>
                <div className="worktopics">
                        <p>Python</p>
                        <p>Postman</p>
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
                    <p className="explanationp">Result for LeBron James / Points : 23</p>
                    <img src={SportsBetting1} alt="project explanation" className="explanationimglinreg"></img>
                    <img src={LeBronres} alt="project explanation" className="codingsnippetSBres"></img>
                    <br></br>
                    <p className="explanationp">Result for Nikola Jokic / Assists : 10</p>
                    <img src={SportsBetting2} alt="project explanation" className="explanationimglinreg"></img>
                    <img src={Nikolares} alt="project explanation" className="codingsnippetSBres"></img>
                </div>
                <div className="explanationright">
                    <p className="explanationp">This Program helps users with sports betting after analyzing the past game statistics
                    <br></br>
                    <br></br>
                    This NBA sports betting helper utilizes a <a className="links" href="https://github.com/swar/nba_api">real time dataset</a> of NBA players' performance to assist in making informed betting decisions. By applying linear regression to the player's past 10 game data, the program calculates a regression line. 
                    <br></br>
                    <br></br>
                    It then compares the predicted value at the next game with a provided threshold to suggest whether to bet above, below, or abstain from betting, enabling users to make more data-driven choices in NBA sports betting.
                    <br></br>
                    <br></br>
                    View this project on GitHub: <a className="links" href="https://github.com/ShaneYokota72/SportsBetting-Assist" target="_blank">Sports Betting Helper</a>
                    </p>

                </div>
            </div>
        </div>
    )
}