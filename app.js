const body = document.querySelector('body')
body.style.backgroundColor = 'white'

const div = document.createElement('div')
div.style.display = 'flex'
div.style.flexDirection = 'column'

const buttons_text = ['Rock', 'Paper', 'Scissors']

const p_user = document.createElement('p')
p_user.textContent = 'Player Choice:'

const computer_user = document.createElement('p')
const user_choice = document.createElement('p')
const computer_choice = document.createElement('p')
let winningText = document.createElement('h1')

div.append(p_user)
div.append(user_choice)
div.append(computer_user)
div.append(computer_choice)

computer_user.textContent = 'Computer Choice:'

body.append(div)

let userPick;
let computerPick;
let win_text;

for(let i=0;i<3;i++){
  const button = document.createElement('button')

  button.style.cursor = 'pointer'
  button.textContent = buttons_text[i]
  body.append(button)

  button.addEventListener('click',(e)=>{
    const pick = e.target.textContent;
    if(pick==='Rock'){
      userPick = pick
    }else if(pick==='Paper'){
      userPick = pick
    }else if(pick==='Scissors'){
      userPick = pick
    }
    user_choice.textContent = userPick
    getComputerChoice()
    getWinner()
  })
}

body.append(winningText)

function getComputerChoice(){
  const ran = Math.floor(Math.random()*3)+1;
  if(ran===1){
    computerPick = 'Rock'
  }else if(ran===2){ 
    computerPick = 'Paper'
  }else if(ran===3){
    computerPick = 'Scissors'
  }
  computer_choice.textContent = computerPick
}

function getWinner(){
  if(computerPick===userPick){
    win_text = "It's a draw!" 
  }else if(computerPick==='Rock' && userPick==='Scissors'){
    win_text = 'You lost'
  }else if(computerPick==='Paper' && userPick==='Rock'){
    win_tex = 'You lost'
  }else if(computerPick==='Scissors' && userPick==='Paper'){
    win_text = 'You lost'
  }else if(computerPick==='Rock' && userPick==='Paper'){
    win_text = 'You won!'
  }else if(computerPick==='Paper' && userPick==='Scissors'){
    win_text = 'You won!'
  }else if(computerPick==='Scissors' && userPick==='Rock'){
    win_text = 'You won!'
  }
  winningText.textContent = win_text
}