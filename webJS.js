const console = require("node:console");

let js = document.getElementById("js");
console.log(js)
let class1 = document.getElementsByClassName("box1");
console.log(class1)
let name1 = document.getElementsByTagName("li")
console.log(name1)
let class2 = document.querySelector(".wrapper h1")
console.log(class2)
let android = document.querySelector("#js")
android.innerText = "Java Script"
android.style.color = "gray"
let languageQuery = document.querySelector (".wantedList")
let removed = document.createElement("li")
let react = document.createElement("li")
removed.innerText = "removed"
react.innerText = "React"
languageQuery.append(removed)
languageQuery.append(react)
console.log(languageQuery)
let remove1 = document.querySelectorAll("li")[9]
let remove2 = document.querySelectorAll("li")[10]
remove1.remove()
remove2.remove()
console.log(languageQuery)
let done1 = "   تم الارسال"
function send(){
    document.getElementById("done").innerText=done1
}

let six = 1
let clicks = 0;
function add() {
    clicks++ ;
    update()
}
function sub(){
    clicks-- ;
    update()
}
function update(){
        document.getElementById("clicks").innerText=clicks
    if (clicks === 67)
    document.getElementById("clicks").innerText=clicks +"\t(\t\t\tLOL \"67\")"
}

const d = new Date(2026 , 1 , 23)
document.getElementById("card_date").innerText=`${d.getDate()} ${d.getMonth() +1}  ${d.getFullYear()}`


const form = document.querySelector('form')


const formData = new FormData()