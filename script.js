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

// The e parameter represents the event object that gets passed to the function when it's called. This object contains information about the event, such as the form element that triggered it.
function handleSubmit(e) {
  e.preventDefault()
  let searchField = document.getElementById("search-term");
  let searchTerm = searchField.value;
  console.log(searchTerm)
  let allElements = document.querySelectorAll(".main-text")
  console.log(allElements[0]);
  // let elementsArr = Array.from(allElements);
  // console.log(elementsArr)
  // console.log(elementsArr[0].textContent)
  for (let i = 0; i < allElements.length; i++) {
    let currentElement = allElements[i];
    if (currentElement.textContent.includes(searchTerm))
      console.log(currentElement.textContent)
    // this if statement is checking if something is truthy (things that evaluate to true)

    for (let i = 0; i < allElements.length; i++) {
      let words = allElements[i].innerText.split(" ");

      for (let j = 0; j < words.length; j++) {
        if (words[j].toLowerCase() === searchTerm.toLowerCase()) {
          allElements[i].style.backgroundColor = "pink"; 
            console.log(allElements[i]);
          }
        }
      }
    }
  }
let form = document.getElementById("search")
form.addEventListener("submit", handleSubmit)




