class BlockA{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      push();
      fill("green");
      translate(this.body.position.x, this.body.position.y);
      rect(0, 0, this.width, this.height);
      pop();
    }
}