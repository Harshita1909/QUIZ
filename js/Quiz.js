class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question();
      question.display();
    }
  }

  play(){
    //write code here to hide question elements

  question.hide();
  


    //write code to change the background color here
  background("yellow");
    //write code to show a heading for showing the result of Quiz
    textSize(35);
    text("RESULT OF THE QUIZ",0,100);
    //call getContestantInfo( ) here
    Contestant.getContestantInfo();

    //write condition to check if contestantInfor is not undefined
     if(allContestant !== undefined){
       fill("Blue");
       textSize(20);
       text("*NOTE: Contestant who answred correct are highlighted in green colour!",130,230);
     }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    for(var plr in allContestant){
      var correctAns = "2";
      if(correctAns === allContestant[plr].answer){
        fill("Green");
      }
        else{
          fill("red")
        }
    } 
  }

}
