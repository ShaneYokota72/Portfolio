import React from "react";
import "../App.css";

export default function StickyNav() {
    return (
        <div className="stickynav">
            <div className="stickynavbuttons">
                <a href="#aboutme" className="stickynavref">| About Me |</a>
                <a href="#skills" className="stickynavref">| Skills |</a>
                <a href="#projects" className="stickynavref">| Projects |</a>
                <a href="#timeline" className="stickynavref">| Timeline |</a>
                <a href="#contact" className="stickynavref">| Contact |</a>
            </div>
        </div>
    )
}