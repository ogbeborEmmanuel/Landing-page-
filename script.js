const name = "ogbebor emmanuel"
console.log(name);

const open = document.getElementById("open")
const navCard = document.getElementById("navCard")
const close = document.getElementById("close")
const body = document.getElementById("body")

open.addEventListener("click", () => {
   open.style.display = "none"
   close.style.display = "block"
   navCard.style.display="block"
   body.style.display ="none"
})


close.addEventListener("click", () => {
   open.style.display = "block"
   close.style.display = "none"
   navCard.style.display="none"
   body.style.display ="block"
})



const Sum = (number1,number2) => {
          return number1 + number2
}

Sum()