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
    const userContainer = document.querySelector("#user-images");
    userContainer.innerHTML = ""
    images.forEach(image => {
        
        const img = document.createElement("img");
        img.src = image.path;  
        img.alt = image.name; 
        img.title = image.name; 

        container.appendChild(img);
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
    
    if(random >= 0 && randomNumber < 1/3){
        computerMove = "Rock"
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = "Paper"
    }
    else if (randomNumber >= 2/3 && randomNumber < 1 ){
        computerMove = "Scissors"
    }
    
}
computerMove()