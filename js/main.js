// Banner rotativo com pausa/play
var banners = ["img/destaque-home.jpg", "img/destaque-home-2.jpg"];
var bannerAtual = 0;
var intervaloId = setInterval(trocaBanner, 4000);
var pausado = false;

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % banners.length;
    $(".img-destaques img").attr("src", banners[bannerAtual]);
}

$("#toggle").on("click", function () {
    var $icon = $("#icon");

    if (!pausado) {
        clearInterval(intervaloId);
        // Ícone de play
        $icon.html('<polygon points="5,4 19,12 5,20" fill="white" />');
    } else {
        intervaloId = setInterval(trocaBanner, 4000);
        // Ícone de pausa
        $icon.html(
            '<rect x="5" y="4" width="4" height="16" fill="white"></rect>' +
            '<rect x="15" y="4" width="4" height="16" fill="white"></rect>'
        );
    }

    pausado = !pausado;
});

// Painéis compactos de novidades e mais vendidos
$(".novidades, .mais-vendidos").addClass("painel-compacto");

$(".novidades button").click(function () {
    $(".novidades").removeClass("painel-compacto");
});

$(".mais-vendidos button").click(function () {
    $(".mais-vendidos").removeClass("painel-compacto");
});

// Atualiza valor do tamanho em tempo real
$("[name=tamanho]").on("input", function () {
    $("[name=valortamanho]").val(this.value);
});

// Cálculo de preço total com conversão de moeda
function numeroParaReal(numero) {
    return "R$ " + numero.toFixed(2).replace(".", ",");
}

function realParaNumero(texto) {
    return parseFloat(texto.replace("R$ ", "").replace(",", "."));
}

var $input_quantidade = document.querySelector("#qt");
var $output_total = document.querySelector("#total");

$input_quantidade.oninput = calculaEMostraTotal;

function calculaEMostraTotal() {
    var quantidade = $input_quantidade.value;
    var valorUnitarioTexto = document.querySelector("#preco").textContent;
    var valorUnitarioNumero = realParaNumero(valorUnitarioTexto);

    var total = numeroParaReal(quantidade * valorUnitarioNumero);
    $output_total.value = total;
}