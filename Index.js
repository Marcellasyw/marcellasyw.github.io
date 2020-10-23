let money = document.getElementById("cash")
let hp = document.getElementById("healthPoint")
let work = document.getElementById("Work")
let health = document.getElementById("Health")
let winLose = document.getElementById("winLose")
let maleRadio = document.getElementById("boy")
let femaleRadio = document.getElementById("girl")
let player = document.getElementById("playerPict")
let playerImg = document.createElement("img") 
let formIntro = document.getElementById("formInt")

window.onload = function(){
  if(player !== null){
    let url = localStorage.getItem("url")
    playerImg.src = url
    player.appendChild(playerImg)
  }
  if(formIntro !== null){
    localStorage.clear()
  }
}

function getMoney(){
  let currentMoney = Number(money.innerHTML) + 30
  let currentHp = Number(hp.innerHTML) - 10
  let result = checkHp(currentMoney,currentHp)
  money.innerHTML = currentMoney
  hp.innerHTML = currentHp
  if (result == true){
    winLose.innerHTML = "Congratulation"
  } else if(result == false) {
    winLose.innerHTML = "You Failed!"
    localStorage.clear()
  }
  // console.log(result)
}

function getHp(){
  let currentMoney = Number(money.innerHTML) - 10
  let currentHp = Number(hp.innerHTML) + 20
  let result = checkHp(currentMoney,currentHp)
  money.innerHTML = currentMoney
  hp.innerHTML = currentHp
  if (result == true){
    winLose.innerHTML = "Congratulation"
  } else if(result == false){
    winLose.innerHTML = "You Failed!"
    localStorage.clear()
  }
}
function checkHp(money,hp){
  if(money >= 1000 && hp == 100){
    return true
  } else if (money < 0 || hp <= 0 || hp > 100){
    return false
  }
}

function gender(event){
  event.preventDefault()
  let male = maleRadio.checked
  let female = femaleRadio.checked

  if(male == true){
    localStorage.setItem("url", "pict/male-removebg-preview.png")
    // playerImg.src="pict/male-removebg-preview.png"
    window.location.href = "game.html"
  } else if (female == true){
    localStorage.setItem("url", "pict/female-removebg-preview.png")
    // playerImg.src="pict/female-removebg-preview.png"
    window.location.href = "game.html"
  }

  console.log(playerImg);
}