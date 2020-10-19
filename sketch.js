const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world; var box1;

var ground;
// setScreen("pianoScreen");
//This function will help produce the sound, and tell you how many keys you pressed in within the current session.
// function produceSound(key,sound) {
//   onEvent( "keypress", function(event){
// if (event.key === key) {
//   playSound(sound);
//   keyspressed++;
//   setText("keysPressed", "Keys Pressed (Current Session): " + keyspressed);
//   console.log(keyspressed);
//  }
// });
// }
//setScreen("pianoScreen");
//This is the code producing sound when PRESSING desired key. 

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

// function checkKeyPress(key){
//   if (keyCode === "65") {
//     this.key.keyColor = "blue";
//   } 

//   console.log("key pr")
// }
    function setup(){
         var canvas = createCanvas(1040, 300);
         engine = Engine.create();
         world = engine.world;

        
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

              //   function playNote(e){
              //     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
              //           key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
              
              //     if(!key) return;
              
              //     key.classList.add('playing');
              //     audio.currentTime = 0;
              //     audio.play();
              // }
              
              // window.addEventListener('keydown', playNote);
            
                  
                
        function keyPressed() {

              if (keyCode == "65") {
              this.key3.keyColor = "red";
              } else{
                this.key3.keyColor = "darkred";
              }

              if (keyCode == "83") {
                this.key4.keyColor = "red";
                } else{
                  this.key4.keyColor = "darkred";
                }

              if (keyCode === LEFT_ARROW) {
                this.key1.keyColor = "red";
              } else{
                this.key1.keyColor = "darkred";
              }  

              if (keyCode === DOWN_ARROW) {
                this.key2.keyColor = "red";
              } else{
                this.key2.keyColor = "darkred";
              } 
              
              if (keyCode === UP_ARROW) {
                this.key4.keyColor = "red";
              } else{
                this.key4.keyColor = "darkred";
              }  

              if (keyCode === UP_ARROW) {
                this.key4.keyColor = "red";
              } else{
                this.key4.keyColor = "darkred";
              }  

              if (keyCode === SHIFT) {
                this.key5.keyColor = "red";
              } else{
                this.key5.keyColor = "darkred";
              }  

              if (keyCode === BACKSPACE) {
                this.key6.keyColor = "red";
              } else{
                this.key6.keyColor = "darkred";
              }  

              if (keyCode === ALT) {
                this.key7.keyColor = "red";
              } else{
                this.key7.keyColor = "darkred";
              }  

              if (keyCode === TAB) {
                this.key8.keyColor = "red";
              } else{
                this.key8.keyColor = "darkred";
              }  

              if (keyCode === ENTER) {
                this.key9.keyColor = "red";
              } else{
                this.key9.keyColor = "darkred";
              }  

              if (keyCode === ESCAPE) {
                this.key10.keyColor = "red";
              } else{
                this.key10.keyColor = "darkred";
              }  

              
            }

            window.addEventListener("keyDown", checkKeyPress, false); 
            function checkKeyPress(key){
              if (keyCode == "65") {
                this.key3.keyColor = "red";
              } 
            }

            window.addEventListener("keyDown", checkKeyPress2, false); 
            function checkKeyPress2(key2){
              if (keyCode == "83") {
                this.key4.keyColor = "red";
              } 
            }