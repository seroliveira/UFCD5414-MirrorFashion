<?php
$cabecalho_title = "Produto da Mirror Fashion";
$cabecalho_css = '<link rel="stylesheet" href="css/produto.css">';
include("cabecalho.php"); ?>

<div class="produto-back">
    <div class="container">
        <div class="produto">
            <h2>Fuzzy Cardigan</h2>
            <p>por apenas R$ 129,00</p>

            <form action="checkout.php" method="post">
                <input type="hidden" name="id" value="2">
                <input type="hidden" name="nome" value="Fuzzy Cardigan">
                <input type="hidden" name="preco" value="R$ 129,00">
                <fieldset class="cores">
                    <legend>Escolha a cor:</legend>

                    <input type="radio" name="cor" id="verde" value="verde" checked>
                    <label for="verde">
                        <img src="img/produtos/foto2-verde.png" alt="verde">
                    </label>

                    <input type="radio" name="cor" id="rosa" value="rosa">
                    <label for="rosa">
                        <img src="img/produtos/foto2-rosa.png" alt="rosa">
                    </label>

                    <input type="radio" name="cor" id="azul" value="azul">
                    <label for="azul">
                        <img src="img/produtos/foto2-azul.png" alt="azul">
                    </label>
                </fieldset>

                <fieldset class="tamanhos">
                    <legend>Escolha o tamanho:</legend>

                    <input type="range" name="tamanho" id="tamanho" min="36" max="46" value="42" step="2">
                    <output for="tamanho" name="valortamanho">42</output>
                </fieldset>

                <input type="submit" value="Comprar" class="comprar">
            </form>
        </div>

        <div class="detalhes">
            <h3>Detalhes do produto</h3>

            <p>Esse é o melhor casaco de Cardigã que você já viu. Excelente material italiano com estampa desenhada
                pelos artesãos da comunidade de Krotor nas ilhas gregas. Compre já e receba hoje mesmo pela nossa
                entrega a jato.</p>

            <table>
                <thead>
                    <tr>
                        <th>Característica</th>
                        <th>Detalhes</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Modelo</td>
                        <td>Cardigã 7845</td>
                    </tr>
                    <tr>
                        <td>Material</td>
                        <td>Algodão e poliestes</td>
                    </tr>
                    <tr>
                        <td>Cores</td>
                        <td>Azul, Rosa e Verde</td>
                    </tr>
                    <tr>
                        <td>Lavagem</td>
                        <td>Lavar a mão</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

<script src="js/jquery.js"></script>
<script src="js/produto.js"></script>

<?php include("rodape.php"); ?>