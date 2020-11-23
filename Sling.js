class Sling{

    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:5
        }

        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
      
        strokeWeight(7);
        line (pointA.x,pointA.y,pointB.x,pointB.y);
     }
    }


    fly(){
        this.sling.bodyA = null;
    }
}