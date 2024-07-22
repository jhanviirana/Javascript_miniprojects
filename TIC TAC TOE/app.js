
// let music = new Audio("***")

let turn ="X"

let gameOver=false;

//Function to change th turn 
const changeTurn =  ()=>{
    return turn === "X"?"0": "X"//turnary operrator:if X then 0 otherwise X

}

//Function tp check win
const winner= ()=>{
 
    let boxtext = document.getElementsByClassName("boxtext");
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2]
        
    ]

    win.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && boxtext[e[0]].innerText !== '')

        document.querySelector('.infoo').innerText = boxtext[e[0]].innerText + " Won"
        gameOver=true;
    })
}


//Main logic
let boxes=document.getElementsByClassName("box")

Array.from(boxes).forEach(element => {
    let boxtext= element.querySelector('.boxtext')//here we used "element." instead of using document  coz we need the element under div under span.
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();//here we can't direct call the fun bcz we need to return
            // audionTurn.play()
            winner()

            if(!gameOver)
            {document.getElementsByClassName("infoo")[0].innerText = "Turn for" +turn;
            }
        }
    })
})


//reset button
reset.addEventListener('click',()=>{
    let boxtext= document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = ""
    })


})
