function numeroParaReal(numero) {
    return "R$ " + numero.toFixed(2).replace(".", ",");
}

function realParaNumero(texto) {
    return parseFloat(texto.replace("R$ ", "").replace(",", "."));
}