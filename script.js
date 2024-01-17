let userscore = 0;
let compscore = 0;
let USERscore = document.getElementById("userscore");
let COMPscore = document.getElementById("compscore");
let returnbtn = document.querySelector(".retun");


const computerchoice = () =>{
    let options = ["rock","paper","scissor"];
    let rdmidx = Math.floor(Math.random()*3);
    return options[rdmidx];
}

const playgame = (userchoice) => {
console.log("User choice = ",userchoice);
const compchoice = computerchoice();
console.log("Computer choice = ",compchoice);

if(userchoice == "rock" && compchoice == "paper" ){
    console.log("Computer wins");
    compscore++;
    COMPscore.innerText = compscore;
    
 }
 else if(userchoice == "rock" && compchoice == "scissor" ){
     console.log("User wins");
     userscore++;
     USERscore.innerText = userscore;
 }
 else if(userchoice == "paper" && compchoice == "rock" ){
     console.log("User wins");
     userscore++;
     USERscore.innerText = userscore;
 }
 else if(userchoice == "paper" && compchoice == "scissor" ){
    console.log("Computer wins");
    compscore++;
    COMPscore.innerText = compscore;
    
}
else if(userchoice == "scissor" && compchoice == "rock" ){
    console.log("Computer wins");
    compscore++;
    COMPscore.innerText = compscore;
}
else if(userchoice == "scissor" && compchoice == "paper" ){
   console.log("User wins");
   userscore++;
   USERscore.innerText = userscore;
}
else if(compchoice == "rock" && userchoice == "paper" ){
    console.log("Computer wins");
    compscore++;
    COMPscore.innerText = compscore;
 }
 else if(compchoice == "rock" && userchoice == "scissor" ){
     console.log("User wins");
     userscore++;
     USERscore.innerText = userscore;
 }
 else if(compchoice == "paper" && userchoice == "rock" ){
     console.log("User wins");
     userscore++;
     USERscore.innerText = userscore;
 }
 else if(compchoice == "paper" && userchoice == "scissor" ){
    console.log("Computer wins");
    compscore++;
    COMPscore.innerText = compscore;
}
else if(compchoice == "scissor" && userchoice == "rock" ){
    console.log("Computer wins");
    compscore++;
    COMPscore.innerText = compscore;
}
else if(compchoice == "scissor" && userchoice == "paper" ){
   console.log("User wins");
   userscore++;
   USERscore.innerText = userscore;
}
else{
    console.log("It's a draw");
    compscore++;
    COMPscore.innerText = compscore;
    userscore++;
   USERscore.innerText = userscore;
}

 
}

let button = document.querySelectorAll(".btn");
button.forEach((btn) =>{
btn.addEventListener("click",()=>{
    console.log("button clicked");
    const userchoice =  btn.getAttribute("id");
    playgame(userchoice);
})
})

returnbtn.addEventListener("click",() =>{
    USERscore.innerText = "0";
    COMPscore.innerText = "0";
    userscore = 0;
    compscore = 0;
})