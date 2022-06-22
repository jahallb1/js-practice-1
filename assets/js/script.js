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

function button2Click () {
    confirm("hello!")
}

function button3Click() {
    window.location.href = "page2.html"
}

button1El.onclick = button1Click
button2El.onclick = button2Click
button3El.onclick = button3Click