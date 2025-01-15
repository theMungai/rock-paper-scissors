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
            randomMove()
            playerGame(images[4].path)
    
    });

    const paperButton = document.querySelector(".user-paper");
    paperButton.addEventListener("click", () => {
        popupDialog.style.display = "block"
        const img = document.createElement("img");
            img.src = images[3].path;  
            displayContainer.appendChild(img);
            randomMove()
            playerGame(images[3].path)
    
    });

    const scissorsButton = document.querySelector(".user-scissors");
    scissorsButton.addEventListener("click", () => {
        popupDialog.style.display = "block"
        const img = document.createElement("img");
            img.src = images[5].path;  
            displayContainer.appendChild(img);
            randomMove()
            playerGame(images[5].path)
    
    });

    function randomMove(){
        const randomNumber = Math.random();
        let computerMove = "";
        
        if(randomNumber >= 0 && randomNumber < 1/3){
            computerMove = images[1].path
        }
        else if(randomNumber >= 1/3 && randomNumber < 2/3){
            computerMove = images[0].path
        }
        else if (randomNumber >= 2/3 && randomNumber < 1 ){
            computerMove = images[2].path
        }
        
    }
    
    
    const winnerMessage = document.querySelector("#whoever-wins");
    function playerGame(playerMove){
        const computerMove = randomMove()
    
        let results = ""
        if(playerMove === images[4].path){
            if(computerMove === images[1].path)
            {
                results = "Tie"
                winnerMessage.textContent = results
            }
    
            else if(computerMove === images[0].path)
            {
                results = "Computer Wins"
                winnerMessage.textContent = results
            }
            else if(computerMove === images[2].path)
            {
                results = "You win"
                winnerMessage.textContent = results
            }
    
            console.log(results)
        }
        
        else if(playerMove === images[3].path)
        {
            if(computerMove === images[1].path)
            {
                results = "You win"
                winnerMessage.textContent = results
            }
    
            else if(computerMove === images[0].path)
            {
                results = "Tie"
                winnerMessage.textContent = results
            }
    
            else if(computerMove === images[2].path)
            {
                results = "Computer wins"
                winnerMessage.textContent = results
            }
        }
        
        else if(playerMove === images[5].path)
        {
            if(computerMove === images[1].path)
            {
                results = "Computer wins"
                winnerMessage.textContent = results
            }
    
            else if(computerMove === images[0].path)
            {
                results = "You win"
                winnerMessage.textContent = results
            }
    
            else if(computerMove === images[2].path)
            {
                results = "Tie"
                winnerMessage.textContent = results
            }
        }
    }

}

document.querySelector(".restartGame").addEventListener("click", () => {
    window.location.reload(true)
})

