var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;

// if we click on  the  start/reset
document.getElementById("startreset").onclick = function(){
    //if we are playing 
    if(playing == true){
        location.reload(); // reload page
    }else{//if we are not playing
        
        //change mode to playing
        playing = true;
        
        //set score to 0
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
       
        //show countdown box
       document.getElementById("timeremaining").style.display = "block";
        timeremaining = 60;
       document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
        //hide game over box
        
        hide("gameOver");
        
        //change button text to "reset game"
       document.getElementById("startreset").innerHTML = "Reset Game";
        
            //start countdown
        
        startCountdown();
        
        //generate new Q&A
        
        generateQA();
   }
    
}
// clicking on an answer box

for (i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
    // check if we are playing

    if(playing==true){ //yes
    if(this.innerHTML == correctAnswer){
    //correct answer

    //increase score by 1
    score++;
    document.getElementById("scorevalue").innerHTML = score;

    //hide wrong box and showe correct

    hide("wrong");
    show("correct");
    setTimeout(function(){
    hide("correct");
},1000);


//Generate new question

generateQA();

}else{
    //wrong answer
    hide("correct");
    show("wrong");
    setTimeout(function(){
        hide("wrong");
    },1000);
}
}
}
}
      
        
    
//if we are playing 
    // reload page
//if we are not playing
        //set score to 0
        //show countdown box
        //reduce time by 1 sec in loops
            //time left?
                //yes -> continue
                //no -> game over
        //change button text to "reset game"
        //generate new question & answers


//if we click on  answer box
        //if we are playing
            //correct?
                //yes
                    //increase score
                    //show correct box for 1sec
                    //generate new Q&A
                //no
                    //show try again box for 1 sec 


//functions

//starts counter
function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if(timeremaining == 0){//game over
        stopCountdown();
           show("gameOver");
            document.getElementById("gameOver").innerHTML = "<p>Game over!</p><p>Your score is " + score + ".</p>";
            
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
          }
    }, 1000);
}

//stop counter
 function stopCountdown(){
     clearInterval(action);
 }

//hide an element
function hide(Id) {
    document.getElementById(Id).style.display = "none";
}

//show an element
function show(Id) {
    document.getElementById(Id).style.display = "block";
}

//generate Q&A

function generateQA() {
    var x = 1+ Math.round(9*Math.random());
    var y = 1+ Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1+ Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer; //fill one box with the correct answer
    
    //fill other boxes with wrong answers
    
    var answers = [correctAnswer];
    
    for(i=1; i<5; i++) {
        if(i != correctPosition) {
            var wrongAnswer; 
            do{ 
                wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); // a wrong answer
            }while(answers.indexOf(wrongAnswer)>-1)
           
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
            
        }
    }
}











