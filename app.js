let imgsContainer = document.querySelector(".imgs-container")
let imgs = document.querySelectorAll(".imgs-container img")
let prevBtn = document.querySelector("#prevBtn")
let nextBtn = document.querySelector("#nextBtn")
let radioBtns = document.querySelectorAll(".radio")

let counter = 0
let numberOfImgs = imgs.length - 1

nextBtn.addEventListener("click", (e) => {
    counter++
    setCurrentSlide()
})
prevBtn.addEventListener("click", (e) => {
    counter--
    setCurrentSlide()
})

let timer = setInterval(clickNext, 4000)
function clickNext() {
    nextBtn.click()
}

function setCurrentSlide() {
    if (counter < 0) {
        counter = numberOfImgs
    }
    if (counter > numberOfImgs) {
        counter = 0
    }
    imgsContainer.style.transform = "translateX(" + (-imgsContainer.offsetWidth * counter + "px)")
    radioBtns[counter].checked = true

    if (timer) clearInterval(timer)
    timer = setInterval(clickNext, 4000)
}

radioBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
        counter = btn.dataset.i
        setCurrentSlide()
    })
)

setCurrentSlide()
