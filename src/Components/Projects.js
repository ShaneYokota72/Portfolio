import React from "react";
import '../App.css'

import taskclearimg from '../Images/taskclear.png'
import Chrommkeyimg from '../Images/Chromakey.jpeg'
import Mazesearchimg from '../Images/Mazesearch.png'
import OCRimg from '../Images/NumScanImage.png'
import Sportsbettingimg from '../Images/sportsbetting.jpeg'
import SocioMedia from '../Images/SocioMedia.png'
import ECommerce from '../Images/ECommerce.jpeg'
import StreamingService from '../Images/StreamingService.jpeg'

import { Link } from "react-router-dom";

import Indproj from "./Indproj";

export default function Projects(){
    return(
        <div className="Projectparent" id="projects">
            <div className="projtoprow">
                <div className="projtopleft">
                    <h1 className="Projecttitle">Projects</h1>
                    <p className="Projdesc">Here you can see some of the projects I've done on my own time. See my <a href="https://github.com/ShaneYokota72" target="_blank" rel="noreferrer" className="githublink">GitHub</a> for more projects in detail. This is also most likely not up to date like most personal websites.</p>
                </div>
                <div className="projtopright" style={{width:"54vw"}}>
                    <h1 className="Projecttitlemostrec">My Latest Project</h1>
                    <Link to="/project:taskclear" className="projlinkrec" style={{textDecoration:"none"}}>
                        <div className="projcardmostrec">
                            <div style={{overflow: "hidden"}}>
                                <img src={taskclearimg} alt="taskclearimg" className="projcardimgrec"></img>
                            </div>
                            <div className="indprojdesc">
                                <h1 className="indprejdesctexth1">Task Clear</h1>
                                <p className="indprejdesctextp">Web Dev / Full Stack Dev</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="projectgal">
                <Link to="/project:SportsBettingHelper" className="projlink">
                    <Indproj projimg={Sportsbettingimg} projname= "Sports Betting Helper" projcat= "Software Development"></Indproj>
                </Link>
                <Link to="/project:SocioMedia" className="projlink">
                    <Indproj projimg={SocioMedia} projname= "Socio-Media" projcat= "Web Dev / Full Stack Dev"></Indproj>
                </Link>
                <Link to="/project:Ecommerce" className="projlink">
                    <Indproj projimg={ECommerce} projname= "E-Commerce Service" projcat= "Terminal Application"></Indproj>
                </Link>
                <Link to="/project:StreamingService" className="projlink">
                    <Indproj projimg={StreamingService} projname= "Streaming Service" projcat= "Terminal Application"></Indproj>
                </Link>
                <Link to="/project:NumberScan" className="projlink">
                    <Indproj projimg={OCRimg} projname= "NumberScan" projcat= "Computer Vision / Algorithm Design / Software Development"></Indproj>
                </Link>
                <Link to="/project:Chromakey" className="projlink">
                    <Indproj projimg={Chrommkeyimg} projname= "ChromaKey" projcat= "Image Processing / Software Engineering"></Indproj>
                </Link>
                <Link to="/project:Mazesearch" className="projlink">
                    <Indproj projimg={Mazesearchimg} projname= "MazeSearch" projcat= "Algorithm Design / Software Development"></Indproj>
                </Link>
            </div>
        </div>
    )
}