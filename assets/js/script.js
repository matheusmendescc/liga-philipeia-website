function exibirAdulto() {
    var display_adulto = document.getElementById('div-adulto').style.display = 'block';
    var display_escolas = document.getElementById("div-escolas").style.display = 'none';
    var botao_adulto = document.getElementById("button-adulto").style.borderBottom = 'solid 1px var(--red-color)';
    var botao_escolas = document.getElementById("button-escolar").style.borderBottom = 'none';
}

function exibirEscolas() {
    var display_adulto = document.getElementById('div-adulto').style.display = 'none';
    var display_escolas = document.getElementById('div-escolas').style.display = 'block';
    var botao_adulto = document.getElementById("button-adulto").style.borderBottom = 'none';
    var botao_escolas = document.getElementById("button-escolar").style.borderBottom = 'solid 1px var(--red-color)';
}