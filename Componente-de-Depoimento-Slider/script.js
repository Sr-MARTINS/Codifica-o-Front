const btNext = document.querySelector(".befor")
const btPrev = document.querySelector(".after")
const elements = document.querySelectorAll(".card");


const showSlic = () => {
    
}

document.addEventListener("click", () => {
    // const pos = elements.target
    // console.log(pos)
})

btNext.addEventListener("click", () => {
//    const slice = elements.length;
//    console.log(slice)

//    const achar = document.querySelectorAll(".card")[0]
//    console.log(achar)

    elements.style.transform = "translate(0,-375px)"
})

btPrev.addEventListener("click", () => {
    console.log("Oi")
})