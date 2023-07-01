const choices=["rock" , "paper" , "scissors" ];
const userChoice=prompt("choose rock , paper , scissors");

if(userChoice){
    console.log(`You Choose : ${userChoice}`);
}else{
    console.log("You cheated !");
}

const randomNumber = Math.floor(Math.random() * 3);
const copmuterChoice = choices[randomNumber];
console.log(`Copmuter Choice : ${copmuterChoice}`);

if(userChoice === copmuterChoice ){
    console.log("It's a tiel");
}else if(userChoice === "rock"){
    if(copmuterChoice === "scissors"){
        console.log("You Win");
    }else{
        console.log("You Lose");
    }
}else if(userChoice === "paper"){
    if(copmuterChoice === "rock"){
        console.log("You Win");
    }else{
        console.log("You Lose");
    }
}else if(userChoice === "scissors"){
    if(copmuterChoice === "paper"){
        console.log("You Win");
    }else{
        console.log("You Lose");
    }
}


