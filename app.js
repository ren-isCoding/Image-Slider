let imgsContainer = document.querySelector(".imgs-container")
let imgs = document.querySelectorAll(".imgs-container img")
let prevBtn = document.querySelector("#prevBtn")
let nextBtn = document.querySelector("#nextBtn")

let counter = 1
let numberOfImgs = imgs.length

nextBtn.addEventListener("click", (e) => {
    imgsContainer.style.transform +=
        "translateX(" + (-imgsContainer.offsetWidth + "px)")
    counter++
    if (counter > numberOfImgs) {
        imgsContainer.style.transform = "translateX(0)"
        counter = 1
    }
    console.log(counter)
})
prevBtn.addEventListener("click", (e) => {
    imgsContainer.style.transform +=
        "translateX(" + (+imgsContainer.offsetWidth + "px)")
    counter--
    if (counter < 1) {
        imgsContainer.style.transform =
            "translateX(" +
            (-imgsContainer.offsetWidth * (numberOfImgs - 1) + "px)")
        counter = numberOfImgs
    }
    console.log(counter)
})

setInterval(() => {
    nextBtn.click()
}, 4000)

console.log(new Date())
