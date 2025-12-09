let userScore = 0;
let compScore = 0;
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const draw =()=>{
    console.log("Draw");
    msg.innerText = "Game Was Draw";
    msg.style.backgroundColor = "black";
}

const genCompChoice =()=>{
    const option = ["Rock","Paper","Scessors"]
    const indexNum = Math.floor(Math.random()*3);
    return option[indexNum];
}
const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win");
        msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose");
        msg.innerText = `You Lose ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{
    console.log("User choice",userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice",compChoice);

    if(userChoice === compChoice){
        draw();
    }else{
        let userWin = true;
        if(userChoice==="Rock"){
            userWin=compChoice==="Paper"? false : true;
        }else if(userChoice==="Paper"){
            userWin=compChoice==="Scessors"? false : true;
        }else{
            userWin=compChoice==="Rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        
    })
})
