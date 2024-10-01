let userSCore = document.getElementById("your-score");
let computerSCore = document.getElementById("computer-score");
const resultMessageContainer = document.getElementById("result-message-container");
const user = document.getElementById("user");
const computer = document.getElementById("computer")
const userRock = document.getElementById("user-rock");
const userPaper = document.getElementById("user-paper");
const userScissors = document.getElementById("user-scissors");
const computerRock = document.getElementById("computer-rock");
const computerPaper = document.getElementById("computer-paper");
const computerScissors = document.getElementById("computer-scissors");
const resultMessage = document.getElementById("whoever-wins");

let usercount = 0;
let computercount = 0;

const computerChoice = [computerRock, computerPaper, computerScissors];
const randomChoice = Math.floor(Math.random() * computerChoice.length);
let computerFinalChoice = (computerChoice[randomChoice]);

userImages.style.display = "block";
computerImages.style.display = "block";

function showRock(){
    computerFinalChoice.style.display = "block";
    resultMessageContainer.style.display = "block";
    userRock.style.display = "block";
    user.style.display = "block";
    computer.style.display = "block";
    
    
    

    if(computerFinalChoice === computerRock){
        resultMessage.textContent = `Draw`;
    }
    else if (computerFinalChoice === computerPaper){
        resultMessage.textContent = `Computer Wins`;
        computercount = computercount + 1;
        computerSCore.textContent = computercount;
        
    }

    else if(computerFinalChoice === computerScissors){
        resultMessage.textContent = `You won`;
        usercount = usercount + 1;
        userSCore.textContent = usercount;
    }

}

function showPaper(){
    computerFinalChoice.style.display = "block";
    resultMessageContainer.style.display = "block";
    userPaper.style.display = "block";
    user.style.display = "block";
    computer.style.display = "block";
    

    if(computerFinalChoice === computerRock){
        resultMessage.textContent = `You won`;
        usercount = usercount + 1;
        userSCore.textContent = usercount;
    }
    else if (computerFinalChoice === computerPaper){
        resultMessage.textContent = `Draw`
    }

    else if(computerFinalChoice === computerScissors){
        resultMessage.textContent = `Computer Wins`;
        computercount = computercount + 1;
        computerSCore.textContent = computercount;
    }
}


function showScissors(){
    computerFinalChoice.style.display = "block";
    resultMessageContainer.style.display = "block";
    userScissors.style.display = "block";
    user.style.display = "block";
    computer.style.display = "block";

    if(computerFinalChoice === computerRock){
        resultMessage.textContent = `Computer Wins`;
        computercount = computercount + 1;
        computerSCore.textContent = computercount;
    }
    else if (computerFinalChoice === computerPaper){
        resultMessage.textContent = `You won`;
        usercount = usercount + 1;
        userSCore.textContent = usercount;
    }

    else if(computerFinalChoice === computerScissors){
        resultMessage.textContent = `Draw`
    }
}

function restartGame(){
    resultMessageContainer.style.display = "none"; 
    location.reload(true)
}
