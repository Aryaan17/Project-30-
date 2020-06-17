class BlockC{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("Yellowsquare.png");
      this.width = width;
      this.height = height;
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
        push()
        translate(this.body.position.x, this.body.position.y);
        fill("#FFDD55");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop()
      }
      else {
        World.remove(world, this.body);
        this.visibility = this.visibility-10;
        push()
        tint(255, this.visibility);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 30, 30);
        pop()
      }
    } 
    score(){
      if(this.visibility <105 && this.visibility> 0){
        score = score + 1;
      }
    } 
}