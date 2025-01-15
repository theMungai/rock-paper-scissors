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

    function randomMove(){
        const randomNumber = Math.random();
        let computerMove = "";
        
        if(randomNumber >= 0 && randomNumber < 1/3){
            computerMove = images[1]
        }
        else if(randomNumber >= 1/3 && randomNumber < 2/3){
            computerMove = images[0]
        }
        else if (randomNumber >= 2/3 && randomNumber < 1 ){
            computerMove = images[2]
        }
        
    }

    randomMove()
}

function playerGame(playerMove){
    const computerMove = randomMove()

    let results = ""
    if(playerMove === "Rock"){
        if(computerMove === images[1])
        {
            results = "Tie"
        }

        else if(computerMove === images[0])
        {
            results = "Computer Wins"
        }
        else if(computerMove === images[2])
        {
            results = "You win"
        }

        console.log(results)
    }
    
    else if(playerMove === "Paper")
    {
        if(computerMove === images[1])
        {
            results = "You win"
        }

        else if(computerMove === images[0])
        {
            results = "Tie"
        }

        else if(computerMove === images[2])
        {
            results = "Computer wins"
        }
    }
    
    else if(playerMove === "Scissors")
    {
        if(computerMove === images[1])
        {
            results = "Computer wins"
        }

        else if(computerMove === images[0])
        {
            results = "You win"
        }

        else if(computerMove === images[2])
        {
            results = "Tie"
        }
    }
}



document.querySelector(".restartGame").addEventListener("click", () => {
    window.location.reload(true)
})

