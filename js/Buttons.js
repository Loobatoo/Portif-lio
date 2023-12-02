const ScrollDownDiv = document.querySelector("#Scroll-down");
const ScrollElement = document.querySelector("#Remove");
  
window.addEventListener("scroll", (e) => {
    if (window.scrollY > 5 && ScrollDownDiv.contains(ScrollElement)) {
        ScrollDownDiv.removeChild(ScrollElement);
    }

    if (window.scrollY < 5 && !ScrollDownDiv.contains(ScrollElement)) {
        ScrollDownDiv.appendChild(ScrollElement);
    }
});


const BtnUp = document.querySelector(".Btn-Up-none")

window.addEventListener("scroll", (e) => {
  if(window.scrollY > 5) {
    BtnUp.classList.remove("Btn-Up-none");
    BtnUp.classList.add("Btn-Up");
  }

  if(window.scrollY < 5) {
    BtnUp.classList.remove("Btn-Up");
    BtnUp.classList.add("Btn-Up-none");
  }
})