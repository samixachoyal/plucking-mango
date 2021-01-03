class Lancher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.lanch = Constraint.create(options);
        World.add(world, this.sling);
    }
fly(){

this.lanch.bodyA=null

}
    display(){
        if(this.sling.bodyA){
        var pointA = this.lanch.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }   
}