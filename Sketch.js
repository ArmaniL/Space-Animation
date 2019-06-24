var Mercury;
var Venus
var Earth
var Mars
var Jupiter
var Saturn
var Uranus
var sun
var Neptune;
var tranxx=0;
var tranyy=0;
var tranx;
var trany
var stars=[];
var mx;
var my;
var amount=100;
var c;
function setup(){
c=createCanvas(1900,1800);
c.style('padding',width/2)
frameRate(1);
angleMode(DEGREES);
sun=new star();
for (var i=0;i<amount;i++){
	stars.push(new constt());
}
contro=createSlider(1,120,20,1)
contro.position(width+20,0)
contro.size(200,200);
Mercury=new planet(width/2,height/2+200,2.42,255,100,100,10,"Mercury");
Venus=new planet(width/2,height/2+410,6.8,100,255,100,7.8,"Venus");
Earth=new planet(width/2,height/2+420,8,100,100,255,6.6,"Earth");
Mars=new planet(width/2,height/2+440,4,255,0,0,5.3,"Mars");
Jupiter=new planet(width/2,height/2+544,88,255,235,100,2.9,"Jupiter");
Saturn=new planet(width/2,height/2+640,68,255,255,2,1.5,"Saturn");
Uranus= new planet(width/2,height/2+800,32,255,255,255,1.2,"Uranus");
Neptune= new planet(width/2,height/2+1000,24,1,0,255,1,"Neptune")
}
function draw(){
frameRate(contro.value())
 
var v=1
var tranx=tranxx
 trany=tranyy
background(0);
 Mercury.draw();
 Mercury.update(v,tranx,trany);
 Venus.draw();
 Venus.update(v,tranx,trany)
 Earth.draw();
 Earth.update(v,tranx,trany);
 Mars.draw();
 Mars.update(v,tranx,trany)
Jupiter.draw();
Jupiter.update(v,tranx,trany)
 Saturn.draw();
 Saturn.update(v,tranx,trany);
 Uranus.draw();
 Uranus.update(v,tranx,trany);
 Neptune.draw();
 Neptune.update(v,tranx,trany);
 sun.draw();
 sun.update(v,tranx,trany);

for (var i=0;i<amount;i++){
	stars[i].draw();
}
}

function planet(x,y,r,rr,g,b,s,name){
this.x=x;
this.y=y;
this.r=r;
this.rr=rr;
this.g=g;
this.b=b;
this.s=s;
this.name=name
this.draw=function(){
stroke(this.rr,this.g,this.b);	
fill(this.rr,this.g,this.b);
ellipse(this.x,this.y,this.r,this.r);
if (mouseIsPressed){
	fill(this.rr,this.g,this.b)
	textSize(40)
	text(this.name,this.x+this.r,this.y)
} 
}

this.update=function(stretch,tranx,trany){
var xb=this.x-width/2;
var yb=this.y-height/2;
this.x=(xb)*cos(this.s)-(yb)*sin(this.s);
this.y=(xb)*sin(this.s)+(yb)*cos(this.s);
this.x+=width/2
this.y+=height/2
this.x=this.x*stretch+tranx*stretch;
this.y=this.y*stretch+trany*stretch;
}
}
function star(){

	this.x=width/2;
	this.y=height/2;
	this.r=160;
    this.name="The sun"
this.draw=function(){
	fill(250,250,100);
	ellipse(this.x,this.y,this.r,this.r);
	if (mouseIsPressed){
	
	fill(250,250,100)
	textSize(50)
	text(this.name,this.x+this.r,this.y)

}
}

this.update=function(stretch,tranx,trany){
this.x=this.x*stretch+tranx*stretch;
this.y=this.y*stretch+trany*stretch;
}

}





function constt(){

	this.x=random(width)
	this.y=random(height)
    this.draw=function(){

        stroke(255);
        fill(255)
    	ellipse(this.x,this.y,0.5,0.75)
    }


}
















