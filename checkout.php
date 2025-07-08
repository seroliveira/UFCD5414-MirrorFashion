<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout Mirror Fashion</title>
    <link rel="stylesheet" href="css/bootstrap-flatly.css">

    <style>
        body {
            padding-top: 50px;
        }

        .form-control:invalid {
            border: 1px solid #c00;
        }

        .navbar {
            margin: 0;
            /* position: relative; */
        }

        .navbar .glyphicon {
            color: yellow;
        }

        /* .navbar-toggle {
            position: absolute;
            right: 5%;
            top: 50%;
            transform: translateY(-50%);
            margin: 0;
        }

        ul {
            position: absolute;
            left: 150px;
            top: 50%;
            transform: translateY(-50%);
            margin: 0;
        }

        @media (max-width: 767px) {
            ul.navbar-nav {
                position: static;
                transform: none;
                margin: 0;
            }

            .navbar-toggle {
                position: absolute;
                top: 15px;
                transform: none;
            }
        } */
    </style>
</head>

<body>
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="navbar-header">
            <a href="index.php" class="navbar-brand">
                <img src="img/logo-rodape.png" alt="Mirror Fashion" class="img-responsive">
            </a>
            <button class="navbar-toggle" type="button" data-target=".navbar-collapse" data-toggle="collapse">
                <span class="glyphicon glyphicon-align-justify"></span>
            </button>
        </div>

        <ul class="nav navbar-nav collapse navbar-collapse">
            <li><a href="sobre.php"><span class="glyphicon glyphicon-home"></span>&nbsp;Sobre</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-question-sign"></span>&nbsp;Ajuda</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-list-alt"></span>&nbsp;Perguntas Frequentes</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-bullhorn"></span>&nbsp;Entre em contacto</a></li>
        </ul>
    </nav>

    <div class="jumbotron">
        <div class="container">

            <h1>Ótima escolha!</h1>
            <p>Obrigado por comprar na Mirror Fashion! Preencha os seus dados para efetivar a compra.</p>

        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-sm-4 col-lg-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h2 class="panel-title">Sua compra</h2>
                    </div> <!--  fim .panel-heading -->
                    <div class="panel-body">
                        <img src="img/produtos/foto<?= $_POST['id'] ?>-<?= $_POST['cor'] ?>.png" alt="Foto1" class="img-thumbnail img-responsive">
                        <dl>
                            <dt>Produto</dt>
                            <dd>
                                <?= $_POST['nome'] ?>
                            </dd>

                            <dt>Preço</dt>
                            <dd id="preco">
                                <?= $_POST['preco'] ?>
                            </dd>

                            <dt>Cor</dt>
                            <dd>
                                <?= $_POST['cor'] ?>
                            </dd>

                            <dt>Tamanho</dt>
                            <dd>
                                <?= $_POST['tamanho'] ?>
                            </dd>
                        </dl>

                        <div class="form-group">
                            <label for="qt">Quantidade</label>
                            <input type="number" name="qt" id="qt" class="form-control" min="1" max="99" value="1">
                        </div>
                        <div class="form-group">
                            <label for="total">Total</label>
                            <output for="qt valor" id="total" class="form-control">
                                <?= $_POST['preco'] ?>
                            </output>
                        </div>
                    </div> <!--  fim .panel-body -->
                </div> <!--  fim .panel e .panel-default -->
            </div> <!--  fim .col-sm-4 -->
            <div class="col-sm-8 col-lg-9">
                <form action="#">
                    <div class="row">
                        <fieldset class="col-md-6">
                            <legend>Dados Pessoais</legend>
                            <div class="form-group">
                                <label for="nome">Nome Completo</label>
                                <input type="text" name="nome" id="nome" class="form-control" autofocus required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <div class="input-group">
                                    <span class="input-group-addon">@</span>
                                    <input type="email" name="email" id="email" class="form-control" placeholder="email@exemplo.com">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="cpf">CPF</label>
                                <input type="text" name="cpf" id="cpf" data-mask="999.999.999-99" class="form-control" placeholder="000.000.000-00" required>
                            </div>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="spam" checked value="sim">Quero receber spam da Mirror Fashion
                                </label>
                            </div>
                        </fieldset>
                        <fieldset class="col-md-6">
                            <legend>Cartão de Crédito</legend>
                            <div class="form-group">
                                <label for="numero-cartao">Número - CVV</label>
                                <input type="text" name="numero-cartao" id="numero-cartao" data-mask="9999 9999 9999 9999 - 999" class="form-control" placeholder="0000 0000 0000 0000 - 000">
                            </div>
                            <div class="form-group">
                                <label for="bandeira-cartao">Bandeira</label>
                                <select name="bandeira-cartao" id="bandeira-cartao" class="form-control">
                                    <option value="master">MasterCard</option>
                                    <option value="visa">Visa</option>
                                    <option value="amex">American Express</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="validade-cartao">Validade</label>
                                <input type="month" name="validade-cartao" id="validade-cartao" class="form-control">
                            </div>
                        </fieldset>
                    </div>

                    <button type="submit" class="btn btn-primary btn-lg pull-right">
                        <span class="glyphicon glyphicon-thumbs-up"></span>
                        Confirmar Pedido
                    </button>
                </form>
            </div> <!--  fim .col-sm-8 -->
        </div> <!--  fim .row -->
    </div> <!--  fim .container -->

    <script>
        document.querySelector('input[type=email]').oninvalid = function() {
            // remove mensagens de erro antigas
            this.setCustomValidity("");

            // re-executar a validação
            if (!this.validity.valid) {
                // se inválido, coloca mensagem de erro
                this.setCustomValidity("Email inválido!");
            }
        }
    </script>

    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/inputmask-plugin.js"></script>

    <script src="js/converteMoeda.js"></script>
    <script src="js/testaConversao.js"></script>

    <script src="js/total.js"></script>
</body>

</html>