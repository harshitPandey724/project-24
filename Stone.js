class Stone {
    constructor(x, y,w,h) {
      var options = {
        'density':12,
        'friction': 0.9,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.width = w;
      this.height = h;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
  
      push();
      translate(pos.x, pos.y);
      //strokeWeight(3);
      //stroke('white')
      fill('brown')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  