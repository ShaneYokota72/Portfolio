import React from "react";
import "../App.css";

export default function StickyNav() {
    return (
        <div className="stickynav">
            <div className="stickynavbuttons">
                <a href="#aboutme" className="stickynavref">| About Me |</a>
                <a href="#skills" className="stickynavref">| Skills |</a>
                <a href="#skills" className="stickynavref">| Timeline |</a>
                <a href="#skills" className="stickynavref">| Projects |</a>
                <a href="#skills" className="stickynavref">| Contact |</a>
            </div>
        </div>
    )
}