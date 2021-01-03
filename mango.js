class Mango{
constructor(x,y,r){

var options={
isStatic:true,
restitution:0,
friction:1
}
this.x=x;
this.y=y;
this.r=r;
this.image=loadImage("mango.png");
this.body=Bodies.circle(this.x,this.y,this.r,options);
World.add(world,this.body);
}  
display(){

    var posm=this.body.position;
    push();
    translate(posm.x,posm.y);
   imageMode(CENTER);
    rect(posm.x,posm.y,this.width,this.height)
    image(this.image,0,0,this.width,this.height);
   pop();
    }   
}