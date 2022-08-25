let petEnemy
let petPlayer
let attackPlayer
let attackEnemy
let livePlayer = 3
let liveEnemy = 3

function showSections(){
    let sectionSelectAttack = document.getElementById("attack")
    sectionSelectAttack.style.display = "flex"

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
    let inputRatigueya = document.getElementById("ratigueya")
    let spanPetPlayer = document.getElementById("name-pet-live-p")

    if (inputHipodoge.checked){
        spanPetPlayer.innerHTML = "Mascota: Hipodogue"
        petPlayer = "Hipodogue"
        showSections()
        selectPetEnemy()
    } else if (inputCapipepo.checked){
        spanPetPlayer.innerHTML = "Mascota: Capipepo"
        petPlayer = "Capipepo"
        showSections()
        selectPetEnemy()
    } else if (inputRatigueya.checked){
        spanPetPlayer.innerHTML = "Mascota: Ratigueya"
        petPlayer = "Ratigueya"
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
        spanPetEnemy.innerHTML = "Enemigo: Hipodogue"
        petEnemy = "Hipodogue"
    } else if (petEnemy == 2){
        spanPetEnemy.innerHTML = "Enemigo: Capipepo"
        petEnemy = "Capipepo"
    } else{
        spanPetEnemy.innerHTML = "Enemigo: Ratigueya"
        petEnemy = "Ratigueya"
    }
}

function enemyAttack(){
    let rAttack = aleatorio(1, 3)
    
    if (rAttack==1){
        attackEnemy = "Fuego 🔥"
    } else if (rAttack==2){
        attackEnemy = "Agua 💧"
    } else{
        attackEnemy = "Tierra 🌱"
    }

    battle()
}

function attackFire(){
    attackPlayer="Fuego 🔥"
    enemyAttack()
}

function attackWater(){
    attackPlayer="Agua 💧"
    enemyAttack()
}

function attackEarth(){
    attackPlayer="Tierra 🌱"
    enemyAttack()
}

function createMessage(battleResult){
    let sectionMensaje = document.getElementById("resultado")
    let ataqueJugador = document.getElementById("attack-player")
    let ataqueEnemigo = document.getElementById("attack-enemy")

    let nuevoAtaqueJugador = document.createElement("p")
    let nuevoAtaqueEnemigo = document.createElement("p")

    sectionMensaje.innerHTML = battleResult
    nuevoAtaqueJugador.innerHTML = attackPlayer
    nuevoAtaqueEnemigo.innerHTML = attackEnemy

    ataqueJugador.appendChild(nuevoAtaqueJugador)
    ataqueEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function battle(){
    let alivePlayer = document.getElementById("live-player")
    let aliveEnemy = document.getElementById("live-enemy")


    if (attackPlayer == attackEnemy){
        createMessage("Empate 😧😬")
    } else if ((attackPlayer == "Agua 💧" && attackEnemy == "Fuego 🔥") || (attackPlayer == "Fuego 🔥" && attackEnemy == "Tierra 🌱") || (attackPlayer == "Tierra 🌱" && attackEnemy == "Agua 💧")){
        createMessage("Ganaste 😃🎉")
        liveEnemy--
        aliveEnemy.innerHTML = "❤️: "+ liveEnemy
    } else{
        createMessage("Perdiste 😭😿")
        livePlayer--
        alivePlayer.innerHTML = "❤️: "+ livePlayer
    }

    live()
}

function live(){

    if (livePlayer <= 0){
        createMessageFinal("Has Perdido, tu mascota se ha quedado sin vidas.")
    } else if (liveEnemy <= 0){
        createMessageFinal("Has Ganado, acabaste con las vidas de la mascota enemiga.")
    }
}

function createMessageFinal(finalResult){
    let sectionMensaje = document.getElementById("resultado")
    sectionMensaje.innerHTML = finalResult

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