// Fetching images from the JSON file

function fetchJSONData(){
    fetch("./images.json")
    .then((res) => {
        if(!res.ok){
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    })
    .then((data) => 
        displayImages(data.images))
    .catch((error) => 
        console.error("Unable to fetch data:", error))
}
fetchJSONData()

function displayImages(images){
    const displayContainer = document.querySelector("#result-container");
    displayContainer.innerHTML = ""
   
    const popupDialog = document.querySelector("#result-message-container");
    
    // Handling Buttons when clicked
    const rockButton = document.querySelector(".user-rock");
    rockButton.addEventListener("click", () => {
        popupDialog.style.display = "block"
        const img = document.createElement("img");
            img.src = images[4].path;  

            displayContainer.appendChild(img);
    
    });

    const paperButton = document.querySelector(".user-paper");
    paperButton.addEventListener("click", () => {
        popupDialog.style.display = "block"
        const img = document.createElement("img");
            img.src = images[3].path;  

            displayContainer.appendChild(img);
    
    });

    const scissorsButton = document.querySelector(".user-scissors");
    scissorsButton.addEventListener("click", () => {
        popupDialog.style.display = "block"
        const img = document.createElement("img");
            img.src = images[5].path;  

            displayContainer.appendChild(img);
    
    });
}

function playerGame(playerMove){
    const computerMove = randomMove()

    let results = ""
    if(playerMove === "Rock"){
        if(computerMove === "Rock")
        {
            results = "Tie"
        }

        else if(computerMove === "Paper")
        {
            results = "Computer Wins"
        }
        else if(computerMove === "Scissors")
        {
            results = "You win"
        }
    }
    
    else if(playerMove === "Paper")
    {
        if(computerMove === "Rock")
        {
            results = "You win"
        }

        else if(computerMove === "Paper")
        {
            results = "Tie"
        }

        else if(computerMove === "Scissors")
        {
            results = "Computer wins"
        }
    }
    
    else if(playerMove === "Scissors")
    {
        if(computerMove === "Rock")
        {
            results = "Computer wins"
        }

        else if(computerMove === "Paper")
        {
            results = "You win"
        }

        else if(computerMove === "Scissors")
        {
            results = "Tie"
        }
    }
}

function randomMove(){
    const randomNumber = Math.random();
    let computerMove = "";
    
    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = "Rock"
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = "Paper"
    }
    else if (randomNumber >= 2/3 && randomNumber < 1 ){
        computerMove = "Scissors"
    }
    
}
randomMove()

document.querySelector(".restartGame").addEventListener("click", () => {
    window.location.reload(true)
})

