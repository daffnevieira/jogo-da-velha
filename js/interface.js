document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick)
    })
})

function handleClick(event){
    console.log(event.target)

    let square = event.target
    let position = square.id
    
    if(handleMove(position)){
        let resultado = document.getElementById('aga1')
        setTimeout(() =>{
            resultado.innerHTML = `<h1>O Jogo acabou</h1>
            <h1>Vencedor foi o jogador: ${playerTime}</h1>`
        }, 10)
        
    }
    updateSquares()
}
function updateSquare(position){
    let square = document.getElementById(position)
    let symbol = board[position]
    square.innerHTML =  `<div class='${symbol}'></div>`
}

function updateSquares(){
    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{
        let position = square.id
        let symbol = board[position]
        if (symbol != ''){
            square.innerHTML =  `<div class='${symbol}'></div>`
        }

    })
    

}
