var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannerAtual = 0;
var intervaloId = setInterval(trocaBanner, 4000);
var pausado = false;

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector(".img-destaques img").src = banners[bannerAtual];
}

document.getElementById("toggle").addEventListener("click", function () {
    var icon = document.getElementById("icon");

    if (!pausado) {
        clearInterval(intervaloId);

        // Muda para ícone de play
        icon.innerHTML = `<polygon points="5,4 19,12 5,20" fill="white" />`;

    } else {
        intervaloId = setInterval(trocaBanner, 4000);

        // Muda para ícone de pausa
        icon.innerHTML = `
    <rect x="5" y="4" width="4" height="16" fill="white"></rect>
    <rect x="15" y="4" width="4" height="16" fill="white"></rect>
    `;
    }

    pausado = !pausado;
});

$(".novidades, .mais-vendidos").addClass("painel-compacto");

$(".novidades button").click(function () {
    $(".novidades").removeClass("painel-compacto");
});

$(".mais-vendidos button").click(function () {
    $(".mais-vendidos").removeClass("painel-compacto");
});