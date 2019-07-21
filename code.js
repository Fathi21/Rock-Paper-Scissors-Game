console.log("Working");

var fa_hand_rock = document.querySelector(".fa-hand-rock");
var fa_hand_paper = document.querySelector(".fa-hand-paper");
var fa_hand_scissors = document.querySelector(".fa-hand-scissors");
var user_winning = document.querySelector(".user_winning");
var computer_winning = document.querySelector(".computer_winning");
var whoWon = document.querySelector(".whoWon");
var userwinningTimes = [];
var computerwinningTimes = [];

function random(){
    var random_r_p_s = ["r", "p", "s"];
    var gen_random_r_p_s = Math.floor(Math.random() * 3);
    return randomarry = random_r_p_s[gen_random_r_p_s];
}


function checkingWinner(input){
    var computer_choice = random();
    
    console.log("user input", input)
    console.log("computer choice", computer_choice)
    

    switch(input + randomarry)
    {
        case "rs":
        case "pr":
        case "sp":
            userwinningTimes.push(input);
            user_winning.textContent = userwinningTimes.length;
            whoWon.textContent = "user won";
            console.log("user winning times = ", userwinningTimes.length);
            console.log("user won");
            break;

        case "rp":
        case "ps":
        case "sr":
            computerwinningTimes.push(randomarry);
            computer_winning.textContent = computerwinningTimes.length;
            whoWon.textContent = "computer won";
            console.log("computer winning times = ", computerwinningTimes.length);
            console.log("computer won");
            break;

        case "rr":
        case "pp":
        case "ss":
            whoWon.textContent = "DRAW";
            console.log("draw");
            break;
    }
}

fa_hand_rock.addEventListener("click", function(){
    checkingWinner ("r");
})


fa_hand_paper.addEventListener("click", function(){
    checkingWinner ("p");
   
})


fa_hand_scissors.addEventListener("click", function(){
    checkingWinner ("s");
    
})
