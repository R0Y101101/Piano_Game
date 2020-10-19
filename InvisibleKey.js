class InvisibleKey{
    constructor(x, y, width, height,color1) {
    var options = {
         'restitution':0,
          'friction':1,
           'density':1.0 
          } 
          this.body = Bodies.rectangle(x, y, width, height, options);
           this.width = width; 
           this.height = height;
        

            World.add(world, this.body); 
          } 
          display(){ 
              var pos =this.body.position;
               var angle = this.body.angle;
               var color1 = this.color1;
                push();
                 translate(pos.x, pos.y);
                  rotate(angle);
                   rectMode(CENTER);
                    fill("gray");
                     rect(0, 0, this.width, this.height);
                      pop();
                   }
                   };