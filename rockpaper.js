let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score")
const compscorepara=document.querySelector("#comp-score")





const gencompchoice=()=>{
    const options=["rock","paper","scissors"]
    const randidx= Math.floor(Math.random()*3)
    return options[randidx];
}

const drawgame=()=>{
    console.log("game was draw")
    msg.innerText="drwah...purahh"
     msg.style.backgroundColor="#081b31"
};
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++
        userscorepara.innerText=userscore;
        console.log("you win");
        msg.innerText=`you won your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor="green"
    }else{
        compscore++
        compscorepara.innerText=compscore;
        console.log("you lost")
        msg.innerText=`you lost ${compchoice} beats your ${userchoice}`
        msg.style.backgroundColor="red"
    }
}


const playgame =(userchoice)=>{
    console.log("user choice=",userchoice);
    //generate coumpuer choices
    const compchoice=gencompchoice();
    console.log("computer choice=",compchoice);

    if(userchoice===compchoice){
        //draw null
        drawgame();
    }
    else {
        let userWin = true;
        if (userchoice === "rock") {
          //scissors, paper
          userWin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
          //rock, scissors
          userWin = compchoice === "scissors" ? false : true;
        } else {
          //rock, paper
          userWin = compchoice === "rock" ? false : true;
        }
        showwinner(userWin,userchoice,compchoice);
      }
    };




choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        //console.log("choice was selected",userchoice )
        playgame(userchoice)
    })
})