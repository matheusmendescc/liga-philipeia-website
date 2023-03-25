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

function exibirPartidas() {
    var display_partidas = document.getElementById('div-partidas').style.display = 'block';
    var display_classificacao = document.getElementById("div-classificacao").style.display = 'none';
    var display_news = document.getElementById("div-news").style.display = 'none';
    var botao_partidas = document.getElementById("botao-partidas").style.borderBottom = 'solid 3px var(--white-color)';
    var botao_classificacao = document.getElementById("botao-classificacao").style.borderBottom = 'none';
    var botao_news = document.getElementById('botao-news').style.borderBottom = "none";
}

function exibirClassificacao() {
    var display_partidas = document.getElementById('div-partidas').style.display = 'none';
    var display_classificacao = document.getElementById("div-classificacao").style.display = 'block';
    var display_news = document.getElementById("div-news").style.display = 'none';
    var botao_partidas = document.getElementById("botao-partidas").style.borderBottom = "none";
    var botao_classificacao = document.getElementById("botao-classificacao").style.borderBottom = 'solid 3px var(--white-color)';
    var botao_news = document.getElementById('botao-news').style.borderBottom = "none";
}

function exibirNews() {
    var display_partidas = document.getElementById('div-partidas').style.display = 'none';
    var display_classificacao = document.getElementById("div-classificacao").style.display = 'none';
    var display_news = document.getElementById("div-news").style.display = 'block';
    var botao_classificacao = document.getElementById("botao-classificacao").style.borderBottom = 'none';
    var botao_partidas = document.getElementById("botao-partidas").style.borderBottom = "none";
    var botao_news = document.getElementById('botao-news').style.borderBottom = "solid 3px var(--white-color)";
}