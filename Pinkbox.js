class Pinkbox {

    constructor(x,y,w,h){
  
        var options ={
            restitution : 0.5,
            density: 0.6,
            friction: 0.7
          }
        this.box = Bodies.rectangle(x,y,w,h, options);
        this.width = w;
        this.height = h;
        this.image = loadImage("Pink box.png");
        World.add(world,this.box);
    }
  
    display(){
     push();
      translate(this.box.position.x,this.box.position.y);
      rotate(this.box.angle);  
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
     pop();
    }
  
  
  }