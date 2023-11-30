const BtnOpenHeader = document.querySelector("#Btn-Open-Header");
const BtnCloseHeader = document.querySelector("#Btn-Close-Header");


const Header = document.querySelector(".Header");

BtnOpenHeader.addEventListener("click", () => {
  Header.style.left = '0';
});

BtnCloseHeader.addEventListener("click", () => {
  Header.style.left = '-600px';
});

window.addEventListener("scroll", (e) => {
  Header.style.left = '-600px';
})


new TypeIt("#Titulo", {
    strings: "",
    speed: 400,
    loop: false,
  }).go();

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

ScrollReveal().reveal('.row-1', {
  delay: 0,
  duration: 1000,
  reset: true
});

ScrollReveal().reveal('.row-2', {
  delay: 0,
  duration: 1000,
  reset: true
});

ScrollReveal().reveal('.row-3', {
  delay: 0,
  duration: 1000,
  reset: true
});

ScrollReveal().reveal('.row-4', {
  delay: 0,
  duration: 1000,
  reset: true
});

const ImagemPedro = document.querySelector("#IMG01");

function FecharOlhos() {
  ImagemPedro.style.content = 'url("img/img02.png")';

}

function PararFecharOlhos() {
  ImagemPedro.style.content = 'url("img/img01.png")';
}

function executaAcao() {
  FecharOlhos();

  setTimeout(function() {
    PararFecharOlhos();
  }, 1000);
}

setInterval(executaAcao, 4000);

const Card = document.querySelector("#Card-1");

const Container = document.querySelector(".Container");
const Agradecimento = document.querySelector(".Message");

function checkScroll() {
  const totalHeight = document.body.scrollHeight;
  const visibleHeight = window.innerHeight;
  const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition + visibleHeight >= totalHeight - 1) {
    console.log("Você chegou ao final da tela!");

    Container.style.opacity = '0.3';
    Agradecimento.style.left = '50%';
  }
}

window.addEventListener('scroll', checkScroll);

const Close = document.querySelector(".Close")

Close.addEventListener("click", () => {
  Agradecimento.style.left = '-500px';
  Container.style.opacity = '1';
})

const DarkMode = document.querySelector("#Dark-Mode");
const LightMode = document.querySelector("#Light-Mode");

DarkMode.addEventListener("click", () => {
  document.body.classList.toggle('Light-Mode');
  DarkMode.style.display = 'none';
  LightMode.style.display = 'flex';
})

LightMode.addEventListener("click", () => {
  document.body.classList.toggle('Light-Mode');
  LightMode.style.display = 'none';
  DarkMode.style.display = 'flex';
})

