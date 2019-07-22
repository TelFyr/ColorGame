


var arr= ["r", "g", "b", "y"];
var userInput=[];
var gameOver=false;
var index=0;
var tempIndex=index;    

var firstTime=false;
var udris=false;
var counter =0;
var innerCounter=0;



function generateArray(){
    for(var i=1; i< 100; i++){
        var holder =Math.floor(Math.random() * 4) + 1;
        switch(holder){
            case 1: arr[i]="r";
            break;
            case 2: arr[i]="g";
            break;
            case 3: arr[i]="b";
            break;
            case 4: arr[i]="y";
            break;
        }  
    }
}

function playSound(soundFile){
    var sound = new Audio(soundFile);
    var playPromise=sound.play();
    if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Automatic playback started!
          // Show playing UI.
          sound.play();
        })
        .catch(error => {
          // Auto-play was prevented
          // Show paused UI.
          console.log("zgneris sunia");
        });
      }
    
}

function glow(button){
    
    button.addClass("active").delay(300).queue(function(next){
        $(this).removeClass("active");
        next();

    });

}

function GameOver(){
            playSound("sounds/wrong.mp3");
            startGame=false;
            index=0;
            counter=0;
            innerCounter=0;
            userInput=[];
            generateArray();
            var delay=1000;
            $("#level-title").text("Game Over");
            setTimeout(function() {    
                $("#level-title").text("Press Any Key To Restart");
            }, delay);    
            var restart= false;
            $(document).keypress(function(){
                restart =true;
                if(restart){
                    $(document).unbind('keypress ');
                    whichToGlow();
                }
            });

}
function whichToGlow(){
    $("#level-title").text("current level: "+ index);

    var delay = 500;
    setTimeout(function() {
    // your code
        if(arr[index]=="r"){
            glow($(".red"));
            playSound("sounds/red.mp3");
        }

        else if(arr[index]=="g"){
            glow($(".green"));
            playSound("sounds/green.mp3");
        }
        else if(arr[index]=="b"){
            glow($(".blue"));
            playSound("sounds/blue.mp3");
        }
        else if(arr[index]=="y"){
            glow($(".yellow"));
            playSound("sounds/yellow.mp3");
        }    
    }, delay);
}

    // Begining
    var startGame=false;
    //check if user has started the game
    $(document).keypress(function(){
        startGame=true;
        
        if(startGame){
           $(document).unbind('keypress ');
            //starting the game
            generateArray();
            whichToGlow();

            //red event listener
             $(".red").click(function(){
                    userInput.push("r");
                    
                    for(var i=0; i< userInput.length; i++){
                    if(userInput[i]!=arr[i]){
                        udris=false;
                        GameOver();
                        break;
                        //reset
                    }
                    else{
                        udris=true;

                    }
                } 
                if(udris){
                    playSound("sounds/red.mp3");
                    glow($(".red"));
                    counter++;
                    if(innerCounter>index){
                            
                    }
                    else{
                    innerCounter++;
                    }
                    if(counter==innerCounter){
                        
                        userInput=[];
                        counter =0;
                        index++;
                        whichToGlow();
            
            
                    }
                }
            });
            //green event listener
            $(".green").click(function(){
                userInput.push("g");
        
                
                for(var i=0; i< userInput.length; i++){
                    if(userInput[i]!=arr[i]){
                        udris=false;
                        GameOver();
                        break;
                        //reset
                    }
                    else{
                        udris=true;

                    }
                } 
                if(udris){
                    playSound("sounds/green.mp3");
                    glow($(".green"));

                    counter++;
                    if(counter==innerCounter){   
                        userInput=[];
                        counter =0;
                        index++;
                        whichToGlow();
        
        
                    }
                    firstTime=true;
                    }
            });
            
            //blue eventlistener
            $(".blue").click(function(){
                userInput.push("b");
                
                for(var i=0; i< userInput.length; i++){
                    if(userInput[i]!=arr[i]){
                        udris=false;
                        GameOver();
                        break;
                        //reset
                    }
                    else{
                        udris=true;

                    }
                } 
                if(udris){
                    playSound("sounds/blue.mp3");
                    glow($(".blue"));
                    counter++;
                    if(counter==innerCounter){   
                        userInput=[];
                        counter =0;
                        index++;
                        whichToGlow();
        
        
                    }
                    firstTime=true;
                    }
            });
        
            //yellow eventlistener
            $(".yellow").click(function(){
                userInput.push("y");
                
                for(var i=0; i< userInput.length; i++){
                    if(userInput[i]!=arr[i]){
                        
                        udris=false;
                        GameOver();
                        break;
                        //reset
                    }
                    else{
                        udris=true;

                    }
                } 
                if(udris){
                    playSound("sounds/yellow.mp3");
                    glow($(".yellow"));
                    counter++;
                    if(counter==innerCounter){   
                        userInput=[];
                        counter =0;
                        index++;
                        whichToGlow();
        
        
                    }
                    firstTime=true;
                    }
            });
            //here ends event listener section
        }//here ends the "if(gameStarted)" checker
        
    });//here ends the keypress eventlistener






    