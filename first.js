let boxes =document.querySelectorAll(".box");
let resetbtn= document.querySelector("#reset");
let turn0=true; // to track the players turn
let newGame_btn= document.querySelector("#newgame-btn");
let msgcontainer=document.querySelector(".msg-container");
let message=document.querySelector("#msg");
let audio = new Audio("music.mp3");
let audioclick= new Audio("ting.mp3");
let winpatterns= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const resetgame= ()=>{
    turn0=true;
    enableboxes();
    audio.pause();
    audio.currentTime = 0; 
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
       
        if(turn0 ){
            box.innerText="0";
            turn0=false;
            audioclick.play();
           
        
        }else{
           
            box.innerText="X"
            turn0=true;
            audioclick.play();
            
        }
        box.disabled= true;
        checkwinner();
    })
})
 const disableboxes=()=>{
    for(let box of boxes){
        box.disabled= true;
    }
}
 const enableboxes=()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
        
 }

 const showwinner=(winner)=>{
    message.innerText=`Congratulations , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    audio.play();
    disableboxes();
 }
const checkwinner=()=>{
    for(let pattern of winpatterns){
         if(boxes[pattern[0]].innerText === boxes[pattern[1]].innerText  && boxes[pattern[2]].innerText === boxes[pattern[1]].innerText && boxes[pattern[0]].innerText !="" ){
            showwinner(boxes[pattern[0]].innerText);
            
         }
    }
}
newGame_btn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);