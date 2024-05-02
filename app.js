let boxes=document.querySelectorAll(".boxes");
let newgamebutton=document.querySelector(".newgmbtn");
let resetbutton=document.querySelector(".rstgmbtn");
let message=document.querySelector(".msg");
let messagecontainer=document.querySelector(".msg-container");

let turnO=true;
let count=0;
let iswinner=false;

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            box.style.color="blue"; 
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="green"; 
            turnO=true;
        }
        box.disabled=true;
        count++;
        checkwinner();
         iswinner=checkwinner();

        if(count===9 && !iswinner ){
            gamedraw();
        }
    });
});

const resetgame=()=>{
    enableboxes();
    messagecontainer.classList.add("hide");
    count=0;
    iswinner=false;
}


const gamedraw=()=>{
    message.innerText="Game was a Draw.";
    messagecontainer.classList.remove("hide");
    disableboxes();
};

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const checkwinner=()=>{
    for(let pattern of winpatterns){
       let pos1val=boxes[pattern[0]].innerText;
       let pos2val=boxes[pattern[1]].innerText;
       let pos3val=boxes[pattern[2]].innerText;
    if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val)
        {showwinner(pos1val);
        return true;}
    }
}};


const showwinner=(winner)=>{
    message.innerText=`Congratulations! winner is player ${winner}`;
    messagecontainer.classList.remove("hide");
    disableboxes();
};

newgamebutton.addEventListener("click",resetgame);
resetbutton.addEventListener("click",resetgame);