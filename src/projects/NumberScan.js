function transformArray(array, width) {
    const matrix = new Array(array.length / width).fill().map(() => new Array(width));
    let row = 0;
    let col = 0;
    for (let i = 0; i < array.length; i++) {
        matrix[row][col] = array[i];
        col++;
        if (col === width) {
            col = 0;
            row++;
        }
    }
    return matrix;
}
// locatin class. to make (row,col) calculation and useability easier
class Location{
    row;
    col;
    constructor(r, c){
        this.row = r;
        this.col = c;
    }
}
// Classify the Digit // Classify the Digit 
class DigitBlob{
    constructor(img/* 2D array */, upperleft/* Location Object */, height, width){
        this.#img_ = img;
        this.#digit_ = '!'; // dummy value
        this.#bq0_ = 0;
        this.#bq1_ = 0;
        this.#bq2_ = 0;
        this.#bq3_ = 0;
        this.#bq4_ = 0;
        this.#bqd_ = 0;
        this.#euler_ = -2; 

        // Initilaize ul_, h_ and w_ and any other data members
        this.#ul_ = upperleft;
        this.#h_ = height;
        this.#w_ = width;
        this.#Vline = false;
        this.#Hline = false;
        this.#halfHline = false;
        this.#halfVline = false;
        this.#botHline = false;
        this.#topHline = false;
        this.#righttopblack = false;
    }
    classify(){
        this.#calc_bit_quads();
        this.#calc_euler_number();
        this.#calc_centers_of_mass();
        this.#calc_symmetry();
        this.#morepixel();
        this.#VHline();
        this.#calc_corners();

        if(this.#euler_ === 1){
            this.#digit_ = '8';
        } else if(this.#euler_ === 0){
            if(this.#vsym > 0.8 && this.#hsym > 0.8){
                this.#digit_ = '0';
            } else if(this.#lefttoright > 1.18){// 1.3 or 1.5
                // 4 or 9
                if(this.#Vline && this.#Hline){
                    this.#digit_ = '4';
                } else {
                    this.#digit_ = '9';
                }
            } else if(this.#lefttoright < 1){
                // 6
                this.#digit_ = '6';
            }
        } else if(this.#euler_ === -1){
            // 1 2 3 5 7 
            // botHline => 1 or 2
            // topHline => 5 or 7
            // hlafHline=> 1
            // neither => 3
    
            if (this.#Vline){
                this.#digit_ = '1';
            }  else if((!this.#Vline && !this.#Hline && !this.#halfVline) || this.#hsym>0.75){
                this.#digit_ = '3';
            } else if(this.#botHline){
                if(this.#hsym > 0.65 && this.#vsym > 0.7){
                    this.#digit_ = '1';
                } else if(this.#halfHline &&this.#righttopblack){
                    this.#digit_ = '1';
                } else {
                    this.#digit_ = '2';
                }
            } else if (this.#topHline){
                // 5 or 7
                if(this.#hcentroid < 0.4){
                    this.#digit_ = '7';
                } else if (this.#halfVline){
                    this.#digit_ = '5';
                }
            } else if(this.#halfVline){
                this.#digit_ = '5';
            }
        }

        if(this.#digit_ === '!'){
            this.#digit_ = '9';
        }

    }
    getClassification(){
        return this.#digit_;
    }
    getUpperLeft(){
        return this.#ul_;
    }
    //private
    #calc_bit_quads(){
        for(let i = this.#ul_.row-1; i<this.#ul_.row + this.#h_; i++){
            for(let j= this.#ul_.col-1; j < this.#ul_.col + this.#w_ ; j++){
                let bqcheck = new Location(i,j);
                let b1 = this.#img_[bqcheck.row][bqcheck.col];
                let b2 = this.#img_[bqcheck.row][bqcheck.col+1];
                let b3 = this.#img_[bqcheck.row+1][bqcheck.col];
                let b4 = this.#img_[bqcheck.row+1][bqcheck.col+1];
                // check which bq it is and add 1 to the matching bq
                if(b1+b2+b3+b4 === 255*4){
                    //0 bloc is balck(all white)
                    this.#bq0_++;
                } else if(b1+b2+b3+b4 === 255*3){
                    //1 bloc is balck
                    this.#bq1_++;
                } else if(b1+b2+b3+b4 === 255*2){
                    //2 block is black
                    if(b1 === b4){
                        //bqd
                        this.#bqd_++;
                    } else {
                        //bq2
                        this.#bq2_++;
                    }
                } else if(b1+b2+b3+b4 === 255*1){
                    //3 block is black
                    this.#bq3_++;
                } else if(b1+b2+b3+b4 === 0){
                    //4 block is black
                    this.#bq4_++;
                }
            }
        }
    }
    #calc_euler_number(){
        this.#euler_ = -(this.#bq1_ - this.#bq3_ - 2*this.#bqd_) / 4;
    }
    #calc_centers_of_mass(){
        this.#totalblack = 0;
        this.#vcentroid = 0;
        this.#hcentroid = 0;

        for(let i=0; i<this.#h_ - 1; i++){
            for(let j=0; j<this.#w_ - 1; j++){
                if(this.#img_[this.#ul_.row + i][this.#ul_.col + j] === 0){
                    this.#totalblack++;
                    this.#vcentroid+=j;
                    this.#hcentroid+=i;
                }
            }  
        }
        this.#vcentroid= this.#vcentroid/(this.#totalblack*(this.#w_-1)); 
        this.#hcentroid= this.#hcentroid/(this.#totalblack*(this.#h_-1)); 
    }
    #calc_symmetry(){
        let vmatch=0;
        for(let i = 0; i<this.#h_; i++){
            for(let j=0; j < this.#w_*0.45 ; j++){
                if (this.#img_[(this.#ul_).row + i][(this.#ul_.col) + j] === this.#img_[(this.#ul_).row + i][(this.#ul_).col + this.#w_ -1 -j]){
                    vmatch++;
                }
            }
        }
        this.#vsym = vmatch/(this.#h_ * this.#w_ / 2);


        //horizontal symmetry (top to bottom)
        let hmatch = 0;
        for(let i = 0; i<this.#h_*0.45; i++){
            for(let j=0; j < this.#w_ ; j++){
                if (this.#img_[(this.#ul_).row + i][(this.#ul_.col) + j] === this.#img_[(this.#ul_).row + this.#h_ - 1 - i][(this.#ul_).col + j]){
                    hmatch++;
                }
            }
        }
        this.#hsym = hmatch/(this.#h_ * this.#w_ / 2);
    }
    /* #calc_aspect_ratio(){

    } */
    /* #calc_thirds(){

    } */
    #calc_corners(){
        this.#righttopblack = (this.#img_[(this.#ul_).row][(this.#ul_).col + this.#w_ -1] === 0 );
    }
    /* #calc_vert_lines(){

    } */
    #morepixel(){
        //virtical symmetry (left to right)
        let leftblack = 0;
        let rightblack = 0;
        for(let i=(this.#ul_).row; i<(this.#ul_).row+this.#h_-1; i++){
            for(let j=(this.#ul_).col; j <(this.#ul_).col+this.#w_-1; j++){
                if(this.#img_[i][j] === 0){
                    if(j< ((this.#ul_).col + ((this.#w_-1)/2) - this.#w_*0.1)){
                        leftblack++;
                    } else if(j>=((this.#ul_).col + ((this.#w_-1)/2) + this.#w_*0.1)){
                        rightblack++;
                    }
                }
            }
        }
        //cout << "LtoR = " << rightblack/leftblack << endl;
        this.#lefttoright = rightblack/leftblack;

        //horizontal symmetry (top to bottom)
        let topblack = 0;
        let botblack = 0;
        for(let i=(this.#ul_).row; i<(this.#ul_).row+this.#h_-1; i++){
            for(let j=(this.#ul_).col; j <(this.#ul_).col+this.#w_-1; j++){
                if(this.#img_[i][j] === 0){
                    if(i<((this.#ul_).row + ((this.#h_-1)/2) - this.#h_*0.1)){
                        topblack++;
                    } else if(i>=((this.#ul_).row + ((this.#h_-1)/2) + this.#h_*0.1)){
                        botblack++;
                    }
                }
            }
        }
        //cout << "TtoB = " << botblack/topblack << endl;
        this.#toptobot = botblack/topblack;
    }
    #VHline(){
        for(let i=(this.#ul_).row;i<(this.#ul_).row + this.#h_ -1; i++){
            let Htest = 0;
            for(let j=(this.#ul_).col;j<(this.#ul_).col + this.#w_ -1; j++){
                if(this.#Hline){
                    break;
                }
                if(this.#img_[i][j] === 0){
                    Htest++;
                }
            }
            if(Htest >= this.#w_*0.801){
                //cout << "Htest at " << i << " " << Htest << ":" << w_*0.85 << endl;
                this.#Hline = true;
                if(i < ((this.#ul_).row + (this.#h_*0.1))){
                    this.#topHline = true;
                } else if(i > ((this.#ul_).row + (this.#h_*0.8))){
                    this.#botHline = true;
                }
            }
        }
    
        for(let j=(this.#ul_).col;j<(this.#ul_).col + this.#w_ -1; j++){
            let Vtest = 0;
            for(let i=(this.#ul_).row;i<(this.#ul_).row + this.#h_ -1; i++){
                if(this.#Vline){
                    break;
                }
                if(this.#img_[i][j] === 0){
                    Vtest++;
                }
            }
            if(Vtest >= this.#h_*0.85){
                //cout << "Vtest at " << i << " " << Vtest << ":" << w_*0.85 << endl;
                this.#Vline = true;
            }
        }
    
    
        for(let j=(this.#ul_).col;j<(this.#ul_).col + this.#w_ -1; j++){
            let halfVtest = 0;
            let starthalfV = false;
            for(let i=(this.#ul_).row;i<(this.#ul_).row + this.#h_ -1; i++){
                if(this.#halfHline){
                    break;
                } else if(this.#img_[i][j] === 0){
                    starthalfV = true;
                    halfVtest++;
                } else if(starthalfV && this.#img_[i][j] === 255){
                    break;
                }
            }
            if(halfVtest >= this.#h_*0.45 && halfVtest <= this.#h_*0.6){
                //cout << "Vtest at " << j << " " << Vtest << ":" << h_*0.85 << endl;
                this.#halfVline = true;
            } 
        }
    
        for(let i=(this.#ul_).row;i<(this.#ul_).row + this.#h_ -1; i++){
            let halfHtest = 0;
            let starthalfH = false;
            for(let j=(this.#ul_).col;j<(this.#ul_).col + this.#w_ -1; j++){
                if(this.#halfHline){
                    break;
                } else if(this.#img_[i][j] === 0){
                    starthalfH = true;
                    halfHtest++;
                } else if(starthalfH && this.#img_[i][j] === 255){
                    break;
                }
            }
            if(halfHtest >= this.#w_*0.45 && halfHtest <= this.#w_*0.6){
                //cout << "Htest at " << i << " " << Htest << ":" << w_*0.85 << endl;
                this.#halfHline = true;
            }
        }
    }

    //private variables
    #img_;
    #ul_;
    #h_;
    #w_;
    #digit_;
    #bq0_;
    #bq1_;
    #bq2_;
    #bq3_;
    #bq4_;
    #bqd_;
    #euler_;
    #vsym;
    #hsym;
    #toptobot;
    #lefttoright;
    #totalblack;
    #vcentroid;
    #hcentroid;

    #Vline;
    #Hline;
    #halfVline;
    #halfHline;
    #topHline;
    #botHline;
    #righttopblack;
}

// NumImg class Numimg will have DigitBlob as a variable inside it.
// NumImg is a class that contains all the data of about the img
class NumImg{
    constructor(array, height, width){
        // instead of filename, I will be just taking an 2D array
        this.#h_ = height;
        this.#w_ = width;

        // inputting the data getting from JS and putting it into 2d array
        // taking the R value as measurement
        let pixel = [];
        let exploredplace = [];
        for(let i=0; i<array.length; i+=4){
            pixel.push(array[i]);
            exploredplace.push(false);
        }
        const matrix = transformArray(pixel, this.#w_);
        const hasbeen = transformArray(exploredplace, this.#w_);
        this.#img_ = matrix;
        this.#visited = hasbeen;
        this.#blobs_ = [];
        // Convert to Black and White using a fixed threshold
        for(let i=0; i<this.#h_; i++){
            for(let j=0; j<this.#w_; j++){
                if(this.#img_[i][j] > 150){
                    this.#img_[i][j] = 255;
                }
                else {
                    this.#img_[i][j] = 0;
                }
            }
        }
    }
    // refining the sorting algorithm
    /* printblob(){
        for(let i=0; i<this.#blobs_.length; i++){
            console.log((this.#blobs_[i].getUpperLeft()).row);
            console.log((this.#blobs_[i].getUpperLeft()).col);
        }
    } */
    findAndCreateDigitBlobs(){
        let result = 0;

        //run through the image and check for a black pixel, then run BFS
        for (let i=0; i<this.#h_; i++){
            for(let j=0; j<this.#w_; j++){
                if((this.#img_[i][j] === 0) && (this.#visited[i][j] === false)){
                    // do the BFS search
                    let goingtoadd = new DigitBlob(-1,-1);
                    goingtoadd = this.#createDigitBlob(this.#visited, i, j);
                    this.#blobs_.push(goingtoadd);
                    result++;
                }
            }   
        }
        this.#sortDigitBlobs();
        
        return result;
    }
    classify(DebugNum){
        let res = "";
        for(let i = 0; i < (this.#blobs_).length; i++){
            this.#blobs_[i].classify();
            if(DebugNum){
                this.#blobs_[i].printClassificationResults();
            }
            let c = this.#blobs_[i].getClassification();
            res += c;
        }
        return res;
    }
    // private variables
    #sortDigitBlobs(){
        for(let i=0; i<this.#blobs_.length; i++){
            let min = ((this.#blobs_[i]).getUpperLeft()).row + ((this.#blobs_[i]).getUpperLeft()).col;
            let minidx = i;
            for(let j=i; j<this.#blobs_.length; j++){
                if(((this.#blobs_[j]).getUpperLeft()).row + ((this.#blobs_[j]).getUpperLeft()).col <= min){
                    min = ((this.#blobs_[j]).getUpperLeft()).row + ((this.#blobs_[j]).getUpperLeft()).col;
                    minidx = j;
                }
            }
            //swapping index to sort the blobs_ array
            [this.#blobs_[i], this.#blobs_[minidx]] = [this.#blobs_[minidx], this.#blobs_[i]];
        }
    }
    #createDigitBlob(explored, pr, pc){
        // Arrays to help produce neighbors easily in a loop
        // by encoding the **change** to the current location.
        // Goes in order N, NW, W, SW, S, SE, E, NE
        //for efficient for loop in the BFS algorithm
        let neighbor_row = [-1, -1, 0, 1, 1, 1, 0, -1];
        let neighbor_col = [0, -1, -1, -1, 0, 1, 1, 1];

        // Add your code here
        
        //declare max left,right,top,bottom
        let maxleft = pc;
        let maxright = pc;
        let maxtop = pr;
        let maxbottom = pr;
        //BFS search algorithm
        const loc = []
        /* deque<Location> loc; */
        this.#visited[pr][pc] = true;
        let start = new Location(pr,pc);
        loc.push(start);
        while(loc.length !== 0){
            let temp = loc[0];
            for(let i=0; i<8; i++){
                // console.log(this.#img_);
                if((this.#img_[temp.row+neighbor_row[i]][temp.col+neighbor_col[i]] === 0) && (this.#visited[temp.row+neighbor_row[i]][temp.col+neighbor_col[i]] === false)){
                    this.#visited[temp.row+neighbor_row[i]][temp.col+neighbor_col[i]] = true;
                    let addthis = new Location (temp.row+neighbor_row[i], temp.col+neighbor_col[i]);
                    loc.push(addthis);
                    if(temp.row+neighbor_row[i]>maxbottom){
                        maxbottom = temp.row+neighbor_row[i];
                    }
                    if(temp.row+neighbor_row[i]<maxtop){
                        maxtop = temp.row+neighbor_row[i];
                    }
                    if(temp.col+neighbor_col[i]>maxright){
                        maxright = temp.col+neighbor_col[i];
                    }
                    if(temp.col+neighbor_col[i]<maxleft){
                        maxleft = temp.col+neighbor_col[i];
                    }
                }
            }
            loc.shift();
        }

        // with the maxbot,top,right,left info, create the upperleft location
        /* Location upperleft(maxtop, maxleft); */
        let upperleft = new Location(maxtop, maxleft);
        let height = maxbottom - maxtop + 1;
        let width = maxright - maxleft + 1;

        //make DigitBlob to return
        /* DigitBlob tempblob(img_, upperleft, height, width); */
        let tempblob = new DigitBlob(this.#img_, upperleft, height, width);

        return tempblob;
    }
    #img_;
    #h_;
    #w_;
    #blobs_;
    #visited;
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
If you were to run the JS function above in a react component, you would have to use the following code:
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


// export default function NumberScan(props){
//     const imageRef = useRef(null);
//     const canvasRef = useRef(null);

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         const reader = new FileReader();

//         reader.onload = (e) => {
//             imageRef.current.src = e.target.result;
//         };

//         if (file) {
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleButtonClick = () => {
//         const canvas = canvasRef.current;
//         const context = canvas.getContext('2d');

//         const image = new Image();
//         image.src = imageRef.current.src;

//         image.onload = () => {
//             canvas.setAttribute('width', image.width);
//             canvas.setAttribute('height', image.height);
//             context.drawImage(image, 0, 0);
        
//             const imageData = context.getImageData(0, 0, image.width, image.height);
//             const pixelData = imageData.data;
//             console.log("image", pixelData, image.height, image.width);
//             let image1 = new NumImg(pixelData, image.height, image.width);
//             image1.findAndCreateDigitBlobs();
//             let str1 = image1.classify(false);
//             const resultElement = document.getElementById('result');
//             resultElement.innerText = "Number: " + str1;
//         };
//     };
//     return(
//         <div className="projectpopup">
//             <div className="projectpopuptop">
//                 <h1 className="projectpopuptitle">NumberScan</h1>
//                 <div className="worktopics">
//                     <p>C++</p>
//                     <p>JavaScript</p>
//                     <p>Makefile</p>
//                 </div>
//                 <Link to="/">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="popupX" viewBox="0 0 16 16">
//                         <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
//                         <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
//                     </svg>
//                 </Link>
//             </div>
//             <div className="explanation">
//                 <div className="explanationleft">
//                     <p className="explanationp">Test This out Right here! Put any image with white backgrund and click scan number.</p>
//                     <p className="explanationp">Sample Images</p>
                    
//                     <div style={{display: "flex", marginBottom: "30px"}}>
//                         <img src={sampleimg1} className="numscansample" alt="sampleimg"></img>
//                         <img src={sampleimg2} className="numscansample" alt="sampleimg"></img>
//                         <img src={sampleimg3} className="numscansample" alt="sampleimg"></img>
//                         <img src={sampleimg4} className="numscansample" alt="sampleimg"></img>
//                         <img src={sampleimg5} className="numscansample" alt="sampleimg"></img>
//                     </div>
//                     <input type="file" id="imageInput" onChange={handleFileChange} className="explanationp" style={{marginLeft: "6vw"}}/>
//                     <h5 className="explanationp">Number 1 Image</h5>
//                     <img id="my-image" ref={imageRef} alt="NumberScan_IMG" className="explanationp" style={{marginBottom: "20px"}}/>
//                     <canvas id="canvas" ref={canvasRef}></canvas>
//                     <button className="explanationp" id="my-button" style={{color:"black", marginBottom: "20px"}} onClick={handleButtonClick}>Scan Number</button>
//                     <div className="explanationp" id="result"></div>
//                 </div>
//                 <div className="explanationright">
//                     <p className="explanationp">
//                     This is a NumberScanner, which is a program that is able to detect and recognize the numbers in images just like when you scan a giftcard! 
//                     <br></br>
//                     <br></br>
//                     This project is a Optical Character Recognition program developed in C++ and JavaScript to process the images. The program is able to accurately detect and recognize the numbers in images by using a multi-stage approach, including digit recognition, digit pixel calculations, and classification. 
//                     <br></br>
//                     <br></br>
//                     The preprocessing techniques include converting the image to grayscale and applying a threshold. 
//                     <br></br>
//                     <br></br>
//                     The digit pixel calculations include calculating the Euler number, the number of holes, and the number of connected components, placement of center of mass, and more.
//                     <br></br>
//                     <br></br>
//                     The classification is done by using all the values calculated in the digit pixel calculations.
//                     <br></br>
//                     <br></br>
//                     View this project on GitHub: <a className="links" href="https://github.com/ShaneYokota72/Portfolio/blob/main/src/Components/NumberScan.js" target="_blank" rel="noreferrer">NumberScan</a>
//                     </p>

//                 </div>
//             </div>
//         </div>
//     )
// }