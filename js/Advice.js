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
  Agradecimento.style.left = '-100%';
  Container.style.opacity = '1';
})
