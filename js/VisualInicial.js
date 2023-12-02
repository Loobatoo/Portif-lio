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
