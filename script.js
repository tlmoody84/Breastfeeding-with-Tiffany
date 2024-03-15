let buttonOne = document.getElementById("btn1");

buttonOne.addEventListener("click",() => {
let p1 =document.querySelector("p1")
let current=p1.textContent
let lower=p1.textContent.toLowerCase()
  if(current===lower){
    current=current.toUpperCase()
    p1.textContent=current
  }else{
    current=current.toLowerCase()
    console.log(current)
    p1.textContent=current
  }
})


let infoMain = document.querySelector("h4");

infoMain.addEventListener("mouseover", () => {
  infoMain.style.color = "red";
});

infoMain.addEventListener("mouseout", () => {
  infoMain.style.color = "blue";
});


// what is this for?
let love = document.querySelector("h2");
document.addEventListener("DOMContentLoaded", () => {
  love.style.color = "red";
});






