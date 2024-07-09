let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const  msg =document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");
const genComChoice = () => {
    let options = ["rock", "paper" , "scissors"];
    const randdIdx = Math.floor(Math.random() * 3);
    return options[randdIdx];
} 


const drawGame = ()=>{
    
    msg.innerText = "Game was draw, Play again!";
    msg.style.backgroundColor = "#CEB1BE";


}

const showWinnner = (userwin,userChoice,compChoice ) =>{
   if(userwin){
    console.log("You win");
    userScore++;
    userScorepara.innerText = userScore;

    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
   }else{
    console.log("You lose");
    compScore++;
    compScorepara.innerText = compScore;

    msg.innerText = `You lost. ${compChoice} beats yours ${userChoice}`;
    msg.style.backgroundColor =  "red";
   }
}
const playGame = (userChoice) => {
    console.log("user choice = " ,userChoice);
    //Generate computer choice --> modular
    const compChoice =genComChoice();
    console.log("Comp choice = " ,compChoice);
    if(userChoice === compChoice){
        //draw
        drawGame();
    }else {
        let userwin = true ; 
        if(userChoice === "rock"){
            //scissors,paper
            userwin = compChoice === "paper"? false : true;
        }else if( userChoice === "paper"){
            //scissors ,paper
            userwin = compChoice === "scissors" ? false : true;

        }else {
            //rock, paper
            compChoice === "rock" ? flase :true;
        }
        showWinnner(userwin,userChoice,compChoice)
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        
        playGame(userChoice);
    });
});