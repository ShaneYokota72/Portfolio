import React, {useRef} from "react";
import '../App.css';

import { Link } from "react-router-dom";

import astro from '../Images/astro.png';
import space from '../Images/space.png';

export default function Chromakey(props){
    const imageRef = useRef(null);
    const canvasRef = useRef(null);
    const imageRef2 = useRef(null);
    const canvasRef2 = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            imageRef.current.src = e.target.result;
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };
    const handleFileChange2 = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            imageRef2.current.src = e.target.result;
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };
    const handleButtonClick = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const canvas2 = canvasRef2.current;
        const context2 = canvas2.getContext('2d');

        const image = new Image();
        image.src = imageRef.current.src;
        const image2 = new Image();
        image2.src = imageRef2.current.src;

        image2.onload = () => {
            let width = image.width;
            let height = image.height;
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);
            context.drawImage(image, 0, 0);
    
            canvas2.setAttribute('width', image2.width);
            canvas2.setAttribute('height', image2.height);
            context2.drawImage(image2, 0, 0);
    
            const imageData = context.getImageData(0, 0, image.width, image.height);
            const pixelData = imageData.data;
    
            // getting the RGB data for BG
            const bgData = context2.getImageData(0, 0, image2.width, image2.height);
            const bgpixelData = bgData.data;
            
            //declare the RGB variables to add all the scanned row/column value
            let avgR = 0;
            let avgG = 0;
            let avgB = 0;
    
            // scan the top row for chromakey search/algorithm
            for(let i=0; i<width*4; i+=4){
                avgR += pixelData[i];
                avgG += pixelData[i+1];
                avgB += pixelData[i+2]; 
            }
            // scan the left col for chromakey search/algorithm
            for(let i=0; i<pixelData.length; i+=width*4){
                avgR += pixelData[i];
                avgG += pixelData[i+1];
                avgB += pixelData[i+2]; 
            }
            // scan the right col for chromakey search/algorithm
            for(let i=(width-1)*4; i<pixelData.length; i+=width*4){
                avgR += pixelData[i];
                avgG += pixelData[i+1];
                avgB += pixelData[i+2];
            }
            // scan the bot row for chromakey search/algorithm
            for(let i=((height-1)*width*4); i<pixelData.length; i+=4){
                avgR += pixelData[i];
                avgG += pixelData[i+1];
                avgB += pixelData[i+2];
            }
    
            // divide the avg values by the amout of pixel scanned to get the true average value
            avgR = avgR/(2*width + 2*height);
            avgG = avgG/(2*width + 2*height);
            avgB = avgB/(2*width + 2*height);
            // get the avg difference of the RGB values in the image
            let dif = 0.0;
            for(let i=0; i<pixelData.length; i+=4){
                dif += Math.sqrt(Math.pow(avgR-pixelData[i], 2) + Math.pow(avgG-pixelData[i+1], 2) + Math.pow(avgB-pixelData[i+2], 2));
            }
            dif /= width*height;
    
            // Concatnating Foreground and Background
            for(let i=0; i<pixelData.length; i+=4){
                let distance = Math.sqrt(Math.pow(avgR-pixelData[i], 2) + Math.pow(avgG-pixelData[i+1], 2) + Math.pow(avgB-pixelData[i+2], 2));
                //console.log(distance + "vs" + dif);
                if(dif*1.05 < distance){
                    bgpixelData[i] = pixelData[i];
                    bgpixelData[i+1] = pixelData[i+1];
                    bgpixelData[i+2] = pixelData[i+2];
                }
                if(dif*1.05 > distance){
                    pixelData[i] = 255;
                    pixelData[i + 1] = 255;
                    pixelData[i + 2] = 255;
                }
            }
            
            context2.putImageData(bgData, 0, 0);
            context.putImageData(imageData, 0, 0);
        }
    };
    return(
        <div className="projectpopup">
            <div className="projectpopuptop">
                <h1 className="projectpopuptitle">Chromakey</h1>
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
                    <p className="explanationp">Test This out Right here!</p>
                    <div style={{display: "flex", gap: "50px"}}>
                        <div>   
                            <h4 className="explanationp">Sample foreground</h4>
                            <img className="chromakeysampleimg" src={astro}></img>
                        </div>
                        <div>
                            <h4 className="explanationp">Sample backgruond</h4>
                            <img className="chromakeysampleimg" src={space}></img>
                        </div>
                    </div>
                    
                    <div className="imginput">
                        <div style={{width:"20vw"}}>
                            <h2 className="explanationp" >Foreground Image</h2>
                            <input className="explanationp"  type="file" id="imageInput" onChange={handleFileChange}></input>
                            <h5 className="explanationp" >Foreground Image</h5>
                            <img className="explanationp" id="my-image" ref={imageRef} src="" alt="foreground img"></img>
                        </div>
                        <div style={{width:"20vw"}}>
                            <h2 className="explanationp" >Background Image</h2>
                            <input className="explanationp"  type="file" id="Background" onChange={handleFileChange2}></input>
                            <h5 className="explanationp" >Background Image</h5>
                            <img className="explanationp" id="bg-image" ref={imageRef2} src="" alt="background img"></img>
                        </div>
                    </div>
                    <canvas id="canvas" ref={canvasRef} width="0" height="0"></canvas>

                    <h5 className="explanationp" >Image concatnated result</h5>
                    <canvas id="canvas2" ref={canvasRef2} width="0" height="0"></canvas>
                    <button className="explanationp" id="my-button" style={{color:"black", marginBottom: "20px"}} onClick={handleButtonClick}>Concatnate images</button>
                </div>
                <div className="explanationright">
                    <p className="explanationp">
                    This project implements a Chromakey algorithm to composite two images.
                    <br></br>
                    Given 2 image, first image is the foreground image and second image is the background image. Using my own algorithm, I remove the green screen from the foreground image and replace it with the background image. 
                    <br></br>
                    <br></br>
                    The algorithm is as follows:
                    I first calculate the tone of the green screen by averaging the RGB values of the pixels in the green screen. 
                    <br></br>
                    Then I calculate the distance between the tone of the green screen and the tone of each pixel in the foreground image. 
                    <br></br>
                    If the distance is less than a threshold, I replace the pixel with the corresponding pixel in the background image. Otherwise, I keep the pixel in the foreground image.
                    <br></br>
                    <br></br>
                    View this project on GitHub: <a className="links" href="https://github.com/ShaneYokota72/hw2" target="_blank">Chromakey</a>
                    </p>

                </div>
            </div>
        </div>
    )
}