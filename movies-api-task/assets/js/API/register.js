import { endpoints } from "./constants.js"
import { post } from "./requests/index.js"

let form1 = document.querySelector(".form1")
let name1 = document.querySelector(".name1")
let password1 = document.querySelector(".password1")
let email1 = document.querySelector(".email1")
let name2 = document.querySelector(".name2")
let password2 = document.querySelector(".password2")
let form2 = document.querySelector(".form2")
let signin = document.querySelector(".sign-in")
let signup = document.querySelector(".signup-btn")
let output = document.querySelector(".fa-sign-out")
let user = document.querySelector(".user")
let backSign = document.querySelector(".back-sign")

class User {
    constructor(name1,password1,email1,id,islogged){
        this.id =id
        this.name1=name1
        this.password1=password1
        this.email1=email1
        this.islogged=false
    }
}
 let ID=crypto.randomUUID()
signup.addEventListener("click",(e)=>{
    console.log("salam");
    e.preventDefault()
 
    const newUser = new User(name1.value,password1.value,email1.value,ID)
    reset()
    post(endpoints.user,newUser)
    window.location.replace("signin.html")
})
function reset() {
    name1.value="",
    password1.value="",
    email1.value=""
}