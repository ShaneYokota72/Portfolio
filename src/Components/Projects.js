import React from "react";
import '../App.css'

import taskclearimg from '../Images/taskclear.png'
import Chrommkeyimg from '../Images/Chromakey.jpeg'
import Mazesearchimg from '../Images/Mazesearch.png'
import OCRimg from '../Images/NumScanImage.png'

import Indproj from "./Indproj";

export default function Projects(){
    return(
        <div className="Projectparent" id="projects">
            <div className="projtoprow">
                <div className="projtopleft">
                    <h1 className="Projecttitle">Project Section</h1>
                    <p className="Projdesc">Here you can see some of the projects I've done on my own time. See my <a href="https://github.com/ShaneYokota72" target="_blank" className="githublink">GitHub</a> for more projects in detail. This is also most likely not up to date like most personal websites.</p>
                </div>
                <div className="projtopright" style={{width:"54vw"}}>
                    <h1 className="Projecttitlemostrec">My Latest Project</h1>
                    <div className="projcardmostrec">
                        <div style={{overflow: "hidden"}}>
                            <img src={taskclearimg} alt="taskclearimg" className="projcardimg"></img>
                        </div>
                        <div className="indprojdesc">
                            <h1 className="indprejdesctexth1">Task Clear</h1>
                            <p className="indprejdesctextp">Web Dev / Full Stack Dev</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="projectgal">
                <Indproj projimg={Chrommkeyimg} projname= "ChromaKey" projcat= "Software Development"></Indproj>
                <Indproj projimg={Mazesearchimg} projname= "MazeSearch" projcat= "Software Development"></Indproj>
                <Indproj projimg={OCRimg} projname= "NumberScan" projcat= "Software Development"></Indproj>
            </div>
           
        </div>
    )
}