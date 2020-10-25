const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world; var box1;

var ground1, canvas;

var musicNote = "";

var pianoSoundA, pianoSoundS, pianoSoundD, pianoSoundT, pianoSoundY, pianoSoundU, pianoSoundI, pianoSoundO, pianoSoundP, pianoSoundF;

var key1, key2, key3, key4, key5,key6,key7,key8,key9,key10;

var miniKey1,miniKey2,miniKey3,miniKey4,miniKey5,miniKey6,miniKey7,miniKey8,miniKey9,miniKey10;
var i =1;

var numbers = 5;

var keyPrint = ["a", "s", "d", "t", "y", "u", "i", "o", "p", "f", "s", "d", "t", "y", "u", "i", "o", "p", "f"];

var recordKey = [];

    function setup(){
      canvas = createCanvas(1050, 400);
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

      textSize(100);
      text(keyPrint[i], 500, 80); 
      textSize(30);
      text(numbers, 120, 50); 
      text("Score: ", 20, 50); 
      
      
    } 


  
    function keyPressed() {
      if (keyCode == "65") {
        recordKey.push("a");
        console.log(recordKey);
        this.key1.keyColor = "red";
        pianoSoundA.play();
        musicNote = musicNote + keyPrint[i]
        // document.write(numbers);
        draw();
        const intersection = keyPrint.filter(element => recordKey.includes(element));
        console.log("score "+ intersection.length) 
        i++;
        } else{
        this.key1.keyColor = "darkred";
      }
      
      if (keyCode == "83") {
        this.key2.keyColor = "red";
        pianoSoundS.play();
        draw();
        i++;
        recordKey.push("s");
        console.log(recordKey);

        console.log(keyPrint[1]);
      } else{
        this.key2.keyColor = "darkred";
      }

      if (keyCode == "68") {
        this.key3.keyColor = "red";
        pianoSoundD.play();
        draw();
        i++;
        recordKey.push("d");
        console.log(recordKey);

      } else{
        this.key3.keyColor = "darkred";
      }

      if (keyCode == "84") {
        this.key4.keyColor = "red";
        pianoSoundT.play();
        draw();
        i++;
        recordKey.push("t");
        console.log(recordKey);
        } else{
          this.key4.keyColor = "darkred";
        }

      if (keyCode == "89") {
          this.key5.keyColor = "red";
          pianoSoundY.play();
          draw();
          i++;
          recordKey.push("y");
          console.log(recordKey);
          } else{
            this.key5.keyColor = "darkred";
      }  

      if (keyCode == "85") {
            this.key6.keyColor = "red";
            pianoSoundU.play();
            draw();
            i++;
            recordKey.push("u");
            console.log(recordKey);
            } else{
              this.key6.keyColor = "darkred";
      }   
                    
          if (keyCode == "73") {
            this.key7.keyColor = "red";
            pianoSoundI.play();
            draw();
            i++;
            recordKey.push("i");
            console.log(recordKey);
            } else{
              this.key7.keyColor = "darkred";
            }    

            if (keyCode == "79") {
              this.key8.keyColor = "red";
              pianoSoundO.play();
              draw();
              i++;
              recordKey.push("o");
              console.log(recordKey);
              } else{
                this.key8.keyColor = "darkred";
              } 
                        
              if (keyCode == "80") {
                this.key9.keyColor = "red";
                pianoSoundP.play();
                draw();
                i++;
                recordKey.push("p");
                console.log(recordKey);
                } else{
                    this.key9.keyColor = "darkred";
                }    

                if (keyCode == "70") {
                  this.key10.keyColor = "red";
                  pianoSoundF.play();
                  draw();
                  i++;
                  recordKey.push("f");
                  console.log(recordKey);
                  } else{
                      this.key10.keyColor = "darkred";
                    }                    
          }           


   
