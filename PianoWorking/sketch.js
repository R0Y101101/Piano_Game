const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world; var box1;

var ground, canvas;

var pianoSoundA, pianoSoundS, pianoSoundD, pianoSoundT, pianoSoundY, pianoSoundU, pianoSoundI, pianoSoundO, pianoSoundP, pianoSoundF, key1, key2, key3, key4, key5,key6,key7,key8,key9,key10;

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
        pianoSoundS = loadSound("assets/s(l).mp3");
        pianoSoundD = loadSound("assets/d(l).mp3");
        pianoSoundT = loadSound("assets/t(l).mp3");
        pianoSoundY = loadSound("assets/y(l).mp3");
        pianoSoundU = loadSound("assets/u(l).mp3");
        pianoSoundI = loadSound("assets/i(l).mp3");
        pianoSoundO = loadSound("assets/o(l).mp3");
        pianoSoundP = loadSound("assets/p(l).mp3");
        pianoSoundF = loadSound("assets/f(l).mp3");

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
                this.key1.keyColor = "red";
                pianoSoundA.play();
                //alert("You pressed the A note");
              } else{
                this.key1.keyColor = "darkred";
              }

              if (keyCode == "83") {
                this.key2.keyColor = "red";
                pianoSoundS.play();
                //alert("You pressed the S note");
                } else{
                  this.key2.keyColor = "darkred";
                }

            if (keyCode == "68") {
              this.key3.keyColor = "red";
              pianoSoundD.play();
              //alert("You pressed the D note");
              } else{
                this.key3.keyColor = "darkred";
              }

              if (keyCode == "84") {
                this.key4.keyColor = "red";
                pianoSoundT.play();
                //alert("You pressed the D note");
                } else{
                  this.key4.keyColor = "darkred";
                }

                if (keyCode == "89") {
                  this.key5.keyColor = "red";
                  pianoSoundY.play();
                  //alert("You pressed the D note");
                  } else{
                    this.key5.keyColor = "darkred";
                  }  

                  if (keyCode == "85") {
                    this.key6.keyColor = "red";
                    pianoSoundU.play();
                    //alert("You pressed the D note");
                    } else{
                      this.key6.keyColor = "darkred";
                    }   
                    
                    if (keyCode == "73") {
                      this.key7.keyColor = "red";
                      pianoSoundI.play();
                      //alert("You pressed the D note");
                      } else{
                        this.key7.keyColor = "darkred";
                      }    

                      if (keyCode == "79") {
                        this.key8.keyColor = "red";
                        pianoSoundO.play();
                        //alert("You pressed the D note");
                        } else{
                          this.key8.keyColor = "darkred";
                        } 
                        
                        if (keyCode == "80") {
                          this.key9.keyColor = "red";
                          pianoSoundP.play();
                          //alert("You pressed the D note");
                          } else{
                            this.key9.keyColor = "darkred";
                          }    

                          if (keyCode == "70") {
                            this.key10.keyColor = "red";
                            pianoSoundF.play();
                            //alert("You pressed the D note");
                            } else{
                              this.key10.keyColor = "darkred";
                            }    
          }