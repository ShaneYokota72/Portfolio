import React from "react";
import '../App.css';

import { Link } from "react-router-dom";

import Ecommerce1 from '../Images/Ecommerce.png';

export default function Ecommerce(props){
    return(
        <div className="projectpopup">
            <div className="projectpopuptop">
                <h1 className="projectpopuptitle">Ecommerce Service</h1>
                <div className="worktopics">
                    <p>C++</p>
                    <p>C</p>
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
                    <p className="explanationp">Database used and Terminal Interface of the Service</p>
                    <img src={Ecommerce1} alt="project explanation" className="explanationimg"></img>
                </div>
                <div className="explanationright">
                    <p className="explanationp">
                    This project is an E-commerce Service program developed in C++ that offers a comprehensive solution for managing products and users in a terminal environment. It runs on terminal interface for users to perform various tasks, such as searching for products, adding products to the cart, viewing products in the cart, and saving the updated database. 
                    <br></br>
                    <br></br>
                    In addition to the functionalities, to ensure that the program can handle a large number of data with no problem,   the program time efficiency was optimized by implementing efficient data structure and algorithms.
                    <br></br>
                    <br></br>
                    View this project on GitHub: <a className="links" href="https://github.com/ShaneYokota72/Ecommerce-Service" target="_blank">E-Commerce Terminal Service</a>
                    </p>

                </div>
            </div>
        </div>
    )
}