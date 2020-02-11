document.addEventListener("DOMContentLoaded", function () {

    let gray = document.getElementById("shapeCanvas");

    const MAX = 600;

    //--------------buttons--------------------------//

    let sqButton = document.getElementById('sq-button');
    sqButton.addEventListener('click', insertSquare)

    let cirButton = document.getElementById('cir-button');
    cirButton.addEventListener('click', insertCircle)

    let recButton = document.getElementById('rec-button');
    recButton.addEventListener('click', insertRectangle)

    let triButton = document.getElementById('tri-button');
    triButton.addEventListener('click', insertTriangle);

    //-----------Functions-------------//


    function insertSquare() {
        var submitValue = document.getElementById("square-input").value;
        let xVal = randomVal(0, MAX-submitValue);  //calls on randomVal function. picks a number from 0-800 because MAX is set to 800 px
        let yVal = randomVal(0, MAX-submitValue);
        let size = submitValue;
        let sq = new square(xVal, yVal, size);
    }

    function insertCircle() {
        var submitValue = document.getElementById("circle-input").value;
        let xVal = randomVal(0, MAX-(submitValue*2));
        let yVal = randomVal(0, MAX-(submitValue*2));
        let size = submitValue;
        let cir = new circle(xVal, yVal, size);
    }

    function insertRectangle() {
        var heightValue = document.getElementById("rectangle-height-input").value;
        var widthValue = document.getElementById("rectangle-width-input").value;
        let xVal = randomVal(0, MAX-submitValue);
        let yVal = randomVal(0, MAX-submitValue);
        let recHeight = heightValue;
        let recWidth = widthValue;
        let rec = new rectangle(xVal, yVal, recHeight, recWidth);
    }

  function insertTriangle () {
    var submitValue = document.getElementById("triangle-input").value;
    let xVal = randomVal(0,MAX-submitValue);  //calls on randomVal function. picks a number from 0-800 because MAX is set to 800 px
    let yVal = randomVal(0,MAX-submitValue);
    let size = submitValue;
    let tri = new Triangle(xVal, yVal, size);
}


    function randomVal(min, max) {
        return Math.floor(Math.random() * (max - min));
    }
    //--------------classes---------//


    class shape {
        constructor(x, y) {
            this.div = document.createElement("div");
            this.div.style.left = `${x}px`;
            this.div.style.top = `${y}px`;
        }
    }

    class square extends shape {
        constructor(x, y, size) {
            super(x, y);
            this.div.classList.add('square')
            this.div.style.width = `${size}px`;
            this.div.style.height = `${size}px`;
            gray.appendChild(this.div);
        }
    }

    class rectangle extends shape {
        constructor(x, y, recHeight, recWidth) {
            super(x, y);
            this.div.classList.add('rect');
            this.div.style.height = `${recHeight}px`;
            this.div.style.width = `${recWidth}px`;
            gray.appendChild(this.div);
        }
    }

    class circle extends shape {
        constructor(x, y, radius) {
            super(x, y);
            this.div.classList.add('circ');
            this.div.style.width = `${radius}px`;
            this.div.style.height = `${radius}px`;
            gray.appendChild(this.div);
        }
    }

 class Triangle extends shape {
    constructor (x, y, size){
        super(x,y);
        this.div.classList.add('triangle');         
        this.div.style.borderBottom = `${size}px solid white`;        
        this.div.style.borderRight = `${size}px solid transparent`;        
        gray.appendChild(this.div);

    }
}

})