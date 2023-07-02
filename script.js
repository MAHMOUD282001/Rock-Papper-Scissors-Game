let gameOptions = [
    "Rock",
    "Paper",
    "Scissors"
];

let result = document.querySelector(".result")

let choices = document.querySelector(".choices")

let gameBtn = document.querySelectorAll(".game-btn")

gameBtn.forEach(btn =>{
    btn.addEventListener("click", () =>{
        let rondamChoice = Math.floor(Math.random() * gameOptions.length)
        
        choices.innerHTML = `You Chooses ${btn.innerText} && Computer Choose ${gameOptions[rondamChoice]}`
        
        if(gameOptions[rondamChoice] === btn.innerText) {
            result.innerHTML = "Drow"
        }
        
        else if(gameOptions[rondamChoice] === "Rock" && btn.innerText === "Paper"){
            result.innerHTML = "You Win"
        }
        
        else if(gameOptions[rondamChoice] === "Paper" && btn.innerText === "Rock"){
            result.innerHTML = "Computer Wins"
        }
        
        else if(gameOptions[rondamChoice] === "Rock" && btn.innerText === "Scissors"){
            result.innerHTML = "Computer Wins"
        }
        
        else if(gameOptions[rondamChoice] === "Scissors" && btn.innerText === "Rock"){
            result.innerHTML = "You Win"
        }
        
        else if(gameOptions[rondamChoice] === "Scissors" && btn.innerText === "Paper"){
            result.innerHTML = "Computer Wins"
        }
        
        else if(gameOptions[rondamChoice] === "Paper" && btn.innerText === "Scissors"){
            result.innerHTML = "You Win"
        }
    })
})