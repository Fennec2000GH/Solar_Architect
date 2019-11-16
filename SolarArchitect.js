//Credits 
//[1]Home page title custom made from www.font-generator.com/ 
//[2]Motion background is a cityscape gif from www.gifhy.com/ 

//set the current date  
var date = new Date();  
setText("DateF",date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear());
setText("DateB",date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear());
setText("DateT",date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear());
setText("DateL",date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear());
setText("DateR",date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear());

//set the current time  
function currentTime() {  
  var time = new Date();  
  if(time.getMinutes().toString().length == 2 && time.getSeconds().toString().length == 2){ 
    setText("TimeF",time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()); 
    setText("TimeB",time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()); 
    setText("TimeT",time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()); 
    setText("TimeL",time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()); 
    setText("TimeR",time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()); 
  } 
  if(time.getMinutes().toString().length == 1 && time.getSeconds().toString().length == 1){ 
    setText("TimeF",time.getHours() + ":" + "0" + time.getMinutes() + ":" + "0" + time.getSeconds()); 
    setText("TimeB",time.getHours() + ":" + "0" + time.getMinutes() + ":" + "0" + time.getSeconds()); 
    setText("TimeT",time.getHours() + ":" + "0" + time.getMinutes() + ":" + "0" + time.getSeconds()); 
    setText("TimeL",time.getHours() + ":" + "0" + time.getMinutes() + ":" + "0" + time.getSeconds()); 
    setText("TimeR",time.getHours() + ":" + "0" + time.getMinutes() + ":" + "0" + time.getSeconds()); 
  } 
  if(time.getMinutes().toString().length == 1 && time.getSeconds().toString().length == 2){ 
    setText("TimeF",time.getHours() + ":" + "0" + time.getMinutes() + ":" + time.getSeconds()); 
    setText("TimeB",time.getHours() + ":" + "0" + time.getMinutes() + ":" + time.getSeconds()); 
    setText("TimeT",time.getHours() + ":" + "0" + time.getMinutes() + ":" + time.getSeconds()); 
    setText("TimeL",time.getHours() + ":" + "0" + time.getMinutes() + ":" + time.getSeconds()); 
    setText("TimeR",time.getHours() + ":" + "0" + time.getMinutes() + ":" + time.getSeconds()); 
} 
  if(time.getMinutes().toString().length == 2 && time.getSeconds().toString().length == 1){ 
    setText("TimeF",time.getHours() + ":" + time.getMinutes() + ":" + "0" + time.getSeconds()); 
    setText("TimeB",time.getHours() + ":" + time.getMinutes() + ":" + "0" + time.getSeconds()); 
    setText("TimeT",time.getHours() + ":" + time.getMinutes() + ":" + "0" + time.getSeconds()); 
    setText("TimeL",time.getHours() + ":" + time.getMinutes() + ":" + "0" + time.getSeconds()); 
    setText("TimeR",time.getHours() + ":" + time.getMinutes() + ":" + "0" + time.getSeconds()); 
  } 
} 
timedLoop(0, currentTime);  


//important global variables 
var Button; 
var clickNum = 0; 

//the start button basically  
onEvent("Sketch","click",function(){
  setScreen("Front"); 
  setActiveCanvas("CanvasF"); 
}); 

//studio set control panel 
//exit to home screen 
onEvent("ExitF","click",function(){
  setScreen("Home");  
}); 

onEvent("ExitB","click",function(){
  setScreen("Home");  
}); 

onEvent("ExitT","click",function(){
  setScreen("Home");  
}); 

onEvent("ExitL","click",function(){
  setScreen("Home");  
}); 

onEvent("ExitR","click",function(){
  setScreen("Home");  
}); 

//discard current draft 
onEvent("DiscardF","click",function(){
  var response = prompt("Are you sure?"); 
  if(response == "Yes" || response == "yes"){ 
    clearCanvas();  
    for(var i = 1; i < 6; i++){ 
      hideElement("NoteF"+i); 
    } 
  } 
});  
onEvent("DiscardB","click",function(){
  var response = prompt("Are you sure?"); 
  if(response == "Yes" || response == "yes"){ 
    clearCanvas();  
    for(var i = 1; i < 6; i++){ 
      hideElement("NoteB"+i); 
    }
  } 
});  
onEvent("DiscardT","click",function(){
  var response = prompt("Are you sure?"); 
  if(response == "Yes" || response == "yes"){ 
    clearCanvas();  
    for(var i = 1; i < 6; i++){ 
      hideElement("NoteT"+i); 
    }
  } 
});  
onEvent("DiscardL","click",function(){
  var response = prompt("Are you sure?"); 
  if(response == "Yes" || response == "yes"){ 
    clearCanvas();  
    for(var i = 1; i < 6; i++){ 
      hideElement("NoteL"+i); 
    }
  } 
});  
onEvent("DiscardR","click",function(){
  var response = prompt("Are you sure?"); 
  if(response == "Yes" || "yes"){ 
    clearCanvas();  
    for(var i = 1; i < 6; i++){ 
      hideElement("NoteR"+i); 
    }
  } 
});  

//remove list of pop-up buttons 
//front 
onEvent("CanvasF","mouseover",function(){
  setTimeout(countUp, 0); 
  if(counter == 1){ 
    //front  
    hideElement("EraseF");  
    hideElement("NoteF"); 
    hideElement("DrawF"); 
    hideElement("RectangleF"); 
    hideElement("CircleF"); 
    hideElement("SegF"); 
    hideElement("ViewBackF"); 
    hideElement("ViewTopF"); 
    hideElement("ViewLeftF"); 
    hideElement("ViewRightF"); 
    hideElement("BoldLineF"); 
    hideElement("ThinLineF"); 
    
    counter = 0; 
  } 
  
}); 

//back  
onEvent("CanvasB","mouseover",function(){
  setTimeout(countUp, 0); 
  if(counter == 1){ 
    //back  
    hideElement("EraseB");  
    hideElement("NoteB"); 
    hideElement("DrawB");
    hideElement("RectangleB"); 
    hideElement("CircleB"); 
    hideElement("SegB");  
    hideElement("ViewFrontB"); 
    hideElement("ViewTopB"); 
    hideElement("ViewLeftB"); 
    hideElement("ViewRightB"); 
    hideElement("BoldLineB"); 
    hideElement("ThinLineB"); 
    
    counter = 0; 
  } 
  
}); 

//top 
onEvent("CanvasT","mouseover",function(){
  setTimeout(countUp, 0); 
  if(counter == 1){ 
    //top 
    hideElement("EraseT");  
    hideElement("NoteT"); 
    hideElement("DrawT");
    hideElement("RectangleT"); 
    hideElement("CircleT"); 
    hideElement("SegT"); 
    hideElement("ViewBackT"); 
    hideElement("ViewFrontT"); 
    hideElement("ViewLeftT"); 
    hideElement("ViewRightT"); 
    hideElement("BoldLineT"); 
    hideElement("ThinLineT"); 
    
    counter = 0; 
  } 
  
}); 

//left  
onEvent("CanvasL","mouseover",function(){
  setTimeout(countUp, 0); 
  if(counter == 1){ 
    //left  
    hideElement("EraseL");  
    hideElement("NoteL"); 
    hideElement("DrawL");
    hideElement("RectangleL"); 
    hideElement("CircleL"); 
    hideElement("SegL"); 
    hideElement("ViewBackL"); 
    hideElement("ViewTopL"); 
    hideElement("ViewFrontL"); 
    hideElement("ViewRightL"); 
    hideElement("BoldLineL"); 
    hideElement("ThinLineL"); 

    counter = 0; 
  } 
  
}); 

//right 
onEvent("CanvasR","mouseover",function(){
  setTimeout(countUp, 0); 
  if(counter == 1){ 
    //right 
    hideElement("EraseR");  
    hideElement("NoteR"); 
    hideElement("DrawR");
    hideElement("RectangleR"); 
    hideElement("CircleR"); 
    hideElement("SegR"); 
    hideElement("ViewBackR"); 
    hideElement("ViewTopR"); 
    hideElement("ViewLeftR"); 
    hideElement("ViewFrontR"); 
    hideElement("BoldLineR"); 
    hideElement("ThinLineR"); 
    
    counter = 0; 
  } 
  
}); 

//pop-up menu for tools 
//from the front  
onEvent("ToolsF","mouseover",function(){
  showElement("EraseF");  
  showElement("NoteF"); 
  showElement("DrawF"); 
}); 
onEvent("ToolsB","mouseover",function(){
  showElement("EraseB");  
  showElement("NoteB"); 
  showElement("DrawB"); 
}); 
onEvent("ToolsT","mouseover",function(){
  showElement("EraseT");  
  showElement("NoteT"); 
  showElement("DrawT"); 
}); 
onEvent("ToolsL","mouseover",function(){
  showElement("EraseL");  
  showElement("NoteL"); 
  showElement("DrawL"); 
}); 
onEvent("ToolsR","mouseover",function(){
  showElement("EraseR");  
  showElement("NoteR"); 
  showElement("DrawR"); 
}); 

//eraser  
//global variables for eraser 
var xe; 
var ye; 
var mouse = 0;  
//for the mouse number 0 or 1 
//front 
onEvent("CanvasF","mousedown",function(){
  mouse = 1;  
}); 
onEvent("CanvasF","mouseup",function(){
  mouse = 0; 
}); 

//back  
onEvent("CanvasB","mousedown",function(){
  mouse = 1;  
}); 
onEvent("CanvasB","mouseup",function(){
  mouse = 0; 
}); 

//top 
onEvent("CanvasT","mousedown",function(){
  mouse = 1;  
}); 
onEvent("CanvasT","mouseup",function(){
  mouse = 0; 
}); 

//left  
onEvent("CanvasL","mousedown",function(){
  mouse = 1;  
}); 
onEvent("CanvasL","mouseup",function(){
  mouse = 0; 
}); 

//right 
onEvent("CanvasF","mousedown",function(){
  mouse = 1;  
}); 
onEvent("CanvasF","mouseup",function(){
  mouse = 0; 
}); 

//button id for erase 
onEvent("EraseF","click",function(){
  Button = "Erase";  
}); 
onEvent("EraseB","click",function(){
  Button = "Erase";  
}); 
onEvent("EraseT","click",function(){
  Button = "Erase";  
}); 
onEvent("EraseL","click",function(){
  Button = "Erase";  
}); 
onEvent("EraseR","click",function(){
  Button = "Erase";  
}); 

//does the actual erasing 
onEvent("CanvasF","mousemove",function(event){
  if(Button == "Erase" && mouse == 1){ 
    xe = event.offsetX - 10*Math.sqrt(1/2); 
    ye = event.offsetY - 10*Math.sqrt(1/2); 
      //painting white  
      setStrokeColor(rgb(0,0,0));  
      setFillColor(rgb(255,255,255));  
      rect(xe, ye, 10*Math.sqrt(2), 10*Math.sqrt(2)); 
      setTimeout(eraseBorder, 0); 
    } 
}); 
onEvent("CanvasB","mousemove",function(event){
  if(Button == "Erase" && mouse == 1){ 
    xe = event.offsetX - 10*Math.sqrt(1/2); 
    ye = event.offsetY - 10*Math.sqrt(1/2); 
      //painting white  
      setStrokeColor(rgb(0,0,0));  
      setFillColor(rgb(255,255,255));  
      rect(xe, ye, 10*Math.sqrt(2), 10*Math.sqrt(2)); 
      setTimeout(eraseBorder, 0); 
    } 
}); 
onEvent("CanvasT","mousemove",function(event){
  if(Button == "Erase" && mouse == 1){ 
    xe = event.offsetX - 10*Math.sqrt(1/2); 
    ye = event.offsetY - 10*Math.sqrt(1/2); 
      //painting white  
      setStrokeColor(rgb(0,0,0));  
      setFillColor(rgb(255,255,255));  
      rect(xe, ye, 10*Math.sqrt(2), 10*Math.sqrt(2)); 
      setTimeout(eraseBorder, 0); 
    } 
}); 
onEvent("CanvasL","mousemove",function(event){
  if(Button == "Erase" && mouse == 1){ 
    xe = event.offsetX - 10*Math.sqrt(1/2); 
    ye = event.offsetY - 10*Math.sqrt(1/2); 
      //painting white  
      setStrokeColor(rgb(0,0,0));  
      setFillColor(rgb(255,255,255));  
      rect(xe, ye, 10*Math.sqrt(2), 10*Math.sqrt(2)); 
      setTimeout(eraseBorder, 0); 
    } 
}); 
onEvent("CanvasR","mousemove",function(event){
  if(Button == "Erase" && mouse == 1){ 
    xe = event.offsetX - 10*Math.sqrt(1/2); 
    ye = event.offsetY - 10*Math.sqrt(1/2); 
      //painting white  
      setStrokeColor(rgb(0,0,0));  
      setFillColor(rgb(255,255,255));  
      rect(xe, ye, 10*Math.sqrt(2), 10*Math.sqrt(2)); 
      setTimeout(eraseBorder, 0); 
    } 
});    
    
function eraseBorder(){ 
  setStrokeColor(rgb(255,255,255));  
  rect(xe, ye, 10*Math.sqrt(2), 10*Math.sqrt(2)); 
} 

//for writing 
//button id for note  
onEvent("NoteF","click",function(){ 
  Button = "Note"; 
}); 
onEvent("NoteB","click",function(){ 
  Button = "Note"; 
}); 
onEvent("NoteT","click",function(){ 
  Button = "Note"; 
}); 
onEvent("NoteL","click",function(){ 
  Button = "Note"; 
}); 
onEvent("NoteR","click",function(){ 
  Button = "Note"; 
}); 
    
//note variables for position 
var xn; 
var yn; 
//number indicating nth note for each canvas  
var noteNumF = 0;  
var noteNumB = 0;  
var noteNumT = 0;  
var noteNumL = 0;  
var noteNumR = 0;  
//actually posting the note 
onEvent("CanvasF","click",function(event){ 
  if(Button == "Note" && noteNumF < 6){  
    var note = prompt("Enter Note Here:"); 
    noteNumF++;  
    xn = event.offsetX; 
    yn = event.offsetY; 
    setPosition("NoteF"+noteNumF,xn,yn,120,20); 
    setText("NoteF"+noteNumF,note); 
    showElement("NoteF"+noteNumF); 
  } 
  if(noteNumF >= 6){ 
    xn = null;  
    yn = null;  
  } 
}); 
onEvent("CanvasB","click",function(event){ 
  if(Button == "Note" && noteNumB < 6){  
    var note = prompt("Enter Note Here:"); 
    noteNumB++;  
    xn = event.offsetX; 
    yn = event.offsetY; 
    setPosition("NoteB"+noteNumB,xn,yn,120,20); 
    setText("NoteB"+noteNumB,note); 
    showElement("NoteB"+noteNumB); 
  } 
  if(noteNumB >= 6){ 
    xn = null;  
    yn = null;  
  } 
}); 
onEvent("CanvasT","click",function(event){ 
  if(Button == "Note" && noteNumT < 6){  
    var note = prompt("Enter Note Here:"); 
    noteNumT++;  
    xn = event.offsetX; 
    yn = event.offsetY; 
    setPosition("NoteT"+noteNumT,xn,yn,120,20); 
    setText("NoteT"+noteNumT,note); 
    showElement("NoteT"+noteNumT); 
  } 
  if(noteNumT >= 6){ 
    xn = null;  
    yn = null;  
  } 
}); 
onEvent("CanvasL","click",function(event){ 
  if(Button == "Note" && noteNumL < 6){  
    var note = prompt("Enter Note Here:"); 
    noteNumL++;  
    xn = event.offsetX; 
    yn = event.offsetY; 
    setPosition("NoteL"+noteNumL,xn,yn,120,20); 
    setText("NoteL"+noteNumL,note); 
    showElement("NoteL"+noteNumL); 
  } 
  if(noteNumL >= 6){ 
    xn = null;  
    yn = null;  
  } 
}); 
onEvent("CanvasR","click",function(event){ 
  if(Button == "Note" && noteNumR < 6){  
    var note = prompt("Enter Note Here:"); 
    noteNumR++;  
    xn = event.offsetX; 
    yn = event.offsetY; 
    setPosition("NoteR"+noteNumR,xn,yn,120,20); 
    setText("NoteR"+noteNumR,note); 
    showElement("NoteR"+noteNumR); 
  } 
  if(noteNumR >= 6){ 
    xn = null;  
    yn = null;  
  } 
}); 

//for sketching free draw 
//global variables for free draw  
var xd; 
var yd; 
var inkNum; 
//button id for free draw 
onEvent("DrawF","click",function(){
  Button = "Draw"; 
  inkNum = promptNum("Enter the thickness of line:"); 
});  
onEvent("DrawB","click",function(){
  Button = "Draw"; 
  inkNum = promptNum("Enter the thickness of line:"); 
});  
onEvent("DrawT","click",function(){
  Button = "Draw"; 
  inkNum = promptNum("Enter the thickness of line:"); 
});  
onEvent("DrawL","click",function(){
  Button = "Draw"; 
  inkNum = promptNum("Enter the thickness of line:"); 
});  
onEvent("DrawR","click",function(){
  Button = "Draw"; 
  inkNum = promptNum("Enter the thickness of line:"); 
});  

//the sketching - use mouse from Erase to determine whether to squirt ink or not 
onEvent("CanvasF","mousemove",function(event){  
  if(Button == "Draw" && mouse == 1){  
    xd = event.offsetX; 
    yd = event.offsetY; 
    setFillColor(rgb(0,0,0)); 
    circle(xd, yd, inkNum);  
  } 
}); 
onEvent("CanvasB","mousemove",function(event){  
  if(Button == "Draw" && mouse == 1){  
    xd = event.offsetX; 
    yd = event.offsetY; 
    setFillColor(rgb(0,0,0)); 
    circle(xd, yd, inkNum);  
  } 
}); 
onEvent("CanvasT","mousemove",function(event){  
  if(Button == "Draw" && mouse == 1){  
    xd = event.offsetX; 
    yd = event.offsetY; 
    setFillColor(rgb(0,0,0)); 
    circle(xd, yd, inkNum);  
  } 
}); 
onEvent("CanvasL","mousemove",function(event){  
  if(Button == "Draw" && mouse == 1){  
    xd = event.offsetX; 
    yd = event.offsetY; 
    setFillColor(rgb(0,0,0)); 
    circle(xd, yd, inkNum);  
  } 
}); 
onEvent("CanvasR","mousemove",function(event){  
  if(Button == "Draw" && mouse == 1){  
    xd = event.offsetX; 
    yd = event.offsetY; 
    setFillColor(rgb(0,0,0)); 
    circle(xd, yd, inkNum);  
  } 
});  

//pop-up menu for shapes 
//from the front 
onEvent("ShapeF","mouseover",function(){
  showElement("RectangleF"); 
  showElement("CircleF"); 
  showElement("SegF"); 
}); 

//from the back 
onEvent("ShapeB","mouseover",function(){
  showElement("RectangleB"); 
  showElement("CircleB"); 
  showElement("SegB"); 
}); 

//from the top 
onEvent("ShapeT","mouseover",function(){
  showElement("RectangleT"); 
  showElement("CircleT"); 
  showElement("SegT"); 
}); 

//from the left 
onEvent("ShapeL","mouseover",function(){
  showElement("RectangleL"); 
  showElement("CircleL"); 
  showElement("SegL"); 
}); 

//from the right  
onEvent("ShapeR","mouseover",function(){
  showElement("RectangleR"); 
  showElement("CircleR"); 
  showElement("SegR"); 
}); 

//pop-up menu of lines  
//from the front  
onEvent("LineF","mouseover",function(){ 
  showElement("BoldLineF"); 
  showElement("ThinLineF"); 
}); 

//from the back 
onEvent("LineB","mouseover",function(){ 
  showElement("BoldLineB"); 
  showElement("ThinLineB"); 
}); 

//from the top  
onEvent("LineT","mouseover",function(){ 
  showElement("BoldLineT"); 
  showElement("ThinLineT"); 
}); 

//from the left 
onEvent("LineL","mouseover",function(){ 
  showElement("BoldLineL"); 
  showElement("ThinLineL"); 
}); 

//from the right  
onEvent("LineR","mouseover",function(){ 
  showElement("BoldLineR"); 
  showElement("ThinLineR"); 
}); 

//determining the line thickness  
var strokeNum = 1;  
//the bold  
onEvent("BoldLineF","click",function(){ 
  strokeNum = 1;  
}); 

onEvent("BoldLineB","click",function(){ 
  strokeNum = 1;  
}); 

onEvent("BoldLineT","click",function(){ 
  strokeNum = 1;  
}); 

onEvent("BoldLineL","click",function(){ 
  strokeNum = 1;  
}); 

onEvent("BoldLineR","click",function(){ 
  strokeNum = 1;  
}); 

//the thin  
onEvent("ThinLineF","click",function(){
  strokeNum = 0;  
});   

onEvent("ThinLineB","click",function(){
  strokeNum = 0;  
}); 

onEvent("ThinLineT","click",function(){
  strokeNum = 0;  
}); 

onEvent("ThinLineL","click",function(){
  strokeNum = 0;  
}); 

onEvent("ThinLineR","click",function(){
  strokeNum = 0;  
}); 

//pop-up menu for view 
//from the front 
onEvent("ViewF","mouseover",function(){
  showElement("ViewBackF"); 
  showElement("ViewTopF"); 
  showElement("ViewLeftF"); 
  showElement("ViewRightF"); 
}); 

//from the back  
onEvent("ViewB","mouseover",function(){
  showElement("ViewFrontB"); 
  showElement("ViewTopB"); 
  showElement("ViewLeftB"); 
  showElement("ViewRightB"); 
}); 

//from the top  
onEvent("ViewT","mouseover",function(){ 
  showElement("ViewBackT"); 
  showElement("ViewFrontT");  
  showElement("ViewLeftT"); 
  showElement("ViewRightT");  
}); 

//from the left 
onEvent("ViewL","mouseover",function(){
  showElement("ViewBackL"); 
  showElement("ViewTopL"); 
  showElement("ViewFrontL"); 
  showElement("ViewRightL"); 
}); 

//from the right  
onEvent("ViewR","mouseover",function(){
  showElement("ViewBackR"); 
  showElement("ViewTopR"); 
  showElement("ViewLeftR"); 
  showElement("ViewFrontR"); 
}); 

/*change the view point 
set screens and canvases  */ 
//from the front  
onEvent("ViewBackF","click",function(){
  setScreen("Back");  
  setActiveCanvas("CanvasB"); 
}); 
onEvent("ViewTopF","click",function(){
  setScreen("Top"); 
  setActiveCanvas("CanvasT"); 
}); 
onEvent("ViewLeftF","click",function(){
  setScreen("Left"); 
  setActiveCanvas("CanvasL"); 
}); 
onEvent("ViewRightF","click",function(){
  setScreen("Right"); 
  setActiveCanvas("CanvasR"); 
}); 

//from the back 
onEvent("ViewFrontB","click",function(){
  setScreen("Front");  
  setActiveCanvas("CanvasF"); 
}); 
onEvent("ViewTopB","click",function(){
  setScreen("Top"); 
  setActiveCanvas("CanvasT"); 
});  
onEvent("ViewLeftB","click",function(){
  setScreen("Left"); 
  setActiveCanvas("CanvasL"); 
}); 
onEvent("ViewRightB","click",function(){
  setScreen("Right"); 
  setActiveCanvas("CanvasR"); 
}); 

//from the top  
onEvent("ViewBackT","click",function(){
  setScreen("Back");  
  setActiveCanvas("CanvasB"); 
}); 
onEvent("ViewFrontT","click",function(){
  setScreen("Front"); 
  setActiveCanvas("CanvasT"); 
}); 
onEvent("ViewLeftT","click",function(){
  setScreen("Left"); 
  setActiveCanvas("CanvasL"); 
}); 
onEvent("ViewRightT","click",function(){
  setScreen("Right"); 
  setActiveCanvas("CanvasR"); 
}); 

//from the left 
onEvent("ViewBackL","click",function(){
  setScreen("Back");  
  setActiveCanvas("CanvasB"); 
}); 
onEvent("ViewTopL","click",function(){
  setScreen("Top"); 
  setActiveCanvas("CanvasT"); 
}); 
onEvent("ViewFrontL","click",function(){
  setScreen("Left"); 
  setActiveCanvas("CanvasL"); 
}); 
onEvent("ViewRightL","click",function(){
  setScreen("Right"); 
  setActiveCanvas("CanvasR"); 
}); 

//from the right  
onEvent("ViewBackR","click",function(){
  setScreen("Back");  
  setActiveCanvas("CanvasB"); 
}); 
onEvent("ViewTopR","click",function(){
  setScreen("Top"); 
  setActiveCanvas("CanvasT"); 
}); 
onEvent("ViewLeftR","click",function(){
  setScreen("Left"); 
  setActiveCanvas("CanvasL"); 
}); 
onEvent("ViewFrontR","click",function(){
  setScreen("Front"); 
  setActiveCanvas("CanvasR"); 
}); 

//creates a split-second pause for intermediary s
var counter = 0;  
function countUp(){ 
  counter++; 
} 

//global mouse coordinates 
var x1; 
var y1;
var x2; 
var y2;

//to prevent clickNum from exceeding 2  
onEvent("CanvasF","mouseout",function(){
  if(Button == "Erase" || Button == "Note" || Button == "Draw"){ 
  clickNum = 0; 
  } 
}); 
onEvent("CanvasB","mouseout",function(){
  if(Button == "Erase" || Button == "Note" || Button == "Draw"){ 
  clickNum = 0; 
  } 
}); 
onEvent("CanvasT","mouseout",function(){
  if(Button == "Erase" || Button == "Note" || Button == "Draw"){ 
  clickNum = 0; 
  } 
}); 
onEvent("CanvasL","mouseout",function(){
  if(Button == "Erase" || Button == "Note" || Button == "Draw"){ 
  clickNum = 0; 
  } 
}); 
onEvent("CanvasR","mouseout",function(){
  if(Button == "Erase" || Button == "Note" || Button == "Draw"){ 
  clickNum = 0; 
  } 
}); 

//assign number for global mouse coordinates 
onEvent("CanvasF","click",function(event){ 
  if(clickNum === 0){ 
    x1 = event.offsetX; 
    y1 = event.offsetY; 
    console.log("x1= "+x1+" y1= "+y1); 
  } 
  if(clickNum == 1) { 
    x2 = event.offsetX; 
    y2 = event.offsetY;
    console.log("x2= "+x2+" y2= "+y2);
  } 
  clickNum++; 
}); 
onEvent("CanvasB","click",function(event){ 
  if(clickNum === 0){ 
    x1 = event.offsetX; 
    y1 = event.offsetY; 
    console.log("x1= "+x1+" y1= "+y1); 
  } 
  if(clickNum == 1) { 
    x2 = event.offsetX; 
    y2 = event.offsetY;
    console.log("x2= "+x2+" y2= "+y2);
  } 
  clickNum++; 
}); 
onEvent("CanvasT","click",function(event){ 
  if(clickNum === 0){ 
    x1 = event.offsetX; 
    y1 = event.offsetY; 
    console.log("x1= "+x1+" y1= "+y1); 
  } 
  if(clickNum == 1) { 
    x2 = event.offsetX; 
    y2 = event.offsetY;
    console.log("x2= "+x2+" y2= "+y2);
  } 
  clickNum++; 
}); 
onEvent("CanvasL","click",function(event){ 
  if(clickNum === 0){ 
    x1 = event.offsetX; 
    y1 = event.offsetY; 
    console.log("x1= "+x1+" y1= "+y1); 
  } 
  if(clickNum == 1) { 
    x2 = event.offsetX; 
    y2 = event.offsetY;
    console.log("x2= "+x2+" y2= "+y2);
  } 
  clickNum++; 
}); 
onEvent("CanvasR","click",function(event){ 
  if(clickNum === 0){ 
    x1 = event.offsetX; 
    y1 = event.offsetY; 
    console.log("x1= "+x1+" y1= "+y1); 
  } 
  if(clickNum == 1) { 
    x2 = event.offsetX; 
    y2 = event.offsetY;
    console.log("x2= "+x2+" y2= "+y2);
  } 
  clickNum++; 
}); 

//rectangle button assignment 
onEvent("RectangleF","click",function(){
  Button = "Rectangle"; 
}); 
onEvent("RectangleB","click",function(){
  Button = "Rectangle"; 
});
onEvent("RectangleT","click",function(){
  Button = "Rectangle"; 
}); 
onEvent("RectangleL","click",function(){
  Button = "Rectangle"; 
}); 
onEvent("RectangleR","click",function(){
  Button = "Rectangle"; 
}); 

//rectangle draw 
onEvent("CanvasF","click",function(){ 
  //appearance  
  if(strokeNum == 1){ 
    setStrokeWidth(6); 
    setStrokeColor(rgb(0,0,0)); 
  }else{  
    setStrokeWidth(2);  
    setStrokeColor(rgb(0,0,0)); 
  }   
  //rectangle is drawn 
  if (clickNum == 2 && Button == "Rectangle"){
    line(x1,y1,x2,y1);  //top side 
    line(x1,y2,x2,y2);  //bottom side 
    line(x1,y1,x1,y2);  //left side 
    line(x2,y1,x2,y2);  //right side  
    clickNum = 0; 
  }

}); 
onEvent("CanvasB","click",function(){ 
  //appearance  
  if(strokeNum == 1){ 
    setStrokeWidth(6); 
    setStrokeColor(rgb(0,0,0)); 
  }else{  
    setStrokeWidth(2);  
    setStrokeColor(rgb(0,0,0)); 
  }   
  //rectangle is drawn 
  if (clickNum == 2 && Button == "Rectangle"){
    line(x1,y1,x2,y1);  //top side 
    line(x1,y2,x2,y2);  //bottom side 
    line(x1,y1,x1,y2);  //left side 
    line(x2,y1,x2,y2);  //right side  
    clickNum = 0; 
  }

}); 
onEvent("CanvasT","click",function(){ 
  //appearance 
  if(strokeNum == 2){ 
    setStrokeWidth(6); 
    setStrokeColor(rgb(0,0,0)); 
  }
  if(strokeNum == 1){  
    setStrokeWidth(2);  
    setStrokeColor(rgb(0,0,0)); 
  }   
  //rectangle is drawn 
  if (clickNum == 2 && Button == "Rectangle"){
    line(x1,y1,x2,y1);  //top side 
    line(x1,y2,x2,y2);  //bottom side 
    line(x1,y1,x1,y2);  //left side 
    line(x2,y1,x2,y2);  //right side 
  }
    clickNum = 0; 

  
}); 
onEvent("CanvasL","click",function(){ 
  //appearance  
  if(strokeNum == 1){ 
    setStrokeWidth(6); 
    setStrokeColor(rgb(0,0,0)); 
  }else{  
    setStrokeWidth(2);  
    setStrokeColor(rgb(0,0,0)); 
  }   
  //rectangle is drawn 
  if (clickNum == 2 && Button == "Rectangle"){
    line(x1,y1,x2,y1);  //top side 
    line(x1,y2,x2,y2);  //bottom side 
    line(x1,y1,x1,y2);  //left side 
    line(x2,y1,x2,y2);  //right side  
    clickNum = 0; 
  }

}); 
onEvent("CanvasR","click",function(){ 
  //appearance  
  if(strokeNum == 1){ 
    setStrokeWidth(6); 
    setStrokeColor(rgb(0,0,0)); 
  }else{  
    setStrokeWidth(2);  
    setStrokeColor(rgb(0,0,0)); 
  }   
  //rectangle is drawn 
  if (clickNum == 2 && Button == "Rectangle"){
    line(x1,y1,x2,y1);  //top side 
    line(x1,y2,x2,y2);  //bottom side 
    line(x1,y1,x1,y2);  //left side 
    line(x2,y1,x2,y2);  //right side  
    clickNum = 0; 
  }

}); 

//circle button assignment 
onEvent("CircleF","click",function(){
  Button = "Circle"; 
}); 
onEvent("CircleB","click",function(){
  Button = "Circle"; 
}); 
onEvent("CircleT","click",function(){
  Button = "Circle";  
}); 
onEvent("CircleL","click",function(){
  Button = "Circle"; 
}); 
onEvent("CircleR","click",function(){
  Button = "Circle"; 
}); 

//draw circle 
onEvent("CanvasF","click",function(){
  //appearance 
  if(strokeNum == 1){ 
    setStrokeWidth(6); 
    setStrokeColor(rgb(0,0,0)); 
    setFillColor(rgb(255,255,255,0)); 
  }else{  
    setStrokeWidth(2);  
    setStrokeColor(rgb(0,0,0)); 
    setFillColor(rgb(255,255,255,0));  
  }   
  if(clickNum == 2 && Button == "Circle"){ 
    circle((x1+x2)/2, (y1+y2)/2, dist(x1,y1,x2,y2)/2); 
    clickNum = 0; 
  } 
  
}); 
onEvent("CanvasB","click",function(){
  //appearance 
  if(strokeNum == 1){ 
    setStrokeWidth(6); 
    setStrokeColor(rgb(0,0,0)); 
    setFillColor(rgb(255,255,255,0)); 
  }else{  
    setStrokeWidth(2);  
    setStrokeColor(rgb(0,0,0)); 
    setFillColor(rgb(255,255,255,0));  
  }   
  if(clickNum == 2 && Button == "Circle"){ 
    circle((x1+x2)/2, (y1+y2)/2, dist(x1,y1,x2,y2)/2); 
    clickNum = 0; 
  } 
  
}); 
onEvent("CanvasT","click",function(){
  //appearance 
  if(strokeNum == 1){ 
    setStrokeWidth(6); 
    setStrokeColor(rgb(0,0,0)); 
    setFillColor(rgb(255,255,255,0)); 
  }else{  
    setStrokeWidth(2);  
    setStrokeColor(rgb(0,0,0)); 
    setFillColor(rgb(255,255,255,0));  
  }   
  if(clickNum == 2 && Button == "Circle"){ 
    circle((x1+x2)/2, (y1+y2)/2, dist(x1,y1,x2,y2)/2); 
    clickNum = 0; 
  } 
  
}); 
onEvent("CanvasL","click",function(){
  //appearance 
  if(strokeNum == 1){ 
    setStrokeWidth(6); 
    setStrokeColor(rgb(0,0,0)); 
    setFillColor(rgb(255,255,255,0)); 
  }else{  
    setStrokeWidth(2);  
    setStrokeColor(rgb(0,0,0)); 
    setFillColor(rgb(255,255,255,0));  
  }   
  if(clickNum == 2 && Button == "Circle"){ 
    circle((x1+x2)/2, (y1+y2)/2, dist(x1,y1,x2,y2)/2); 
    clickNum = 0; 
  } 
  
}); 
onEvent("CanvasR","click",function(){
  //appearance 
  if(strokeNum == 1){ 
    setStrokeWidth(6); 
    setStrokeColor(rgb(0,0,0)); 
    setFillColor(rgb(255,255,255,0)); 
  }else{  
    setStrokeWidth(2);  
    setStrokeColor(rgb(0,0,0)); 
    setFillColor(rgb(255,255,255,0));  
  }   
  if(clickNum == 2 && Button == "Circle"){ 
    circle((x1+x2)/2, (y1+y2)/2, dist(x1,y1,x2,y2)/2); 
    clickNum = 0; 
  } 
  
}); 

//calculates distance between 2 points 
function dist(X1,Y1,X2,Y2){ 
  return Math.sqrt(Math.pow(X2-X1, 2) + Math.pow(Y2-Y1, 2)); 
} 

//line segments 
//button assignments  
onEvent("SegF","click",function(){
  Button = "Segment"; 
}); 
onEvent("SegB","click",function(){
  Button = "Segment"; 
}); 
onEvent("SegT","click",function(){
  Button = "Segment"; 
}); 
onEvent("SegL","click",function(){
  Button = "Segment"; 
}); 
onEvent("SegR","click",function(){
  Button = "Segment"; 
}); 

//drawing the line segment  
onEvent("CanvasF","click",function(){
  if(Button == "Segment" && clickNum == 2){ 
    line(x1,y1,x2,y2); 
    clickNum = 0;  
  } 
}); 
onEvent("CanvasB","click",function(){
  if(Button == "Segment" && clickNum == 2){ 
    line(x1,y1,x2,y2); 
    clickNum = 0;  
  } 
}); 
onEvent("CanvasT","click",function(){
  if(Button == "Segment" && clickNum == 2){ 
    line(x1,y1,x2,y2); 
    clickNum = 0;  
  } 
}); 
onEvent("CanvasL","click",function(){
  if(Button == "Segment" && clickNum == 2){ 
    line(x1,y1,x2,y2); 
    clickNum = 0;  
  } 
}); 
onEvent("CanvasR","click",function(){
  if(Button == "Segment" && clickNum == 2){ 
    line(x1,y1,x2,y2); 
    clickNum = 0;  
  } 
}); 


