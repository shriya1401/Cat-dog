img="";
status="";



function preload() {
 //code for loading image
 img=loadImage("Image1.jpg");  
}

function setup(){
canvas=createCanvas(600,600);
canvas.center();

//code for importing the ssd model
objectDetector=ml5.objectDetector('cocossd',modelLoaded)
//code for identification....
objectDetector.detect(img,getResults);
}

function getResults(error,results){
    
if (error) {
    console.log(error);
}
else{
    console.log(results);
}

}

function modelLoaded(){
    console.log('Hey Shriya!!!! Your model is working now! :D')
    document.getElementById('status').innerHTML='Status:Detecting Objects!! :D'
    status=true
}

function draw() {
//code for drawing the image over the canvas
image(img,0,0,600,600);

//code for drawing rectangle around dog
fill('red');
//text(text to be typed on the canvas,x,y)
text('dog',260,45);
textSize(15);
noFill();
stroke('red');
//rect(x,y,width,height)
rect(250,30,300,500);


//code for drawing the rectangle around the cat
fill('red');
text('cat',60,185);
textSize(15);
noFill();
stroke('red')
rect(50,170,200,400)
}