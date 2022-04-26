const btnOpen = document.getElementById("btnOpen")
const topBarre = document.getElementById("topBarre")
const mainEl = document.getElementById("main")
const btnColonne = document.getElementById("btnColonne")
const btnTaches = document.getElementById("btnTaches")
btnTaches.disabled = true;
const trash = document.getElementById("trash")
const textarea = document.getElementById("textarea")

const btnTrash = document.getElementById("btnTrash")

btnTrash.addEventListener("click", () => {
    trash.classList.toggle("trashToggle")
})

const modal = document.getElementById("modal")
const btnCloseModal = document.getElementById("btnCloseModal")
const form = document.getElementById("form")
const submit = document.getElementById("submit")
const leftBtn = document.getElementById("left_button")
const rightBtn = document.getElementById("right_button")
var colonneNew = document.querySelectorAll(".colonne")

function moveTast() {
    rightBtn.addEventListener("click", () => {
    })
}


submit.addEventListener("click", () => {
    var errorTab = [];
    let j = 0
    const laTache = document.getElementById("tache")
    const laDate = document.getElementById("date")
    const debutTache = document.getElementById("heureDebut")
    const finTache = document.getElementById("heureFin")

    const inputs = document.querySelectorAll("input")
    const submit = document.getElementById("submit")

    validForm()

    colonneNew = document.querySelectorAll(".colonne")

    createTaches(laTache.value, laDate.value, debutTache.value, finTache.value)

    if (errorTab <= 0) {
        colonneNew[0].appendChild(createTaches(laTache.value, laDate.value, debutTache.value, finTache.value))
         colonneNew[0].setAttribute("id", "premierColonne")
         colonneNew[2].setAttribute("id", "deuxiemeColonne")
         colonneNew[3].setAttribute("id", "troisiemeColonne")
         colonneNew[4].setAttribute("id", "dernierColonne") 
    } else {
        return false
    }

console.log(inputs)
})

/* submit.addEventListener("click", ()=>{
    inputs.forEach(input => input.value = "" )
})
 */

function validForm() {

    const form = document.getElementById("form")
    const err = document.getElementById("errorSpan")
    const laTache = document.getElementById("tache")
    const laDate = document.getElementById("date")
    const debutTache = document.getElementById("heureDebut")
    const finTache = document.getElementById("heureFin")

    const laTacheValue = laTache.value.trim();
    const laDateValue = laDate.value.trim();
    const heureDebutValue = debutTache.value.trim();
    const heureFinValue = finTache.value.trim();

/* ****************************************************************** */
    if (laTacheValue === "") {
        setErrorFor(laTache, "La tâche ne peut être vide")
        j++;
        errorTab.push(j)
    } else {
        setSuccesFor(laTache)
    }
/**********************************************************************/
       if (laDateValue === "") {
        setErrorFor(laDate, "la date ne peut être vide")
        j++;
        errorTab.push(j)
    } 
    /* **********************************************************************/
     if (heureDebutValue === "") {
        setErrorFor(heureDebutValue, "l'heure du debut de tâche ne peut être vide")
        j++;
        errorTab.push(j)
    }
    /* **********************************************************************/
    if (heureFinValue === "") {
        setErrorFor(heureFinValue, "l'heure de la fin de tâche ne peut être vide")
        j++;
        errorTab.push(j)
    }

}

function setErrorFor(input, message) {
    const laDate = document.getElementById("date")
    const debutTache = document.getElementById("heureDebut")
    const finTache = document.getElementById("heureFin")

    const divFormInput = input.parentElement;
    const span = divFormInput.querySelector("span")
    const textarea = divFormInput.querySelector("textarea")
    span.innerHTML = message;
    textarea.className = "spanDecorError";

    textarea.addEventListener("keyup", () => {
        textarea.classList.remove("spanDecorError")
        textarea.classList.add("spanDecorSuccess")
        span.innerHTML = "";
    })

    debutTache.addEventListener("click", () => {
        span.innerHTML = "";
    })

    /* setting times en bas */
    let m = moment()
    let dateCHoisi = moment(laDate.value)

    //validation heure de debut et heure de fin
    let heureDebut = moment.duration(debutTache.value, "milliseconds")
    let heureFin = moment.duration(finTache.value, "milliseconds")
    let diffhours = heureFin - heureDebut

    //si la date est anterieur à la date actuelle
    if (moment(dateCHoisi).isBefore(m)) {
        j++;
        errorTab.push(j)
        alert("vous ne pouvez pas choisir une date anterieur")
    }
    /* end setting times  */
}

function setSuccesFor(input) {
    const divFormInput = input.parentElement;
    const textarea = divFormInput.querySelector("textarea")
    textarea.className = "spanDecorSuccess";
}


addColonne()
var i = 0;
function addColonne() {
    const btnColonne = document.getElementById("btnColonne")
    btnColonne.addEventListener("click", () => {
        if (i < 5) {
            createColonne()
            btnTaches.disabled = false;
            i++;
        } else {
            var popupWarning = alert("⚠️vous ne pouvez pas creer plus de cinq colonnes ⚠️ ")
        }
    })
}

showModal()
let closeModal = btnCloseModal.addEventListener('click', () => {
    modal.style.display = 'none'
})

function showModal() {
    btnTaches.addEventListener("click", () => {
        modal.style.display = 'block';
    })
}

btnOpen.addEventListener("click", function () {
    topBarre.classList.toggle('topBarre_toggle')
})

function createColonne() {

    let colors = ["#c56cf0", "#ffb8b8", "#ff3838", "#ff9f1a", "#fff200"]

    const colonne = document.createElement('div')
    const colonneTitle = document.createElement('div')
    const h2Title = document.createElement("h2")
    const corbeilleCol = document.createElement("button")
    const colonneone = document.getElementById("colonne1")
    const colonneclass = document.querySelectorAll("colonne")
    colonne.style.backgroundImage = "url('../images/logoitachi.png')";
    colonne.style.backgroundPosition = "center";
    colonne.style.backgroundRepeat = "no-repeat";
    colonne.style.backgroundSize = "150%";
    
    /* classes */
    colonne.classList.add("colonne")
    colonneTitle.classList.add("colonne__title")
    h2Title.classList.add("colonne_title--h2")
    h2Title.contentEditable = "true"
    corbeilleCol.classList.add("corbeilleCol")
    colonne.setAttribute("id","colonne"+[i+1])
 

    /* contenu de texte */
    h2Title.textContent = "Colonne " + (i + 1)
    colonne.style.backgroundColor = colors[i]
    corbeilleCol.innerHTML = `<i class="fa-solid fa-trash"></i>`

    /* Ajout noeud */
    colonne.appendChild(colonneTitle)
    colonneTitle.appendChild(h2Title)
    colonne.appendChild(corbeilleCol)

    const supprimerColonne = (corbeilleCol.addEventListener("click", () => {
        main.removeChild(colonne)
        i--;
    }))

    main.appendChild(colonne)
}

function createTaches(laTache, laDate, debutTache, finTache) {

    const trash = document.getElementById("trash")

    const colonneTaches = document.createElement("div")
    const leftButton = document.createElement("left_button")
    const taches = document.createElement("div")
    const tachesTime = document.createElement("div")
    const rightButton = document.createElement("left_button")
    const tachesSpan = document.createElement("span")
    const tachesDate = document.createElement("span")
    const tachesDebut = document.createElement("span")
    const tachesFin = document.createElement("span")
    const archiveTache = document.createElement("button")

    rightButton.addEventListener("click", () => {
        rightButton.parentElement.parentElement.nextSibling.appendChild(colonneTaches)
        console.log(rightBtn.parentElement.parentElement.nextSibling.appendChild(colonneTaches))
    })

    leftButton.addEventListener("click", () => {
        leftButton.parentElement.parentElement.previousSibling.appendChild(colonneTaches)
        console.log(rightBtn.parentElement.nextSibling.appendChild(rightBtn.parentElement))
    })

    archiveTache.addEventListener("click", (e) => {

        e.target.parentElement.parentElement.remove()
        trash.appendChild(e.target.parentElement.parentElement)

        taches.addEventListener("click", () => {
            colonneNew = document.querySelectorAll(".colonne")
            colonneNew[0].appendChild(e.target.parentElement.parentElement)
        })

    })

    leftButton.setAttribute("id", "left_button")
    rightButton.setAttribute("id", "right_button")

    colonneTaches.classList.add("colonne__taches")
    taches.classList.add("taches")
    leftButton.classList.add("left_button", "taches_button")
    rightButton.classList.add("right_button", "taches_button")
    tachesSpan.classList.add("tachesSpan")
    /*  tachesDate.classList.add("tachesTime")
     tachesDebut.classList.add("tachesTime")
     tachesFin.classList.add("tachesTime") */
    archiveTache.classList.add("archivation")
    tachesTime.classList.add("tachesTime")

    leftButton.innerHTML = ` <i class="fa-solid fa-angles-left">`
    rightButton.innerHTML = ` <i class="fa-solid fa-angles-right">`
    archiveTache.innerHTML = `<i class="fa-solid fa-xmark"></i>`

    tachesSpan.innerHTML = laTache
    tachesDate.innerHTML = laDate
    tachesDebut.innerHTML = debutTache
    tachesFin.innerHTML = finTache

    colonneTaches.appendChild(leftButton)
    colonneTaches.appendChild(taches)
    colonneTaches.appendChild(tachesTime)
    colonneTaches.appendChild(rightButton)
    colonneTaches.appendChild(archiveTache)

    taches.appendChild(tachesSpan)
    taches.appendChild(tachesDate)


    tachesTime.appendChild(tachesDate)
    tachesTime.appendChild(tachesDebut)
    tachesTime.appendChild(tachesFin)


    console.log(form)
    return colonneTaches
}










/* btnOpen.addEventListener("click", function () {
    if(topBarre.classList.contains("topBarre_toggle")){
        topBarre.classList.remove('topBarre_toggle')
    }else{
        topBarre.classList.add('topBarre_toggle')
    }
  
    console.log(topBarre)
}) */


/*     let momentTime = moment();

   let dateDebut = laDate.value + " " + debutTache.value
   let formatDate = moment(dateDebut, "YYYY-MM-DD HH-mm")

   let difference = formatDate.diff(momentTime)
   let heureDebut = moment.duration(debutTache.value, "milliseconds")
   let heureFin = moment.duration(finTache.value, "milliseconds")
 
   setInterval(() => {
       document.querySelector(".colonne__taches").style.backgroundColor = "red "
   }, difference);
*/