let buttonOne = document.getElementById("btn1");

buttonOne.addEventListener("click", () => {
  let p1 = document.querySelector("p1")
  let current = p1.textContent
  let lower = p1.textContent.toLowerCase()
  if (current === lower) {
    current = current.toUpperCase()
    p1.textContent = current
  } else {
    current = current.toLowerCase()
    console.log(current)
    p1.textContent = current
  }
})


let infoMain = document.querySelector("h4");

infoMain.addEventListener("mouseover", () => {
  infoMain.style.color = "red";
});

infoMain.addEventListener("mouseout", () => {
  infoMain.style.color = "blue";
});


function handleSubmit(e){
  e.preventDefault()
  let searchField = document.getElementById("search-term");
  let searchTerm = searchField.value; 
  console.log(searchTerm)
  let allElements = document.querySelectorAll(".main-text")
  console.log(allElements[0]);
// let elementsArr = Array.from(allElements);
  // console.log(elementsArr)
  // console.log(elementsArr[0].textContent)
for (let i = 0; i < allElements.length; i++){
  // this if statement is checking if something is truthy (things that evaluate to true)
  
   console.log(allElements[i].innerText)  
let words = allElements[i].innerText.split(" ")
console.log(words)
    // things to match: all lowercase, word with comma, word with period.
    // use a conditional statement to find matches for all lowercase with comma and lowercase with period. try to console log each word match.
  // next, use a for loop and an if statement to find instances of the search term. (it will highlight baby each time it shows up)

 for (let j = 0; j < words.length; i++) {
  let currentWord = words[j].toLowerCase(); // Make search case-insensitive
  let doesMatch = currentWord === searchTerm.toLowerCase();

  if (doesMatch) {
    console.log(words[j]); // Print the matching word with original casing
  } else {
    console.log("No match found"); // Clearer message
  }
}
 
}
    
  }
   



  




let form =document.getElementById("search")
form.addEventListener("submit", handleSubmit)





