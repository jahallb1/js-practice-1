let button1El = document.getElementById("button1")
let button2El = document.getElementById("button2")
let button3El = document.getElementById("button3")
let button4El = document.getElementById("button4")

function button1Click () {
     
    if ("class" === "buttonOne") {
        button1El.removeAttribute("class") 
    } 
    button1El.setAttribute("class","buttonOne" ) 
}

button1El.onclick = button1Click