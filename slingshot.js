class Slingshot {
    constructor(bodyA, pointB){
       var options = {
           bodyA : bodyA,
           pointB : pointB,
           length : 5,
           stiffness : 0.5
       }
        this.slingshot=Constraint.create(options);
        this.pointB  = pointB
        World.add (world,this.slingshot);
    }
    display(){

        if (this.slingshot.bodyA){
        var bodyA = this.slingshot.bodyA.position
        var pointB = this.pointB
        
        strokeWeight(4)
        line(bodyA.x, bodyA.y,pointB.x,pointB.y);
        }
    }


        fly (){
            this.slingshot.bodyA=null;
        }
}


