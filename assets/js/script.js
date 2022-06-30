let button1El = document.getElementById("button1")
let button2El = document.getElementById("button2")
let button3El = document.getElementById("button3")
let button4El = document.getElementById("button4")
let headerDivEl = document.querySelector(".header")
let arr = [10, 11, 12, 13, 14, 15]

function button1Click () {
     
    if ("class" === "buttonOne") {
        button1El.removeAttribute("class") 
    } 
    button1El.setAttribute("class","buttonOne" ) 
    fizzBuzz(arr)
}

function button2Click () {
    confirm("hello!")
}

function button3Click() {
    window.location.href = "page2.html"
}

const button4Click = () => {
    button4El.setAttribute("style", "color: red;")
    for(i = 0; i < arr.length; i ++) {
        console.log(arr[i])
        let number = document.createElement('h1')
        number.textContent = arr[i]
        headerDivEl.append(number)
        
    }
}


function fizzBuzz(arr) {
    for(i =0; i < arr.length; i++) {
       if (arr[i] % 15 === 0) {
           console.log("Fizzbuzz")
       } else if(arr[i] % 5 === 0) {
           console.log("Fizz")
       } else if(arr[i] % 3 === 0) {
            console.log("Buzz")
       } else {
            console.log(i)
       }
    }
}

button1El.onclick = button1Click
button2El.onclick = button2Click
button3El.onclick = button3Click
button4El.onclick = button4Click