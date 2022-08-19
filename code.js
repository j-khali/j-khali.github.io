let petEnemy
let petPlayer
let attackPlayer
let attackEnemy
let livePlayer = 3
let liveEnemy = 3

function showSections(){
    let sectionSelectAttack = document.getElementById("attack")
    sectionSelectAttack.style.display = "block"

    let sectionSelectPet = document.getElementById("pet")
    sectionSelectPet.style.display = "none"
}

function startGame(){
    let sectionSelectAttack = document.getElementById("attack")
    sectionSelectAttack.style.display = "none"

    let sectionRestart = document.getElementById("restart")
    sectionRestart.style.display = "none"


    let buttonPetPlayer = document.getElementById("select-pet")
    buttonPetPlayer.addEventListener("click", selectPetPlayer)

    // Ataques del Jugador
    let buttonFire = document.getElementById("at-fire")
    buttonFire.addEventListener("click", attackFire)
    let buttonWater = document.getElementById("at-water")
    buttonWater.addEventListener("click", attackWater)
    let buttonEarth = document.getElementById("at-earth")
    buttonEarth.addEventListener("click", attackEarth)

    //Reiniciar Juego
    let buttonRestart = document.getElementById("bt-restart")
    buttonRestart.addEventListener("click", restartGame)
}

function selectPetPlayer(){
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatiguella = document.getElementById("ratiguella")
    let spanPetPlayer = document.getElementById("name-pet-live-p")

    if (inputHipodoge.checked){
        alert("Has seleccionado a Hipodogue.")
        spanPetPlayer.innerHTML = "Hipodogue"
        petPlayer = "Hipodogue"
        showSections()
        selectPetEnemy()
    } else if (inputCapipepo.checked){
        alert("Has seleccionado a Capipepo.")
        spanPetPlayer.innerHTML = "Capipepo"
        petPlayer = "Capipepo"
        showSections()
        selectPetEnemy()
    } else if (inputRatiguella.checked){
        alert("Has seleccionado a Ratiguella.")
        spanPetPlayer.innerHTML = "Ratiguella"
        petPlayer = "Ratiguella"
        showSections()
        selectPetEnemy()
    } else{
        alert("No has seleccionado ninguna mascota, por favor selecciona alguna para empezar el juego.")
    }
}

function selectPetEnemy(){
    petEnemy = aleatorio (1, 3)
    spanPetEnemy = document.getElementById("name-pet-live-e")

    if (petEnemy == 1){
        alert("El enemigo ha seleccionado a Hipodoge.")
        spanPetEnemy.innerHTML = "Hipodogue"
        petEnemy = "Hipodogue"
    } else if (petEnemy == 2){
        alert("El enemigo ha seleccionado a Capipepo.")
        spanPetEnemy.innerHTML = "Capipepo"
        petEnemy = "Capipepo"
    } else{
        alert("El enemigo ha seleccionado a Ratiguella.")
        spanPetEnemy.innerHTML = "Ratiguella"
        petEnemy = "Ratiguella"
    }
    
    buttonPetPlayer.disabled = true
}

function enemyAttack(){
    let rAttack = aleatorio(1, 3)
    
    if (rAttack==1){
        attackEnemy = "Fuego 🔥"
        alert("El enemigo ha atacado con Fuego 🔥.")
    } else if (rAttack==2){
        attackEnemy = "Agua 💧"
        alert("El enemigo ha atacado con Agua 💧.")
    } else{
        attackEnemy = "Tierra 🌱"
        alert("El enemigo ha atacado con Tierra 🌱.")
    }

    battle()
}

function attackFire(){
    attackPlayer="Fuego 🔥"
    alert("Has atacado con " + attackPlayer)
    enemyAttack()
}

function attackWater(){
    attackPlayer="Agua 💧"
    alert("Has atacado con " + attackPlayer)
    enemyAttack()
}

function attackEarth(){
    attackPlayer="Tierra 🌱"
    alert("Has atacado con " + attackPlayer)
    enemyAttack()
}

function createMessage(battleResult){
    let sectionMensaje = document.getElementById("mensaje")

    let mensaje = document.createElement("p")
    mensaje.innerHTML = "Tu " + petPlayer + " ataco con " + attackPlayer + ", la " + petEnemy + " del enemigo ataco con " + attackEnemy + " - " + battleResult
    sectionMensaje.appendChild(mensaje)
}

function battle(){
    let spanLivePlayer = document.getElementById("live-player")
    let spanLiveEnemy = document.getElementById("live-enemy")


    if (attackPlayer == attackEnemy){
        createMessage("Empate 😧😬")
    } else if ((attackPlayer == "Agua 💧" && attackEnemy == "Fuego 🔥") || (attackPlayer == "Fuego 🔥" && attackEnemy == "Tierra 🌱") || (attackPlayer == "Tierra 🌱" && attackEnemy == "Agua 💧")){
        createMessage("Ganaste 😃🎉")
        liveEnemy--
        spanLiveEnemy.innerHTML = liveEnemy
    } else{
        createMessage("Perdiste 😭😿")
        livePlayer--
        spanLivePlayer.innerHTML = livePlayer
    }

    live()

}

function live(){

    if (livePlayer <= 0){
        creteMessageFinal("Perdido, tu mascota se ha quedado sin vidas.")
    } else if (liveEnemy <= 0){
        creteMessageFinal("Ganado, acabaste con las vidas de la mascota enemiga.")
    }
}

function creteMessageFinal(finalResult){
    let sectionMensajeWinLose = document.getElementById("mensaje")

    let message = document.createElement("h1")
    message.innerHTML = "Has " + finalResult
    sectionMensajeWinLose.appendChild(message)

    let buttonFire = document.getElementById("at-fire")
    buttonFire.disabled = true
    let buttonWater = document.getElementById("at-water")
    buttonWater.disabled = true
    let buttonEarth = document.getElementById("at-earth")
    buttonEarth.disabled = true

    let sectionRestart = document.getElementById("restart")
    sectionRestart.style.display = "block"

}

function restartGame(){
    location.reload()
}

function aleatorio (min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener("load", startGame)
