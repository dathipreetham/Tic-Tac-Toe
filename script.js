let boxes=document.querySelectorAll(".btn");
let playX=true;
const winnerCondition=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let Para=document.querySelector(".para")

const resetGame=document.querySelector(".reset-btn")
const newGame=document.querySelector(".new-btn")

const reset=()=>{
    playX=true;
    enableBoxes();
    Para.classList.add("hide");
}

resetGame.addEventListener("click",reset);
newGame.addEventListener("click",reset);


const disableBoxes=()=>{
    for(let btn of boxes){
        btn.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let btn of boxes){
        btn.disabled=false;
        btn.innerText=""
    }
}

const showWinner=(play1)=>{
    Para.innerText=`The winner is ${play1}`
    Para.classList.remove("hide")
    disableBoxes()
}

const checkWinner= ()=>{
    for(let i of winnerCondition){
        let play1=boxes[i[0]].innerText;
        let play2=boxes[i[1]].innerText;
        let play3=boxes[i[2]].innerText;
        if(play1!="" && play2!="" && play3!=""){
            if(play1===play2 && play2===play3){
                console.log(`The winner is ${play1}`)
                showWinner(play1)
            }
        }
    }
}
boxes.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(playX){
            btn.innerText="X";
            playX=false;
        }
        else{
            btn.innerText="O";
            playX=true;
        }
        btn.disabled=true;
        checkWinner();
    })
})

