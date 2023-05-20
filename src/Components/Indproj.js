import React from "react";
import '../App.css'

import taskclearimg from '../Images/taskclear.png'
export default function Indproj(props){
    return(
        <div className="projcard">
            <div style={{overflow: "hidden"}}>
                <img src={props.projimg} alt="taskclearimg" className="projcardimg"></img>
            </div>
            <div className="indprojdesc">
                <h1 className="indprejdesctexth1">{props.projname}</h1>
                <p className="indprejdesctextp">{props.projcat}</p>
            </div>
        </div>
    )
}