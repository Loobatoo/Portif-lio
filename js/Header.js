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