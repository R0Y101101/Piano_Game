const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world; var box1;

var ground;

var value = "orange";
var value2 = "darkred";

// var on1;
// var on2;
// var on3;
// var on4;
// var on5;
// var on6;
// var on7;
// var on8;
// var on9;


    function setup(){
         var canvas = createCanvas(1040, 300);
         engine = Engine.create();
         world = engine.world;

        
           key1 = new Key(50,200,50,200, "darkred");
           key2 = new Key(152,200,50,200, "darkred");
           key3 = new Key(254,200,50,200, "darkred");
           key4 = new Key(356,200,50,200, "darkred");
           key5 = new Key(458,200,50,200, "darkred");
           key6 = new Key(560,200,50,200, "darkred");
           key7 = new Key(662,200,50,200, "darkred");
           key8 = new Key(764,200,50,200, "darkred");
           key9 = new Key(866,200,50,200, "darkred");
           key10 = new Key(968,200,50,200, "darkred");
         
           Blackkey1 = new BlackKey(101,150,50,100,"orange");
           Blackkey2 = new BlackKey(203,150,50,100,"orange");
           Blackkey3 = new BlackKey(305,150,50,100,"orange");
           Blackkey4 = new BlackKey(407,150,50,100,"orange");
           Blackkey5 = new BlackKey(509,150,50,100,"orange");
           Blackkey6 = new BlackKey(611,150,50,100,"orange");
           Blackkey7 = new BlackKey(713,150,50,100,"orange");
           Blackkey8 = new BlackKey(815,150,50,100,"orange");
           Blackkey9 = new BlackKey(917,150,50,100,"orange");
           
           inviskey1 = new InvisibleKey(101,100,50,50,"yellow");
           inviskey2 = new InvisibleKey(203,100,50,50,"yellow");
           inviskey3 = new InvisibleKey(305,100,50,50,"yellow");
           inviskey4 = new InvisibleKey(407,100,50,50,"yellow");
           inviskey5 = new InvisibleKey(509,100,50,50,"yellow");
           inviskey6 = new InvisibleKey(611,100,50,50,"yellow");
           inviskey7 = new InvisibleKey(713,100,50,50,"yellow");
           inviskey8 = new InvisibleKey(815,100,50,50,"yellow");
           inviskey9 = new InvisibleKey(917,100,50,50,"yellow");
                   
           ground1 = new Ground(250,height,600,20); 
           ground2 = new Ground(450,height,600,20); 
           ground3 = new Ground(650,height,600,20); 
           ground4 = new Ground(850,height,600,20); 
           ground5 = new Ground(1050,height,600,20); 
           ground6 = new Ground(1200,height,600,20); 
           
          } 
            
          function draw(){ 
                 Engine.update(engine);

                 background("royalblue");

                 ground1.display();
                 ground2.display();
                 ground3.display();
                 ground4.display();
                 ground5.display();
                 ground6.display();

                 key1.display();
                 key2.display();
                 key3.display();
                 key4.display();
                 key5.display();
                 key6.display();
                 key7.display();
                 key8.display();
                 key9.display();
                 key10.display();
                
                //  inviskey1.display();
                //  inviskey2.display();
                //  inviskey3.display();
                //  inviskey4.display();
                //  inviskey5.display();
                //  inviskey6.display();
                //  inviskey7.display();
                //  inviskey8.display();
                //  inviskey9.display();

                 Blackkey1.display();
                 Blackkey2.display();
                 Blackkey3.display();
                 Blackkey4.display();
                 Blackkey5.display();
                 Blackkey6.display();
                 Blackkey7.display();
                 Blackkey8.display();
                 Blackkey9.display();
                 
                }


        function keyPressed() {
              if (keyCode === 97) {
                //this.Blackkey1.keyColor = "yellow";
              
                this.key1.shapeColor = "black";
              }  
        }
/*
        function keyPressed() {
          if (keyCode === RIGHT_ARROW) {
            this.Blackkey2.keyColor = "yellow";
          }  
        }
        function keyPressed() {
          if (keyCode === UP_ARROW) {
            this.Blackkey3.keyColor = "yellow";
          }  
        }
        function keyPressed() {
          if (keyCode === DOWN_ARROW) {
            this.Blackkey4.keyColor = "yellow";
          }  
        
        }
*/
        // function keyPressed() {
        //   if (keyCode === LEFT_ARROW) {
        //     this.Blackkey5.keyColor = "yellow";
        //   }  
        // }

        // function keyPressed() {
        //   if (keyCode === LEFT_ARROW) {
        //     this.Blackkey6.keyColor = "yellow";
        //   }  
        // }