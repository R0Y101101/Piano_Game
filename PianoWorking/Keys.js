class Key {
     constructor(x, y, width, height, keyColor) {
          var options = {
               
                isStatic: true
                } 
                this.body = Bodies.rectangle(x, y, width, height, options);
                 this.width = width; 
                 this.height = height;
                 this.keyColor = keyColor;
                  World.add(world, this.body); 
          } 
     display(){ 
               var pos =this.body.position;
               var angle = this.body.angle;
               push();
               translate(pos.x, pos.y);
               rotate(angle);
               rectMode(CENTER);
               fill(this.keyColor);
               rect(0, 0, this.width, this.height);
               pop();
     }
};