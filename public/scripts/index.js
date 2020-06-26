const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const closeWithButton = document.querySelector("#modal .header a")

buttonSearch.addEventListener("click", () => {
    modal.classList.toggle("hide")    
})

closeWithButton.addEventListener("click", () => {
    modal.classList.toggle("hide")
})
