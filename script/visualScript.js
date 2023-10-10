
                     
const panelCount = 3 // Number of section elements in the main container
const mintranslate = 0, //Minimum and maximum delocation
      maxtranslate = 70.6,
      minarrowtranslate = -80,
      maxarrowtranslate = 34.2

let translate = mintranslate,
    arrowtranslate = minarrowtranslate

const mainContainer = document.getElementById("main")

//Gets all the section in the main container
const sections = document.getElementsByTagName("section")
const arrow = document.getElementById("arrow")

//Gets where the user already selected that he has a account. 
//Used for a login tab, or change at the register form's call
let loginmode = false
const logintext = document.getElementById("account")

window.addEventListener('wheel', (ev) => {
    const direction = ev.deltaY / 100

    translate = translate + direction
    arrowtranslate = arrowtranslate - direction * 1.75

    if (-translate > maxtranslate ) translate = -maxtranslate
    if (translate > 0) translate = 0
    if(arrowtranslate > maxarrowtranslate ) arrowtranslate = maxarrowtranslate
    if(arrowtranslate < minarrowtranslate ) arrowtranslate = minarrowtranslate
    SetTranslate()
})


function SetTranslate(){
    mainContainer.style.transform = `translate(${translate}%,0)`
    arrow.style.transform = `translate(${arrowtranslate}%,0)`
}
SetTranslate()

//Hello programmer, fell free to destroy my code, it's kinda bad...