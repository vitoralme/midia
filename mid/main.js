function tocaSom (idElementSom) {
    document.querySelector(idElementSom).play()
}

const listaDeTeclas = document.querySelectorAll('.tecla')

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    listaDeTeclas[contador].onclick = function () {
        tocaSom(idAudio)
    }
}
