class Stone{
    constructor(x,y,width,height){
    
    var options={
    isStatic:true
    }
    this.x=x;
    this.y=y;
   this.width=width;
   this.height=height;
    this.image=loadImage("stone.png");
    this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
    World.add(world,this.body);
    }  
    display(){

 var poss=this.body.position;
 push();
 translate(poss.x,poss.y);
imageMode(CENTER);
 rect(poss.x,poss.y,this.width,this.height)
 image(this.image,0,0,this.width,this.height);
pop();
 } 


    }  
    