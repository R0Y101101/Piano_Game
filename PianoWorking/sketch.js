const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world; var box1;

var ground, canvas;

var pianoSoundA, key1, key2, key3, key4, key5,key6,key7,key8,key9,key10;

// produceSound("t", "assets/t(l).mp3");
// produceSound("T", "assets/T.mp3");
// produceSound("y", "assets/y(l).mp3");
// produceSound("Y", "assets/Y.mp3");
// produceSound("u", "assets/u(l).mp3");
// produceSound("i", "assets/i(l).mp3");
// produceSound("I", "assets/I.mp3");
// produceSound("o", "assets/o(l).mp3");
// produceSound("O", "assets/O.mp3");
// produceSound("p", "assets/p(l).mp3");
// produceSound("P", "assets/P.mp3");
// produceSound("a", "assets/a(l).mp3");
// produceSound("s","assets/s(l).mp3");
// produceSound("S", "assets/S.mp3");
// produceSound("d", "assets/d(l).mp3");
// produceSound("D", "assets/D.mp3");
// produceSound("f", "assets/f(l).mp3");
// produceSound("g", "assets/g(l).mp3");
// produceSound("G", "assets/G.mp3");
// produceSound("h", "assets/h(l).mp3");

    function setup(){
          canvas = createCanvas(1040, 300);
         engine = Engine.create();
         world = engine.world;

          pianoSoundA = loadSound("assets/a(l).mp3");

        
           key1 = new Key(50,200,50,200, "darkred");
          //window.addEventListener("keyDown", checkKeyPress, false);

           key2 = new Key(152,200,50,200, "darkred");
           key3 = new Key(254,200,50,200, "darkred");
           key4 = new Key(356,200,50,200, "darkred");
           key5 = new Key(458,200,50,200, "darkred");
           key6 = new Key(560,200,50,200, "darkred");
           key7 = new Key(662,200,50,200, "darkred");
           key8 = new Key(764,200,50,200, "darkred");
           key9 = new Key(866,200,50,200, "darkred");
           key10 = new Key(968,200,50,200, "darkred");
         
           miniKey1 = new BlackKey(101,150,50,100,"orange");
           miniKey2 = new BlackKey(203,150,50,100,"orange");
           miniKey3 = new BlackKey(305,150,50,100,"orange");
           miniKey4 = new BlackKey(407,150,50,100,"orange");
           miniKey5 = new BlackKey(509,150,50,100,"orange");
           miniKey6 = new BlackKey(611,150,50,100,"orange");
           miniKey7 = new BlackKey(713,150,50,100,"orange");
           miniKey8 = new BlackKey(815,150,50,100,"orange");
           miniKey9 = new BlackKey(917,150,50,100,"orange");
                   
           ground1 = new Ground(0,height, 2100,  20); 
           
          } 
            
          function draw(){ 
                 Engine.update(engine);

                 background("royalblue");

                 ground1.display();

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
                
                 miniKey1.display();
                 miniKey2.display();
                 miniKey3.display();
                 miniKey4.display();
                 miniKey5.display();
                 miniKey6.display();
                 miniKey7.display();
                 miniKey8.display();
                 miniKey9.display();
                 
                } 
                
        function keyPressed() {

              if (keyCode == "65") {
                this.key3.keyColor = "red";
                pianoSoundA.play();
              } else{
                this.key3.keyColor = "darkred";
              }

              if (keyCode == "83") {
                this.key4.keyColor = "red";
                } else{
                  this.key4.keyColor = "darkred";
                }

            
            }

            // window.addEventListener("keyDown", checkKeyPress, false); 
            // function checkKeyPress(key){
            //   if (keyCode == "65") {
            //     this.key3.keyColor = "red";
            //   } 
            // }

            // window.addEventListener("keyDown", checkKeyPress2, false); 
            // function checkKeyPress2(key2){
            //   if (keyCode == "83") {
            //     this.key4.keyColor = "red";
            //   } 
            // }